import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const SYSTEM_PROMPT = `You are an AI assistant for Global Hiring, a company that provides offshore accounting services and staffing solutions. Here's key information about the company:

ACCOUNTING SERVICES:
- Plan A: $249/month - Monthly Accounting, Payroll & Filings, Sales Tax Filings, Financial Statements
- Plan B: $399/month - Everything in Plan A + Monthly Metrics Dashboard, Quarterly Financial Analysis, Strategic Insights, Priority Support
- Annual Package: $999/year - Complete Annual Accounting, Tax Preparation, Quarterly Check-ins, Year-end Reports
- 20+ years of finance expertise from KPMG & PwC alumni
- Managed over $175M in funds
- Helped grow companies to $100M+ valuations
- Save up to 50% compared to local accounting firms

STAFFING SERVICES:
- Access to top 10% of offshore talent from Philippines, India, and Latin America
- Save up to 70% on staffing costs
- Zero-risk hiring with no upfront costs
- Full HR management, payroll, and compliance handling
- Roles supported: Executive Assistant, Admin Assistant, Accounting Assistant, Marketing Support, Sales Support, Customer Support, HR Assistant, Operations Support
- 60-90 day coaching program included
- Complimentary replacements if needed
- Transparent pricing - talent earns 70%+ of what clients pay

PROCESS:
1. Client shares role requirements
2. Rigorous screening: skills assessment, communication tests, interviews
3. Complete management of contracts, onboarding, timesheets, payroll
4. 60-90 day coaching for optimal performance

SUCCESS STORY:
- $4 Billion company in Vancouver, Canada
- Built offshore team of 4 members
- $200K+ annual savings
- Processing $25M/month in invoices

CONTACT:
- Email: nash.cisneros@globalhiring.ai
- Phone: +1 604-674-5992
- Address: 213 - 2438 Marine Dr., West Vancouver, BC V7V 1L2, Canada

Be helpful, professional, and focus on how Global Hiring can solve the user's business needs. Always provide specific details about services and encourage them to contact for more information.
Always return with proper markdown also don't use emojis`;

export async function POST(req: Request) {
  try {
    const { message, conversationHistory = [] } = await req.json();

    // Prepare messages for OpenAI
    const messages = [
      { role: 'system' as const, content: SYSTEM_PROMPT },
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

        for await (const chunk of completion) {
          const content = chunk.choices[0]?.delta?.content || '';
          if (content) {
            await writer.write(encoder.encode(`data: ${JSON.stringify({ content })}\n\n`));
          }
        }
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