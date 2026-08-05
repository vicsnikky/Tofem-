import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageCircle, Send, Clock, CheckCircle2, ShieldCheck, Facebook, Instagram, Video, ExternalLink } from 'lucide-react';
import { SCHOOL_INFO, CAMPUSES } from '../data/schoolData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [whatsappLink, setWhatsappLink] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      setSubmitted(true);
      setWhatsappLink(data.whatsappLink);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-900 border border-emerald-200">
            <MessageCircle className="w-4 h-4 text-emerald-700" />
            <span>Connect With Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Contact Tofem School & College
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
            We welcome inquiries from prospective parents, visitors, and guardians. Reach out to us via direct WhatsApp, call, or email.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Contact Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Phone & WhatsApp Card */}
            <div className="bg-gradient-to-br from-emerald-900 to-teal-950 text-white p-6 rounded-3xl shadow-xl space-y-4 border border-emerald-800">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-300">Direct WhatsApp & Phone</span>
                <h3 className="text-2xl font-black text-white">{SCHOOL_INFO.formattedPhone}</h3>
                <p className="text-xs text-emerald-100 mt-1">
                  Connect instantly to our admissions desk via WhatsApp chat.
                </p>
              </div>

              <div className="pt-2 flex flex-col gap-2">
                <a
                  href={SCHOOL_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-xl text-center shadow transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Start WhatsApp Chat Now</span>
                </a>
                <a
                  href={`tel:${SCHOOL_INFO.phone}`}
                  className="w-full py-2.5 px-4 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs rounded-xl text-center border border-white/20 transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {SCHOOL_INFO.formattedPhone}</span>
                </a>
              </div>
            </div>

            {/* Email & Hours */}
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 space-y-4 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-900 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase">Official Email</span>
                  <a href={`mailto:${SCHOOL_INFO.email}`} className="block text-sm font-bold text-blue-900 hover:underline">
                    {SCHOOL_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2 border-t border-slate-200/60">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase">Office Hours</span>
                  <p className="text-xs font-semibold text-slate-800">{SCHOOL_INFO.workingHours}</p>
                </div>
              </div>
            </div>

            {/* Official Social Media Channels */}
            <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white p-6 rounded-3xl border border-slate-800 space-y-4 shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-bold text-red-400 uppercase tracking-wider block">Stay Connected</span>
                  <h4 className="text-lg font-black text-white">Official Social Media</h4>
                </div>
                <div className="flex items-center gap-1 bg-white/10 px-2.5 py-1 rounded-full text-[10px] font-bold text-blue-200 border border-white/10">
                  <span>@tofemschool</span>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Follow our pages for school events, student achievements, campus activities, and admissions announcements.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
                {/* Facebook */}
                <a
                  href={SCHOOL_INFO.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between sm:flex-col sm:items-start p-3 rounded-2xl bg-blue-900/60 hover:bg-blue-800/80 border border-blue-700/60 transition-all hover:scale-[1.02] group"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow">
                      <Facebook className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="block text-xs text-white font-bold group-hover:text-blue-200">Facebook</strong>
                      <span className="text-[10px] text-blue-200 block">Tofem Page</span>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-blue-300 sm:self-end sm:mt-2" />
                </a>

                {/* Instagram */}
                <a
                  href={SCHOOL_INFO.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between sm:flex-col sm:items-start p-3 rounded-2xl bg-gradient-to-br from-purple-950/80 to-pink-950/80 hover:from-purple-900 hover:to-pink-900 border border-pink-700/50 transition-all hover:scale-[1.02] group"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-amber-500 via-pink-500 to-purple-600 text-white flex items-center justify-center shadow">
                      <Instagram className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="block text-xs text-white font-bold group-hover:text-pink-200">Instagram</strong>
                      <span className="text-[10px] text-pink-200 block">@tofemschool</span>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-pink-300 sm:self-end sm:mt-2" />
                </a>

                {/* TikTok */}
                <a
                  href={SCHOOL_INFO.socialLinks.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between sm:flex-col sm:items-start p-3 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-slate-700 transition-all hover:scale-[1.02] group"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-slate-800 text-white border border-teal-500/40 flex items-center justify-center shadow">
                      <Video className="w-4 h-4 text-teal-400" />
                    </div>
                    <div>
                      <strong className="block text-xs text-white font-bold group-hover:text-teal-200">TikTok</strong>
                      <span className="text-[10px] text-teal-200 block">@tofemschool</span>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-teal-300 sm:self-end sm:mt-2" />
                </a>
              </div>
            </div>

            {/* Campuses Addresses Quick List */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Campus Locations</h4>
              {CAMPUSES.map((c) => (
                <div key={c.id} className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs space-y-1">
                  <span className="font-bold text-blue-900 block text-sm">{c.name} ({c.type})</span>
                  <p className="text-slate-700 flex items-start gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                    <span>{c.address}</span>
                  </p>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Interactive Send Message Form */}
          <div className="lg:col-span-7 bg-slate-50 rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="mb-6 space-y-1">
                <h3 className="text-2xl font-bold text-slate-900">Send Us a Direct Message</h3>
                <p className="text-xs text-slate-600">
                  Fill out the form below to email or pre-format a direct message to our admissions office.
                </p>
              </div>

              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900">Message Sent!</h4>
                  <p className="text-xs text-slate-600">
                    Thank you, {formData.name}. We will respond to your inquiry shortly. You can also send this message directly to our WhatsApp chat.
                  </p>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl shadow transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send Message on WhatsApp (08034860693)</span>
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Pastor / Parent Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-900"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Phone / WhatsApp Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="08034860693"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-900"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Email Address</label>
                      <input
                        type="email"
                        placeholder="olabiranjo2005@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-900"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Subject</label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-900"
                      >
                        <option value="Admission Inquiry">Admission Inquiry</option>
                        <option value="Flexible & Termly Fee Info">Flexible & Termly Fee Info</option>
                        <option value="Campus Visit Booking">Campus Visit Booking</option>
                        <option value="General Question">General Question</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Your Message *</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Write your inquiry or question here..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-900"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs rounded-xl shadow transition-colors flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
