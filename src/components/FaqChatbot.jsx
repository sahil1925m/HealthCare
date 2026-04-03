import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, User, Bot } from 'lucide-react';

const getBotResponse = (input) => {
  const lowerInput = input.toLowerCase();
  
  // FAQ: Are your medical camps free?
  if (lowerInput.match(/(camp|camps)/)) {
    return "All basic checkups and standard medications at our targeted medical camps are 100% free of charge for underprivileged communities.";
  }

  // FAQ: Do you accept medicine donations?
  if (lowerInput.match(/(medicine|madicine|pill|drug|sealed)/)) {
    return "Yes, we accept unexpired, sealed medicines. Please drop them off at our headquarters or mail them to our address.";
  }

  // FAQ: Can I volunteer if I don't have a medical background?
  if (lowerInput.match(/(volunteer|background|join|logistics|event)/)) {
    return "Absolutely! We welcome volunteers without a medical background. We need assistance with logistics, event organization, communication, and more.";
  }

  // FAQ: How can I apply for free medical assistance?
  if (lowerInput.match(/(apply|assistance|register|patient|appointment|intake|free)/)) {
    return "Navigate to the Patient Support section and fill out our intake form. Our team will contact you within 48 hours for an assessment.";
  }

  // General Questions
  if (lowerInput.match(/(donate|donation|fund|contribute|give|support)/)) {
    return "Thank you for your generosity! You can donate funds via our Contact page, or bring sealed medicines to our headquarters.";
  }
  if (lowerInput.match(/\b(service|services|offer|treat|care|checkup|specialties)\b/)) {
    return "We offer a variety of services including general checkups, maternity care, pediatric services, vaccinations, and 24/7 emergency care.";
  }
  if (lowerInput.match(/\b(contact|location|address|where|phone|email|reach)\b/)) {
    return "You can find us at 123 Health Ave, Wellness City. Reach us at (555) 123-4567 or help@healthngo.org.";
  }
  if (lowerInput.match(/\b(emergency|urgent|ambulance|911|critical|help)\b/)) {
    return "For medical emergencies, please immediately call our 24/7 hotline at 911 or (555) 999-9999. Our emergency ward is open around the clock.";
  }
  
  return "I'm sorry, I didn't understand. Please contact us at help@healthngo.org for more assistance.";
};

const FaqChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi! I'm MediBot 🏥 How can I help you today?", sender: 'bot' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userText = inputValue;
    const newMsg = { id: Date.now(), text: userText, sender: 'user' };
    
    setMessages(prev => [...prev, newMsg]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const responseText = getBotResponse(userText);
      setMessages(prev => [...prev, { id: Date.now() + 1, text: responseText, sender: 'bot' }]);
      setIsTyping(false);
    }, 800);
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 p-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-xl transition-transform hover:scale-110 z-50 focus:outline-none focus:ring-4 focus:ring-blue-300"
        aria-label="Toggle Chatbot"
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
      </button>

      {/* Chat Window */}
      <div 
        className={`fixed bottom-24 right-6 w-80 sm:w-96 bg-white shadow-2xl rounded-2xl border border-gray-200 flex flex-col z-50 overflow-hidden transform transition-all duration-300 ease-out origin-bottom-right ${
          isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
          
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4 text-white flex items-center justify-between shadow-md">
            <div className="flex items-center space-x-2">
              <Bot size={24} className="text-blue-100" />
              <div>
                <h3 className="font-semibold text-lg leading-tight">NGO MediBot</h3>
                <span className="text-xs text-blue-200 flex items-center">
                  <span className="w-2 h-2 rounded-full bg-green-400 mr-1 animate-pulse"></span>
                  Online
                </span>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-blue-100 hover:text-white transition-colors p-1"
            >
              <X size={20} />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50 max-h-96 min-h-80 space-y-4">
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[75%] px-4 py-2.5 rounded-2xl shadow-sm text-sm whitespace-pre-wrap leading-relaxed ${
                    msg.sender === 'user' 
                      ? 'bg-blue-600 text-white rounded-br-sm' 
                      : 'bg-white border border-gray-100 text-gray-800 rounded-bl-sm'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-100 px-4 py-3 rounded-2xl rounded-bl-sm shadow-sm flex items-center space-x-1.5">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 bg-white border-t border-gray-100">
            <form onSubmit={handleSend} className="flex flex-row items-center space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask me anything..."
                className="flex-1 py-2.5 px-4 bg-gray-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all border border-transparent"
              />
              <button
                type="submit"
                disabled={!inputValue.trim() || isTyping}
                className="p-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                <Send size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </form>
          </div>
        </div>
    </>
  );
};

export default FaqChatbot;
