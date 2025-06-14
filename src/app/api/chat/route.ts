import { NextResponse } from 'next/server';
import OpenAI from 'openai';
import { promises as fs } from 'fs';

const file = await fs.readFile(process.cwd() + '/public/knowledgebase.txt', 'utf8');


const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  console.log(file);
  try {
    const { message, conversationHistory = [] } = await req.json();

    // Prepare messages for OpenAI
    const messages = [
      { role: 'system' as const, content: file.toString() },
      ...conversationHistory.slice(-10), // Keep last 10 messages for context
      { role: 'user' as const, content: message }
    ];

    // Create a streaming response
    const stream = new TransformStream();
    const writer = stream.writable.getWriter();
    const encoder = new TextEncoder();

    // Start processing in the background
    (async () => {
      try {
        const completion = await openai.chat.completions.create({
          model: 'gpt-3.5-turbo',
          messages,
          max_tokens: 500,
          temperature: 0.7,
          stream: true,
        });

        let response = "";

        for await (const chunk of completion) {
          const content = chunk.choices[0]?.delta?.content || '';
          if (content) {
            response += content;
            await writer.write(encoder.encode(`data: ${JSON.stringify({ content })}\n\n`));
          }
        }
        console.log(response);
      } catch (error) {
        console.error('OpenAI API error:', error);
        await writer.write(encoder.encode(`data: ${JSON.stringify({ error: 'Failed to get response' })}\n\n`));
      } finally {
        await writer.close();
      }
    })();

    return new Response(stream.readable, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    });
  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}