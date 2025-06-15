"use client"
import React, { useState, useRef, useEffect } from 'react';
import { Bot, User, Send, Loader2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { useChat } from '@/hooks/useChat';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  isStreaming?: boolean;
}

const Chatbot = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { sendMessageStream } = useChat();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Add welcome message
    const welcomeMessage: Message = {
      id: 0,
      text: "Hello! I'm your AI assistant for Global Hiring. I can help you learn about our offshore accounting services and staffing solutions. What would you like to know?",
      sender: 'bot',
      timestamp: new Date()
    };
    setMessages([welcomeMessage]);
  }, []);

  const sendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: messages.length,
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    const currentInput = inputValue;
    setInputValue('');
    setIsLoading(true);

    try {
      // Small delay to show the user message first
      await new Promise(resolve => setTimeout(resolve, 100));

      // Create initial bot message for streaming
      const botMessageId = messages.length + 1;
      const initialBotMessage: Message = {
        id: botMessageId,
        text: '',
        sender: 'bot',
        timestamp: new Date(),
        isStreaming: true
      };

      setMessages(prev => [...prev, initialBotMessage]);

      let accumulatedText = '';

      const conversationHistory = messages.map(msg => ({
        role: msg.sender === 'user' ? 'user' : 'assistant',
        content: msg.text
      }));

      for await (const chunk of sendMessageStream(currentInput, conversationHistory)) {
        accumulatedText += chunk;

        setMessages(prev =>
          prev.map(msg =>
            msg.id === botMessageId
              ? { ...msg, text: accumulatedText, isStreaming: true }
              : msg
          )
        );
      }

      // Mark streaming as complete
      setMessages(prev =>
        prev.map(msg =>
          msg.id === botMessageId
            ? { ...msg, isStreaming: false }
            : msg
        )
      );

    } catch (error) {
      console.error('Error sending message:', error);

      // Fallback response with company information
      const fallbackResponse = getFallbackResponse(currentInput);

      const botMessageId = messages.length + 1;
      const fallbackMessage: Message = {
        id: botMessageId,
        text: fallbackResponse,
        sender: 'bot',
        timestamp: new Date(),
        isStreaming: false
      };

      setMessages(prev => [...prev, fallbackMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const getFallbackResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();

    if (input.includes('accounting') || input.includes('bookkeeping') || input.includes('financial')) {
      return `## Accounting Services

Our accounting services start at **$249/month** and include:

- Monthly accounting
- Payroll & filings  
- Sales tax filings
- Financial statements

We have **20+ years of expertise** from KPMG & PwC alumni and have managed over **$175M in funds**. 

Would you like to know more about our specific plans?`;
    }

    if (input.includes('staffing') || input.includes('hiring') || input.includes('talent') || input.includes('offshore')) {
      return `## Offshore Staffing Solutions

We help you access the **top 10% of offshore talent** from:
- Philippines
- India  
- Latin America

### Key Benefits:
- Save up to **70%** on staffing costs
- Zero-risk hiring
- No upfront costs
- Full HR management

### Roles We Support:
- Executive Assistants
- Admin Assistants
- Accounting Assistants
- And more...

What type of role are you looking to fill?`;
    }

    if (input.includes('cost') || input.includes('price') || input.includes('savings')) {
      return `## Cost Savings

Our services offer significant savings:

- **Up to 70%** on staffing costs
- **50%** on accounting services

### Pricing:
- **Accounting plans** start at $249/month
- **Staffing** is billed bi-weekly with transparent pricing

Would you like specific pricing information for any particular service?`;
    }

    if (input.includes('process') || input.includes('how') || input.includes('work')) {
      return `## Our Process

### Simple 4-Step Process:

1. **Tell us your needs** - Share your requirements
2. **We find talent** - Pre-vetted through rigorous screening
3. **We handle everything** - Contracts, onboarding, payroll
4. **Ongoing support** - 60-90 day coaching program

✅ Zero upfront costs  
✅ Complimentary replacements if needed

What specific aspect would you like to know more about?`;
    }

    return `## Welcome to Global Hiring! 

I'd be happy to help you learn about our services:

### 🧮 **Accounting Services**
Starting at $249/month

### 👥 **Staffing Solutions** 
Save up to 70%

### 📞 **Questions I can answer:**
- Accounting plans
- Staffing process  
- Cost savings
- Specific roles

What interests you most?`;
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="w-full h-[calc(100vh-4rem)] bg-white dark:bg-black flex flex-col">
      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto p-6 space-y-4">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`flex items-start space-x-3 max-w-xs lg:max-w-2xl ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${message.sender === 'user' ? 'bg-black dark:bg-white' : 'bg-gray-300 dark:bg-gray-700'
                  }`}>
                  {message.sender === 'user' ? (
                    <User className="h-4 w-4 text-white dark:text-black" />
                  ) : (
                    <Bot className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                  )}
                </div>
                <div className={`px-4 py-3 rounded-2xl ${message.sender === 'user'
                  ? 'bg-black dark:bg-white text-white dark:text-black rounded-br-md'
                  : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 border border-gray-200 dark:border-gray-700 rounded-bl-md'
                  }`}>
                  {message.sender === 'bot' ? (
                    <div className="prose prose-sm max-w-none prose-headings:text-gray-900 dark:prose-headings:text-gray-100 prose-headings:font-semibold prose-h2:text-lg prose-h2:mb-3 prose-h2:mt-0 prose-h3:text-base prose-h3:mb-2 prose-h3:mt-3 prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-2 prose-ul:mb-2 prose-li:text-gray-700 dark:prose-li:text-gray-300 prose-strong:text-gray-900 dark:prose-strong:text-gray-100">
                      <ReactMarkdown>{message.text}</ReactMarkdown>
                      {message.isStreaming && (
                        <span className="inline-block w-2 h-4 bg-gray-400 dark:bg-gray-500 ml-1 animate-pulse"></span>
                      )}
                    </div>
                  ) : (
                    <p className="text-sm leading-relaxed">{message.text}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Chat Input */}
      <div className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-black">
        <div className="max-w-4xl mx-auto p-4">
          <div className="flex items-center space-x-3">
            <input
              type="text"
              placeholder="Ask about our offshore accounting and staffing services..."
              className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-400 focus:border-gray-500 dark:focus:border-gray-400 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              disabled={isLoading}
            />
            <button
              onClick={sendMessage}
              disabled={isLoading || !inputValue.trim()}
              className="p-2 bg-black dark:bg-white text-white dark:text-black rounded-full hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                <Send className="h-5 w-5" />
              )}
            </button>
          </div>
          <div className="mt-3 text-center">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Ask about accounting plans, staffing solutions, cost savings, or our hiring process
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;