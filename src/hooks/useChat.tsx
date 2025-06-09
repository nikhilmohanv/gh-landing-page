import { getChatResponseStream, getChatResponse } from '@/app/api/chat';

export const useChat = () => {
  const sendMessageStream = async function* (message: string, conversationHistory: Array<{role: string, content: string}>) {
    try {
      yield* getChatResponseStream(message, conversationHistory);
    } catch (error) {
      console.error('Chat streaming error:', error);
      throw error;
    }
  };

  const sendMessage = async (message: string, conversationHistory: Array<{role: string, content: string}>) => {
    try {
      const response = await getChatResponse(message, conversationHistory);
      return response;
    } catch (error) {
      console.error('Chat error:', error);
      throw error;
    }
  };

  return { sendMessage, sendMessageStream };
};