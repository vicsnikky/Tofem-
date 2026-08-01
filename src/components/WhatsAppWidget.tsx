import React, { useState } from 'react';
import { MessageCircle, X, ChevronRight, Send } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

export const WhatsAppWidget: React.FC = () => {
  const [open, setOpen] = useState(false);

  const presets = [
    {
      label: "Admissions & Entry Exam Inquiry",
      text: "Hello Tofem School, I would like to enquire about admission requirements and entrance exam dates for my child."
    },
    {
      label: "Flexible & Termly Fee Plan Details",
      text: "Hello Tofem School, I would like to know how your Flexible Fee Payment and Standard Termly Fee options work for my child."
    },
    {
      label: "Campus Directions & Address",
      text: "Hello Tofem School, please send me directions to Tofem Primary (32 Bodunrin St) and Tofem College (22 Olaoluwa St) in Agbado crossing."
    },
    {
      label: "Speak with Proprietress / Principal",
      text: "Hello Tofem School, I would like to speak with the Proprietress or School Principal regarding an urgent matter."
    }
  ];

  const handleLaunch = (text: string) => {
    const url = `https://wa.me/${SCHOOL_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      
      {/* Quick Menu Popup */}
      {open && (
        <div className="mb-4 bg-white rounded-3xl p-5 shadow-2xl border border-slate-200 w-80 sm:w-96 text-slate-900 space-y-4 animate-in fade-in slide-in-from-bottom-3">
          
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-blue-950">Tofem Admissions Desk</h4>
                <p className="text-[11px] text-emerald-600 font-semibold">● Online • Immediate Response</p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="p-1 text-slate-400 hover:text-slate-700 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <p className="text-xs text-slate-600">
            Select a prompt below or type your custom inquiry to chat directly with our school desk on WhatsApp:
          </p>

          <div className="space-y-2">
            {presets.map((p, i) => (
              <button
                key={i}
                onClick={() => handleLaunch(p.text)}
                className="w-full text-left p-2.5 rounded-xl bg-blue-50/50 hover:bg-emerald-50 text-slate-800 hover:text-emerald-900 border border-blue-100 hover:border-emerald-300 text-xs font-semibold flex items-center justify-between transition-all group"
              >
                <span>{p.label}</span>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-0.5 transition-transform" />
              </button>
            ))}
          </div>

          <div className="pt-2">
            <a
              href={SCHOOL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 shadow transition-colors"
            >
              <Send className="w-4 h-4" />
              <span>Open Blank WhatsApp Chat</span>
            </a>
          </div>

        </div>
      )}

      {/* Main Floating Trigger Button (No Phone Number text displayed) */}
      <button
        onClick={() => setOpen(!open)}
        className="group relative flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white p-3.5 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105"
        title="Chat with Tofem School on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
        <span className="hidden sm:inline font-bold text-xs pr-1">
          WhatsApp Us
        </span>
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-red-600" />
        </span>
      </button>

    </div>
  );
};
