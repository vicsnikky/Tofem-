import React, { useState } from 'react';
import { X, CheckCircle2, MessageCircle, Send, Sparkles, AlertCircle } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';
import { AdmissionInquiry } from '../types';

interface AdmissionFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPlan?: string;
}

export const AdmissionFormModal: React.FC<AdmissionFormModalProps> = ({
  isOpen,
  onClose,
  defaultPlan
}) => {
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    phone: '',
    email: '',
    gradeApplying: defaultPlan || 'Basic 1',
    campusPreference: 'Primary' as 'Primary' | 'Secondary',
    paymentPlan: 'Standard Termly' as 'Standard Termly' | 'Flexible Fee Payment' | 'Flexible Installment',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [submittedInquiry, setSubmittedInquiry] = useState<AdmissionInquiry | null>(null);
  const [whatsappLink, setWhatsappLink] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setLoading(true);

    try {
      const res = await fetch('/api/admissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit inquiry.');
      }

      setSubmittedInquiry(data.inquiry);
      setWhatsappLink(data.whatsappLink);
    } catch (err: any) {
      setErrorMessage(err.message || 'Error submitting application.');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSubmittedInquiry(null);
    setWhatsappLink('');
    setFormData({
      studentName: '',
      parentName: '',
      phone: '',
      email: '',
      gradeApplying: 'Basic 1',
      campusPreference: 'Primary',
      paymentPlan: 'Standard Termly',
      message: ''
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white p-6 flex items-center justify-between shrink-0">
          <div>
            <span className="text-amber-400 font-bold text-xs uppercase tracking-wider block">Admissions Portal</span>
            <h3 className="text-xl font-bold">Tofem School Admission Inquiry</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {submittedInquiry ? (
            /* Confirmation State */
            <div className="text-center space-y-6 py-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <h4 className="text-2xl font-bold text-slate-900">Inquiry Received Successfully!</h4>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Thank you for choosing Tofem Private School & Tofem College. Your admission inquiry has been logged in our administrative office.
                </p>
              </div>

              {/* Inquiry Ticket Card */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-left space-y-3 max-w-md mx-auto text-xs text-slate-700">
                <div className="flex justify-between items-center border-b border-slate-200 pb-2">
                  <span className="font-bold text-slate-900">Reference ID:</span>
                  <span className="font-mono font-bold text-blue-900 text-sm">{submittedInquiry.id}</span>
                </div>
                <div className="flex justify-between">
                  <span>Student Name:</span>
                  <strong className="text-slate-900">{submittedInquiry.studentName}</strong>
                </div>
                <div className="flex justify-between">
                  <span>Grade Applying:</span>
                  <strong className="text-slate-900">{submittedInquiry.gradeApplying}</strong>
                </div>
                <div className="flex justify-between">
                  <span>Campus Preference:</span>
                  <strong className="text-slate-900">Tofem {submittedInquiry.campusPreference}</strong>
                </div>
                <div className="flex justify-between">
                  <span>Payment Plan:</span>
                  <strong className="text-amber-700 font-semibold">{submittedInquiry.paymentPlan}</strong>
                </div>
              </div>

              <div className="space-y-3 max-w-md mx-auto pt-2">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm rounded-xl shadow-lg flex items-center justify-center gap-2 transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Send Ticket to Admissions WhatsApp (08034860693)</span>
                </a>
                <button
                  onClick={handleReset}
                  className="w-full py-3 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs rounded-xl transition-colors"
                >
                  Close & Return
                </button>
              </div>
            </div>
          ) : (
            /* Inquiry Form */
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMessage && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-red-700 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Student Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Chidimma Adeleke"
                    value={formData.studentName}
                    onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Parent / Guardian Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Pastor / Mr. Adeleke"
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-900"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    WhatsApp / Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 08034860693"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. olabiranjo2005@gmail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-900"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Grade Applying For *
                  </label>
                  <select
                    value={formData.gradeApplying}
                    onChange={(e) => setFormData({ ...formData, gradeApplying: e.target.value })}
                    className="w-full px-3 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-900"
                  >
                    <option value="Creche & Care">Creche & Care</option>
                    <option value="Nursery 1-2">Nursery 1 - 2</option>
                    <option value="Basic 1">Basic 1</option>
                    <option value="Basic 2-5">Basic 2 - 5</option>
                    <option value="Basic 6">Basic 6</option>
                    <option value="JSS 1">JSS 1 (Secondary)</option>
                    <option value="JSS 2-3">JSS 2 - 3</option>
                    <option value="SSS 1 (Science)">SSS 1 (Science)</option>
                    <option value="SSS 1 (Arts/Comm)">SSS 1 (Arts / Commercial)</option>
                    <option value="SSS 2-3">SSS 2 - 3</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Campus Preference
                  </label>
                  <select
                    value={formData.campusPreference}
                    onChange={(e) => setFormData({ ...formData, campusPreference: e.target.value as any })}
                    className="w-full px-3 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-900"
                  >
                    <option value="Primary">Primary (32 Bodunrin St)</option>
                    <option value="Secondary">Tofem College (22 Olaoluwa St)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Payment Plan Preference
                  </label>
                  <select
                    value={formData.paymentPlan}
                    onChange={(e) => setFormData({ ...formData, paymentPlan: e.target.value as any })}
                    className="w-full px-3 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-900"
                  >
                    <option value="Standard Termly">Standard Termly Fees</option>
                    <option value="Flexible Fee Payment">Flexible Fee Payment Plan</option>
                    <option value="Flexible Installment">Flexible Installment Plan</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Additional Notes or Questions
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us any specific requirements or questions about admissions, fees, or transportation..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-900"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2.5 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-xl transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-2.5 bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs rounded-xl shadow transition-colors flex items-center gap-2"
                >
                  {loading ? (
                    <span>Submitting...</span>
                  ) : (
                    <>
                      <span>Submit Admission Inquiry</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
