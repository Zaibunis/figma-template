'use client'

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MessageSquare, Sun, Moon, Bot } from "lucide-react";

const products = [
  {
    id: 1,
    img: "/Frame 33 (7).png",
    title: "Gradient Graphic T-shirt",
    rating: 3.5,
    price: "$145",
    description: "Stylish gradient t-shirt for casual wear."
  },
  {
    id: 2,
    img: "/Frame 34 (2).png",
    title: "Polo with Tipping Details",
    rating: 4.5,
    price: "$180",
    description: "Premium polo shirt with elegant tipping details."
  },
  {
    id: 3,
    img: "/Frame 38 (2).png",
    title: "Black Striped T-shirt",
    rating: 5.0,
    price: "$120",
    originalPrice: "$150",
    discount: "-30%",
    description: "Comfortable black striped t-shirt."
  },
  {
    id: 4,
    img: "/Frame 33 (5).png",
    title: "Skinny Fit Jeans",
    rating: 3.5,
    price: "$240",
    originalPrice: "$260",
    discount: "-20%",
    description: "Stylish and durable skinny-fit denim."
  },
  {
    id: 5,
    img: "/Frame 34.png",
    title: "Checkered Shirt",
    rating: 4.4,
    price: "$180",
    description: "Classic checkered shirt perfect for casual wear."
  },
  {
    id: 6,
    img: "/Frame 38.png",
    title: "Sleeve Striped T-shirt",
    rating: 3.5,
    price: "$130",
    originalPrice: "$160",
    discount: "-30%",
    description: "Comfortable striped t-shirt with sleek design."
  },
  {
    id: 7,
    img: "/Frame 32 (2).png",
    title: "Vertical Striped Shirt",
    rating: 5.0,
    price: "$212",
    originalPrice: "$232",
    discount: "-20%",
    description: "Vertical striped shirt for a bold look."
  },
  {
    id: 8,
    img: "/Frame 33 (6).png",
    title: "Courage Graphic T-shirt",
    rating: 4.0,
    price: "$145",
    description: "Trendy graphic t-shirt for everyday wear."
  },
  {
    id: 9,
    img: "/Frame 34 (1).png",
    title: "Loose Fit Bermuda Shorts",
    rating: 3.0,
    price: "$80",
    description: "Casual bermuda shorts with a loose fit."
  }
];

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

    // Concise product price responses
    if (userMessage.includes("price") && userMessage.includes("gradient graphic t-shirt")) {
      const product = products.find(p => p.title.toLowerCase().includes("gradient graphic t-shirt"));
      return { text: `The Gradient Graphic T-shirt costs ${product?.price}.`, sender: "bot" };
    }
    if (userMessage.includes("price") && userMessage.includes("polo with tipping details")) {
      const product = products.find(p => p.title.toLowerCase().includes("polo with tipping details"));
      return { text: `The Polo with Tipping Details is priced at ${product?.price}.`, sender: "bot" };
    }
    if (userMessage.includes("price") && userMessage.includes("black striped t-shirt")) {
      const product = products.find(p => p.title.toLowerCase().includes("black striped t-shirt"));
      return { text: `The Black Striped T-shirt is just ${product?.price}.`, sender: "bot" };
    }
    if (userMessage.includes("price") && userMessage.includes("skinny fit jeans")) {
      const product = products.find(p => p.title.toLowerCase().includes("skinny fit jeans"));
      return { text: `The Skinny Fit Jeans are available for ${product?.price}.`, sender: "bot" };
    }

    // For other product queries
    if (userMessage.includes("gradient graphic t-shirt")) {
      const product = products.find(p => p.title.toLowerCase().includes("gradient graphic t-shirt"));
      return { text: `${product?.title}: ${product?.description} Price: ${product?.price}`, sender: "bot" };
    }

    if (userMessage.includes("polo with tipping details")) {
      const product = products.find(p => p.title.toLowerCase().includes("polo with tipping details"));
      return { text: `${product?.title}: ${product?.description} Price: ${product?.price}`, sender: "bot" };
    }

    // Generic fallback for unrecognized product
    return { text: "I'm sorry, I didn't quite get that. Can you clarify your request?", sender: "bot" };
  };

  return (
    <div>
      {/* Floating Chatbot Icon */}
      <Button
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="fixed bottom-4 right-4 z-50 bg-blue-500 text-white rounded-full p-3 shadow-lg sm:p-2 sm:right-2 sm:bottom-2"
      >
        <Bot className="w-6 h-6 sm:w-5 sm:h-5" />
      </Button>

      {/* Chatbot Sliding Panel */}
      {isChatOpen && (
        <div className={`${darkMode ? "bg-black text-white" : "bg-white text-black"} fixed top-0 right-0 w-full sm:w-96 h-full shadow-lg z-40`}>
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
                  className={`p-2 rounded-lg ${msg.sender === "user" ? "bg-blue-500 text-white self-end" : "bg-gray-300 text-black self-start"} max-w-[80%] sm:max-w-[70%] m-1`}
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
                className={`${darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-black"} sm:w-72 w-full`}
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
