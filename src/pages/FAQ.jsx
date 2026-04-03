import { useState } from 'react';
import { MessageCircle, X, ChevronDown, ChevronUp, Send } from 'lucide-react';

export default function FAQ() {
  const [chatOpen, setChatOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const faqs = [
    { q: "How can I apply for free medical assistance?", a: "Navigate to the Patient Support section and fill out our intake form. Our team will contact you within 48 hours for an assessment." },
    { q: "Do you accept medicine donations?", a: "Yes, we accept unexpired, sealed medicines. Please drop them off at our headquarters or mail them to our address." },
    { q: "Can I volunteer if I don't have a medical background?", a: "Absolutely! We need assistance with logistics, event organization, communication, and more." },
    { q: "Are your medical camps free?", a: "All basic checkups and standard medications at our targeted medical camps are 100% free of charge for underprivileged communities." }
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-16 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h1 className="text-4xl font-bold text-center text-blue-950 mb-4">Frequently Asked Questions</h1>
        <p className="text-center text-slate-600 mb-12">Find answers to common questions about our services and volunteering.</p>

        <div className="space-y-4 mb-20">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-xl border border-blue-100 shadow-sm overflow-hidden">
              <button 
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none focus:bg-blue-50 transition-colors"
              >
                <span className="font-semibold text-blue-950 text-lg">{faq.q}</span>
                {activeFaq === idx ? <ChevronUp className="text-blue-500 shrink-0 ml-4" /> : <ChevronDown className="text-blue-500 shrink-0 ml-4" />}
              </button>
              <div 
                className={`px-6 text-slate-600 transition-all overflow-hidden ${activeFaq === idx ? 'pb-5 max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                {faq.a}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chatbot mock */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        {chatOpen && (
          <div className="bg-white w-80 sm:w-96 rounded-2xl shadow-2xl border border-blue-100 mb-4 overflow-hidden flex flex-col h-[400px] transition-all transform origin-bottom-right">
            <div className="bg-blue-600 text-white p-4 flex justify-between items-center">
              <div>
                <h4 className="font-bold flex items-center"><MessageCircle className="h-4 w-4 mr-2" /> Support Bot</h4>
                <p className="text-blue-100 text-xs mt-0.5">Always here to help</p>
              </div>
              <button onClick={() => setChatOpen(false)} className="text-white hover:text-blue-200 transition-colors">
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <div className="flex-1 p-4 bg-slate-50 overflow-y-auto space-y-4">
              <div className="bg-blue-100 text-blue-900 rounded-xl rounded-tl-none p-3 max-w-[85%] text-sm self-start shadow-sm">
                Hi there! 👋 How can I help you regarding our NGO services today?
              </div>
              <div className="bg-blue-600 text-white shadow-sm rounded-xl rounded-tr-none p-3 max-w-[85%] text-sm self-end ml-auto">
                I need help finding an ongoing medical camp near my location.
              </div>
              <div className="bg-blue-100 text-blue-900 rounded-xl rounded-tl-none p-3 max-w-[85%] text-sm self-start flex items-center space-x-2 shadow-sm">
                <span className="font-medium text-xs text-blue-800">Support Bot is typing</span>
                <div className="flex space-x-1 mt-1">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce delay-75"></div>
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce delay-150"></div>
                </div>
              </div>
            </div>
            
            <div className="p-3 bg-white border-t border-slate-100 flex items-center shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
              <input type="text" placeholder="Type your message..." className="flex-1 bg-slate-100 text-slate-800 rounded-full px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all border border-transparent focus:border-blue-300" />
              <button className="bg-green-500 text-white p-2.5 rounded-full ml-2 hover:bg-green-600 transition-colors shadow-sm">
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}
        
        <button 
          onClick={() => setChatOpen(!chatOpen)}
          className={`bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 flex items-center justify-center ${chatOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'} duration-300`}
        >
          <MessageCircle className="h-7 w-7" />
        </button>
      </div>
    </div>
  );
}
