import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { HistoryTimeline } from './components/HistoryTimeline';
import { FoundersSection } from './components/FoundersSection';
import { Campuses } from './components/Campuses';
import { IdentityValues } from './components/IdentityValues';
import { AcademicsAndFees } from './components/AcademicsAndFees';
import { NewsAndEvents } from './components/NewsAndEvents';
import { GallerySection } from './components/GallerySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AdmissionFormModal } from './components/AdmissionFormModal';
import { AdminPortalModal } from './components/AdminPortalModal';
import { WhatsAppWidget } from './components/WhatsAppWidget';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [admissionModalOpen, setAdmissionModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | undefined>(undefined);
  const [adminModalOpen, setAdminModalOpen] = useState(false);

  const handleOpenAdmissionModal = (plan?: string) => {
    setSelectedPlan(plan);
    setAdmissionModalOpen(true);
  };

  const scrollToId = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-red-600 selection:text-white">
      
      {/* Header */}
      <Header
        onOpenAdmissionModal={() => handleOpenAdmissionModal()}
        onOpenAdminModal={() => setAdminModalOpen(true)}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      {/* Hero Section */}
      <Hero
        onOpenAdmissionModal={() => handleOpenAdmissionModal()}
        onExploreCampuses={() => scrollToId('campuses')}
        onViewHistory={() => scrollToId('history')}
      />

      {/* History & Origin Story Timeline */}
      <HistoryTimeline />

      {/* Co-Founders Messages (Managing Director & Proprietress side-by-side) */}
      <FoundersSection />

      {/* Dual Campus Network Showcase */}
      <Campuses />

      {/* Mission, Motto & Vision */}
      <IdentityValues />

      {/* Academics & Daily Payment Lesson Plan */}
      <AcademicsAndFees
        onOpenAdmissionModal={(plan) => handleOpenAdmissionModal(plan)}
      />

      {/* Photo Gallery */}
      <GallerySection />

      {/* News & Calendar Announcements */}
      <NewsAndEvents />

      {/* Contact Us & WhatsApp Section */}
      <ContactSection />

      {/* Footer */}
      <Footer
        onOpenAdmissionModal={() => handleOpenAdmissionModal()}
        setActiveSection={setActiveSection}
      />

      {/* Admission Inquiry Modal */}
      <AdmissionFormModal
        isOpen={admissionModalOpen}
        onClose={() => setAdmissionModalOpen(false)}
        defaultPlan={selectedPlan}
      />

      {/* Admin / Staff Applications Management Portal */}
      <AdminPortalModal
        isOpen={adminModalOpen}
        onClose={() => setAdminModalOpen(false)}
      />

      {/* Persistent Floating WhatsApp Direct Launcher */}
      <WhatsAppWidget />

    </div>
  );
}
