'use client'

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MessageSquare, Sun, Moon, Bot } from "lucide-react";

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I help you today?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false); // State to control chatbot visibility

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    setTimeout(() => {
      const botResponse = generateBotResponse(input);
      setMessages((prev) => [...prev, botResponse]);
    }, 1000);
  };

  const generateBotResponse = (userInput: string) => {
    const userMessage = userInput.toLowerCase();

    if (userMessage.includes("hello") || userMessage.includes("hi")) {
      return { text: "Hi there! How can I assist you today?", sender: "bot" };
    }
    if (userMessage.includes("how are you")) {
      return { text: "I'm doing great, thank you for asking! 😊", sender: "bot" };
    }
    if (userMessage.includes("your name")) {
      return { text: "I'm your friendly chatbot. I don't have a name yet! 😄", sender: "bot" };
    }
    if (userMessage.includes("help")) {
      return { text: "Sure, I'm here to help! Please ask me anything.", sender: "bot" };
    }
    
    return { text: "I'm sorry, I didn't understand that. Can you please rephrase?", sender: "bot" };
  };

  return (
    <div>
      {/* Floating Chatbot Icon */}
      <Button
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="fixed bottom-4 right-4 z-50 bg-blue-500 text-white rounded-full p-3 shadow-lg"
      >
        <Bot className="w-6 h-6" />
      </Button>

      {/* Chatbot Sliding Panel */}
      {isChatOpen && (
        <div className={`${darkMode ? "bg-black text-white" : "bg-white text-black"} fixed top-0 right-0 w-96 h-full shadow-lg z-40`}>
          <div className={`w-full h-full flex flex-col ${darkMode ? "bg-gray-900" : "bg-gray-100"}`}>
            <div className="flex justify-between items-center p-4">
              <h2 className="text-xl font-bold">Chatbot</h2>
              <Button onClick={() => setDarkMode(!darkMode)}>
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </Button>
            </div>
            <div className="h-64 overflow-y-auto border-b pb-4 px-4">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`p-2 rounded-lg ${msg.sender === "user" ? "bg-blue-500 text-white self-end" : "bg-gray-300 text-black self-start"} max-w-[80%] m-1`}
                >
                  {msg.text}
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2 p-4">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
                className={`${darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-black"}`}
              />
              <Button onClick={handleSend} className="flex items-center gap-1">
                <MessageSquare className="w-4 h-4" /> Send
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
