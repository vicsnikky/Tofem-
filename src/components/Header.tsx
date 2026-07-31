import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Menu, X, ShieldCheck, UserCheck } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

interface HeaderProps {
  onOpenAdmissionModal: () => void;
  onOpenAdminModal: () => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenAdmissionModal,
  onOpenAdminModal,
  activeSection,
  setActiveSection
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'history', label: 'Our History' },
    { id: 'campuses', label: 'Campuses' },
    { id: 'academics', label: 'Academics & Daily Plan' },
    { id: 'values', label: 'Mission & Vision' },
    { id: 'events', label: 'News & Events' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md shadow-sm border-b border-blue-100">
      {/* Top Notification & Contact Bar */}
      <div className="bg-blue-950 text-white text-xs py-2 px-4 border-b border-blue-900">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-3 flex-wrap justify-center sm:justify-start">
            <span className="flex items-center gap-1.5 bg-red-600 text-white font-bold px-2.5 py-0.5 rounded-full text-[11px] shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5" />
              Ogun State Govt Approved
            </span>
            <span className="hidden md:inline-flex items-center gap-1 text-blue-100 font-medium">
              <MapPin className="w-3 h-3 text-red-500" />
              Agbado Crossing, Ogun State
            </span>
          </div>

          <div className="flex items-center gap-4 font-medium">
            <a 
              href={`tel:${SCHOOL_INFO.phone}`}
              className="flex items-center gap-1 hover:text-red-400 transition-colors"
            >
              <Phone className="w-3 h-3 text-red-500" />
              <span>{SCHOOL_INFO.formattedPhone}</span>
            </a>
            <span className="text-blue-700">•</span>
            <a 
              href={`mailto:${SCHOOL_INFO.email}`}
              className="flex items-center gap-1 hover:text-red-400 transition-colors"
            >
              <Mail className="w-3 h-3 text-red-500" />
              <span className="truncate max-w-[150px] sm:max-w-none">{SCHOOL_INFO.email}</span>
            </a>
            <span className="text-blue-700">•</span>
            <a 
              href={SCHOOL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 bg-emerald-600 hover:bg-emerald-500 text-white px-2.5 py-0.5 rounded font-bold transition-colors"
            >
              <MessageCircle className="w-3 h-3" />
              <span>WhatsApp Chat</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-900 p-0.5 shadow-md group-hover:scale-105 transition-transform border border-blue-800">
              <img 
                src="/src/assets/images/tofem_badge_logo_1785475305858.jpg" 
                alt="Tofem Badge Logo" 
                className="w-full h-full object-cover rounded-[10px]"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h1 className="text-lg sm:text-xl font-extrabold tracking-tight text-blue-950 group-hover:text-blue-800 transition-colors">
                  TOFEM PRIVATE SCHOOL
                </h1>
                <span className="bg-red-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded shadow-sm">
                  & COLLEGE
                </span>
              </div>
              <p className="text-xs text-slate-600 font-medium tracking-wide">
                Modelling for Greatness • Building Future Leaders
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-2 text-xs font-semibold rounded-lg transition-colors ${
                  activeSection === item.id
                    ? 'text-white bg-blue-900 font-bold'
                    : 'text-slate-700 hover:text-blue-900 hover:bg-blue-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              onClick={onOpenAdmissionModal}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-blue-900 hover:bg-blue-800 rounded-lg shadow transition-all border border-blue-950"
            >
              <span>Apply / Enquire</span>
            </button>
            <button
              onClick={onOpenAdminModal}
              title="Staff & Management Portal"
              className="p-2 text-slate-500 hover:text-blue-900 hover:bg-blue-50 rounded-lg transition-colors"
            >
              <UserCheck className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenAdmissionModal}
              className="sm:hidden px-3 py-1.5 text-xs font-bold text-white bg-blue-900 rounded-lg shadow-sm"
            >
              Enquire
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:bg-blue-50 rounded-lg focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-blue-100 bg-white px-4 pt-3 pb-6 space-y-2 shadow-xl animate-in fade-in slide-in-from-top-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`block w-full text-left px-4 py-2.5 text-sm font-semibold rounded-lg transition-colors ${
                activeSection === item.id
                  ? 'text-white bg-blue-900 font-bold'
                  : 'text-slate-800 hover:bg-blue-50'
              }`}
            >
              {item.label}
            </button>
          ))}
          
          <div className="pt-4 border-t border-slate-100 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAdmissionModal();
              }}
              className="w-full py-2.5 px-4 text-center font-bold text-white bg-blue-900 hover:bg-blue-800 rounded-lg shadow"
            >
              Online Admission Inquiry
            </button>
            <a
              href={SCHOOL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 text-center font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg flex items-center justify-center gap-2 shadow-sm"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Direct WhatsApp Chat</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
