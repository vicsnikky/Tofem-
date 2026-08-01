import React from 'react';
import { Mail, Phone, MapPin, MessageCircle, ShieldCheck, ArrowUp } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

interface FooterProps {
  onOpenAdmissionModal: () => void;
  setActiveSection: (section: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenAdmissionModal,
  setActiveSection
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (id: string) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-blue-950 text-white pt-16 pb-12 border-t border-blue-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-blue-900 p-0.5 shadow-md border border-blue-800">
                <img 
                  src="https://i.ibb.co/BHvT891p/Whats-App-Image-2026-07-31-at-7-30-10-AM.jpg" 
                  alt="Tofem Logo" 
                  className="w-full h-full object-cover rounded-[10px]"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h3 className="font-extrabold text-lg text-white">TOFEM PRIVATE SCHOOL</h3>
                <p className="text-red-500 font-bold text-xs uppercase tracking-wider">& TOFEM COLLEGE</p>
              </div>
            </div>

            <p className="text-xs text-blue-200 leading-relaxed">
              Founded on June 3rd, 2013. Committed to raising responsible, innovative future leaders with sustainable knowledge and good character across two approved campuses in Ogun State.
            </p>

            <div className="flex items-center gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-red-600 text-white shadow-sm">
                <ShieldCheck className="w-3.5 h-3.5" />
                Ogun State Government Approved
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-red-500 uppercase tracking-wider">Quick Navigation</h4>
            <ul className="space-y-2 text-xs text-blue-100 font-medium">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-red-400 transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('history')} className="hover:text-red-400 transition-colors">
                  Our History (2013 - Present)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('leadership')} className="hover:text-red-400 transition-colors">
                  Co-Founders' Messages
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('campuses')} className="hover:text-red-400 transition-colors">
                  Dual Campuses
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('academics')} className="hover:text-red-400 transition-colors">
                  Daily Payment Lesson Plan
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('values')} className="hover:text-red-400 transition-colors">
                  Mission & Motto
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-red-400 transition-colors">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Dual Campus Addresses */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-red-500 uppercase tracking-wider">Our Dual Campuses</h4>
            <div className="space-y-3 text-xs text-blue-100">
              <div className="bg-blue-900/60 p-3 rounded-xl border border-blue-800 space-y-1">
                <strong className="text-white font-bold block">1. Tofem Primary School</strong>
                <p className="text-blue-200 flex items-start gap-1 text-[11px]">
                  <MapPin className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                  <span>32, Bodunrin Street, Agbado crossing, Ogun state</span>
                </p>
              </div>

              <div className="bg-blue-900/60 p-3 rounded-xl border border-blue-800 space-y-1">
                <strong className="text-white font-bold block">2. Tofem College (Secondary)</strong>
                <p className="text-blue-200 flex items-start gap-1 text-[11px]">
                  <MapPin className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                  <span>22, Olaoluwa Street, Agbado crossing, Ogun state</span>
                </p>
              </div>
            </div>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-red-500 uppercase tracking-wider">Official Contacts</h4>
            <div className="space-y-2.5 text-xs text-blue-100">
              <a href={`tel:${SCHOOL_INFO.phone}`} className="flex items-center gap-2 hover:text-red-400 transition-colors">
                <Phone className="w-4 h-4 text-red-500 shrink-0" />
                <span>Phone: {SCHOOL_INFO.formattedPhone}</span>
              </a>

              <a href={`mailto:${SCHOOL_INFO.email}`} className="flex items-center gap-2 hover:text-red-400 transition-colors">
                <Mail className="w-4 h-4 text-red-500 shrink-0" />
                <span className="truncate">{SCHOOL_INFO.email}</span>
              </a>

              <a
                href={SCHOOL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Desk</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-blue-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-blue-300">
          <p>
            © {new Date().getFullYear()} Tofem Private School & Tofem College. All Rights Reserved. Ogun State Approved.
          </p>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenAdmissionModal}
              className="hover:text-red-400 font-bold transition-colors text-white"
            >
              Online Admissions
            </button>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="p-2 bg-blue-900 hover:bg-blue-800 text-blue-100 hover:text-white rounded-lg transition-colors flex items-center gap-1 border border-blue-800"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-red-400" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
