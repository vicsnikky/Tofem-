import React, { useState, useEffect } from 'react';
import { X, UserCheck, Search, Filter, Mail, Phone, Calendar, RefreshCw, MessageCircle } from 'lucide-react';
import { AdmissionInquiry } from '../types';

interface AdminPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminPortalModal: React.FC<AdminPortalModalProps> = ({ isOpen, onClose }) => {
  const [inquiries, setInquiries] = useState<AdmissionInquiry[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [statusFilter, setStatusFilter] = useState<string>('All');

  const fetchInquiries = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/admissions');
      const data = await res.json();
      setInquiries(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchInquiries();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const filteredInquiries = inquiries.filter((inq) => {
    const matchesSearch = inq.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          inq.parentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          inq.id?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'All' || inq.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white rounded-3xl max-w-4xl w-full shadow-2xl border border-slate-200 overflow-hidden max-h-[92vh] flex flex-col">
        
        {/* Header */}
        <div className="bg-slate-900 text-white p-6 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-bold">
              <UserCheck className="w-6 h-6" />
            </div>
            <div>
              <span className="text-amber-400 font-bold text-xs uppercase tracking-wider block">Staff Portal</span>
              <h3 className="text-lg sm:text-xl font-bold">Tofem Admissions Management</h3>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={fetchInquiries}
              className="p-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-full transition-colors"
              title="Refresh Inquiries"
            >
              <RefreshCw className={`w-5 h-5 ${loading ? 'animate-spin' : ''}`} />
            </button>
            <button
              onClick={onClose}
              className="p-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Filter Controls */}
        <div className="p-4 bg-slate-50 border-b border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs shrink-0">
          <div className="relative w-full sm:w-72">
            <input
              type="text"
              placeholder="Search by student, parent, or ID..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-900"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <span className="font-bold text-slate-700">Status:</span>
            {['All', 'Pending', 'Contacted', 'Enrolled'].map((st) => (
              <button
                key={st}
                onClick={() => setStatusFilter(st)}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                  statusFilter === st
                    ? 'bg-blue-900 text-white'
                    : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                {st}
              </button>
            ))}
          </div>
        </div>

        {/* Content Table */}
        <div className="p-6 overflow-y-auto space-y-4">
          {filteredInquiries.length === 0 ? (
            <div className="text-center py-12 text-slate-500 text-sm">
              No admission inquiries found matching your criteria.
            </div>
          ) : (
            <div className="space-y-4">
              {filteredInquiries.map((inq) => (
                <div key={inq.id} className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-3 hover:border-slate-300 transition-colors">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-slate-200 pb-2">
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-blue-900 text-sm">{inq.id}</span>
                      <span className="text-xs px-2 py-0.5 rounded font-bold bg-amber-100 text-amber-900">
                        {inq.paymentPlan}
                      </span>
                    </div>
                    <span className="text-xs text-slate-400">
                      {inq.createdAt ? new Date(inq.createdAt).toLocaleDateString() : ''}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                    <div>
                      <span className="text-slate-500 block uppercase font-bold text-[10px]">Student</span>
                      <strong className="text-slate-900 text-sm">{inq.studentName}</strong>
                      <span className="block text-slate-600">Grade: {inq.gradeApplying}</span>
                    </div>

                    <div>
                      <span className="text-slate-500 block uppercase font-bold text-[10px]">Parent Details</span>
                      <strong className="text-slate-900">{inq.parentName}</strong>
                      <span className="block text-slate-600">{inq.phone}</span>
                    </div>

                    <div>
                      <span className="text-slate-500 block uppercase font-bold text-[10px]">Campus Choice</span>
                      <strong className="text-blue-900">Tofem {inq.campusPreference}</strong>
                      <span className="block text-slate-500">{inq.email}</span>
                    </div>
                  </div>

                  {inq.message && (
                    <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs text-slate-700">
                      <span className="font-bold text-slate-900 block">Note / Message:</span>
                      {inq.message}
                    </div>
                  )}

                  <div className="pt-2 flex items-center justify-between">
                    <a
                      href={`https://wa.me/234${inq.phone.replace(/^0/, '')}?text=Hello%20${encodeURIComponent(inq.parentName)}%2C%20this%20is%20Tofem%20Private%20School%20regarding%20your%20admission%20inquiry%20${inq.id}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg shadow-sm"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>WhatsApp Parent ({inq.phone})</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
