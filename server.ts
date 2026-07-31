import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { SCHOOL_INFO, CAMPUSES, TIMELINE, ANNOUNCEMENTS, ACADEMIC_PROGRAMS, SAMPLE_STUDENT_RECORDS } from './src/data/schoolData';
import { AdmissionInquiry, ContactMessage } from './src/types';

const admissionsDatabase: AdmissionInquiry[] = [
  {
    id: "TOFEM-INQ-94821",
    studentName: "Oluwaseun Bakare",
    parentName: "Mrs. Folashade Bakare",
    phone: "08034860693",
    email: "folashade.b@gmail.com",
    gradeApplying: "JSS 1",
    campusPreference: "Secondary",
    paymentPlan: "Standard Termly",
    message: "Enquiring about entrance exam date and textbook list for Tofem College.",
    createdAt: new Date().toISOString(),
    status: "Pending"
  }
];

const contactMessages: ContactMessage[] = [];

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.get('/api/info', (_req, res) => {
    res.json(SCHOOL_INFO);
  });

  app.get('/api/campuses', (_req, res) => {
    res.json(CAMPUSES);
  });

  app.get('/api/history', (_req, res) => {
    res.json(TIMELINE);
  });

  app.get('/api/programs', (_req, res) => {
    res.json(ACADEMIC_PROGRAMS);
  });

  app.get('/api/announcements', (_req, res) => {
    res.json(ANNOUNCEMENTS);
  });

  app.post('/api/admissions', (req, res) => {
    const { studentName, parentName, phone, email, gradeApplying, campusPreference, paymentPlan, message } = req.body;
    
    if (!studentName || !parentName || !phone || !gradeApplying) {
      return res.status(400).json({ error: 'Please fill in all required fields (Student Name, Parent Name, Phone, and Grade).' });
    }

    const newInquiry: AdmissionInquiry = {
      id: `TOFEM-INQ-${Math.floor(10000 + Math.random() * 90000)}`,
      studentName,
      parentName,
      phone,
      email: email || SCHOOL_INFO.email,
      gradeApplying,
      campusPreference: campusPreference || 'Primary',
      paymentPlan: paymentPlan || 'Standard Termly',
      message: message || '',
      createdAt: new Date().toISOString(),
      status: 'Pending'
    };

    admissionsDatabase.unshift(newInquiry);

    const waText = encodeURIComponent(
      `Hello Tofem Private School,\nI am submitting an Admission Inquiry:\n` +
      `• Student: ${newInquiry.studentName}\n` +
      `• Grade: ${newInquiry.gradeApplying}\n` +
      `• Campus: Tofem ${newInquiry.campusPreference}\n` +
      `• Parent: ${newInquiry.parentName}\n` +
      `• Phone: ${newInquiry.phone}\n` +
      `• Preferred Plan: ${newInquiry.paymentPlan}\n` +
      `• Ref ID: ${newInquiry.id}`
    );
    const whatsappLink = `https://wa.me/2348034860693?text=${waText}`;

    res.status(201).json({
      success: true,
      inquiry: newInquiry,
      whatsappLink,
      message: 'Admission inquiry submitted successfully!'
    });
  });

  app.get('/api/admissions', (_req, res) => {
    res.json(admissionsDatabase);
  });

  app.post('/api/contact', (req, res) => {
    const { name, email, phone, subject, message } = req.body;
    if (!name || !phone || !message) {
      return res.status(400).json({ error: 'Name, phone number, and message are required.' });
    }

    const newMessage: ContactMessage = {
      id: `MSG-${Math.floor(1000 + Math.random() * 9000)}`,
      name,
      email: email || 'N/A',
      phone,
      subject: subject || 'General Inquiry',
      message,
      createdAt: new Date().toISOString()
    };

    contactMessages.unshift(newMessage);

    const waText = encodeURIComponent(
      `Hello Tofem School,\n` +
      `New Website Contact Message:\n` +
      `Name: ${name}\n` +
      `Phone: ${phone}\n` +
      `Subject: ${subject || 'General Enquiry'}\n` +
      `Message: ${message}`
    );
    const whatsappLink = `https://wa.me/2348034860693?text=${waText}`;

    res.json({ success: true, whatsappLink, message: 'Message sent! You can also chat with us directly on WhatsApp.' });
  });

  app.post('/api/portal-auth', (req, res) => {
    const { studentId } = req.body;
    if (!studentId) {
      return res.status(400).json({ error: 'Student ID or Admission Number is required.' });
    }

    const record = SAMPLE_STUDENT_RECORDS.find(
      r => r.studentId.toLowerCase() === studentId.trim().toLowerCase()
    ) || SAMPLE_STUDENT_RECORDS[0];

    res.json({ success: true, record });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
