import React, { useState } from 'react';
import { MapPin, Phone, Mail, Building2, CheckCircle2, Copy, Check, ExternalLink, Navigation, Compass } from 'lucide-react';
import { CAMPUSES, SCHOOL_INFO } from '../data/schoolData';

export const Campuses: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopyAddress = (id: string, address: string) => {
    navigator.clipboard.writeText(address);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="campuses" className="py-20 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-100 text-blue-900 border border-blue-200">
            <Building2 className="w-4 h-4 text-blue-700" />
            <span>Dual Campus Network</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Our Campuses Today
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
            To provide a conducive learning environment, we operate <strong className="text-slate-900 font-semibold">two separate school buildings at a stone’s throw from each other</strong> in Agbado crossing, Ogun State. This separation ensures age-appropriate care, discipline, and focused academic excellence for both levels.
          </p>
        </div>

        {/* Campuses Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {CAMPUSES.map((campus) => (
            <div
              key={campus.id}
              className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image Showcase */}
                <div className="relative h-64 sm:h-72 overflow-hidden bg-slate-900">
                  <img
                    src={campus.image}
                    alt={campus.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  
                  <div className="absolute top-4 left-4 bg-blue-900/90 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-blue-700">
                    {campus.type} Campus
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                    <span className="text-amber-400 text-xs font-bold uppercase tracking-widest">{campus.grades}</span>
                    <h3 className="text-xl sm:text-2xl font-bold">{campus.name}</h3>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 sm:p-8 space-y-6">
                  {/* Address Box */}
                  <div className="bg-white p-4 rounded-2xl border border-slate-200 space-y-2 shadow-sm">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-start gap-2.5">
                        <MapPin className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                        <div>
                          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Official Location</span>
                          <p className="text-sm font-bold text-slate-900">{campus.address}</p>
                          <p className="text-xs text-slate-500">Landmark: {campus.landmark}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => handleCopyAddress(campus.id, campus.address)}
                        className="p-2 text-slate-500 hover:text-blue-900 hover:bg-slate-100 rounded-lg transition-colors shrink-0"
                        title="Copy Address"
                      >
                        {copiedId === campus.id ? (
                          <Check className="w-4 h-4 text-emerald-600" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Campus Key Features */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Campus Highlights & Facilities</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                      {campus.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 bg-white p-2.5 rounded-xl border border-slate-100">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Campus Action Footer */}
              <div className="p-6 pt-0 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200/60 mt-4">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(campus.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-900 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 px-3.5 py-2 rounded-xl transition-colors"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Directions</span>
                  <ExternalLink className="w-3 h-3 ml-0.5" />
                </a>

                <a
                  href={`https://wa.me/${SCHOOL_INFO.whatsappNumber}?text=Hello%20Tofem%20School%2C%20I%20would%20like%20to%20visit%20the%20${encodeURIComponent(campus.name)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 px-4 py-2 rounded-xl transition-colors shadow-sm"
                >
                  <span>Book Campus Tour</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Stone's Throw Proximity Highlight */}
        <div className="bg-gradient-to-r from-amber-500/10 via-amber-400/10 to-amber-500/10 rounded-2xl p-6 border border-amber-300/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold shrink-0">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900">Close Proximity for Family Convenience</h4>
              <p className="text-xs text-slate-600 max-w-xl">
                Having both primary (32 Bodunrin St) and secondary (22 Olaoluwa St) campuses a stone's throw apart allows parents with children in both levels to conveniently drop off and pick up pupils effortlessly.
              </p>
            </div>
          </div>
          <a
            href={SCHOOL_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl shrink-0 transition-colors shadow-sm"
          >
            Enquire on WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
};
