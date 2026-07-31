import { Campus, TimelineEvent, AcademicProgram, Announcement, StudentRecord } from '../types';

export const SCHOOL_INFO = {
  name: "Tofem Private School & Tofem College",
  shortName: "Tofem Schools",
  tagline: "Building Future Leaders — Modelling for Greatness",
  motto: "Modelling for Greatness",
  mission: "Building Future Leaders — Committed to raising learners who will become responsible, innovative, and impactful leaders.",
  vision: "To enhance sustainable knowledge and good character in the lives of our learners. We believe education is about building both the mind and the character.",
  foundedDate: "June 3rd, 2013",
  foundingStory: "Tofem Private School began on June 3rd, 2013, in a rented space with a heart to serve. It started as a Creche and Care Centre for less privileged children who were old enough to begin formal education. To make learning accessible, we introduced a daily payment lesson plan so finances would not be a barrier to education. The school began with just one female teacher and the Proprietress, operating with dedication, sacrifice, and the belief that every child deserves quality education.",
  email: "olabiranjo2005@gmail.com",
  phone: "08034860693",
  formattedPhone: "+234 803 486 0693",
  whatsappNumber: "2348034860693",
  whatsappUrl: "https://wa.me/2348034860693?text=Hello%20Tofem%20Private%20School%2C%20I%20would%20like%20to%20make%20an%20enquiry.",
  approvalStatus: "Fully Approved by Ogun State Government",
  workingHours: "Monday - Friday: 7:30 AM - 4:00 PM",
  socialLinks: {
    facebook: "https://facebook.com/tofemprivate",
    instagram: "https://instagram.com/tofem_schools",
    whatsapp: "https://wa.me/2348034860693"
  }
};

export const CAMPUSES: Campus[] = [
  {
    id: "primary-campus",
    name: "Tofem Primary School",
    type: "Primary",
    address: "32, Bodunrin Street, Agbado crossing, Ogun state",
    landmark: "Agbado Crossing Junction",
    image: "/images/primary_campus_photo.jpg",
    phone: "08034860693",
    email: "olabiranjo2005@gmail.com",
    grades: "Creche, Nursery & Basic 1 to 6",
    features: [
      "Dedicated Early Childhood Care & Creche",
      "Spacious, Ventilated Classrooms",
      "Child Safety & Secure Perimeter",
      "Interactive Learning Aids & Phonics",
      "Daily Payment Lesson Plan Option",
      "Age-Appropriate Discipline & Character Building"
    ]
  },
  {
    id: "college-campus",
    name: "Tofem College (Secondary School)",
    type: "Secondary",
    address: "22, Olaoluwa Street, Agbado crossing, Ogun state",
    landmark: "Stone's throw from Primary Campus, Agbado Crossing",
    image: "https://i.ibb.co/Q3yH3N0T/Whats-App-Image-2026-07-31-at-6-42-54-AM.jpg",
    phone: "08034860693",
    email: "olabiranjo2005@gmail.com",
    grades: "JSS 1 - 3 & SSS 1 - 3 (Sciences, Arts & Commercial)",
    features: [
      "Modern Science & Physics / Chemistry Laboratories",
      "ICT & Computer Literacy Center",
      "WAEC, NECO & BECE Examination Center",
      "Leadership & Debating Clubs",
      "Secondary Focused Academic Discipline",
      "Career Guidance & Mentorship Programs"
    ]
  }
];

export const TIMELINE: TimelineEvent[] = [
  {
    year: "2013",
    date: "June 3rd, 2013",
    title: "Founded on a Vision to Serve",
    subtitle: "Creche & Care Centre in Rented Space",
    description: "Started in a rented space as a Creche and Care Centre for less privileged children. To ensure financial constraints never barred any child from learning, we pioneered a flexible daily payment lesson plan. Operated with dedication by just one female teacher and the Proprietress.",
    highlight: "1 Teacher + Proprietress • Daily Payment Plan",
    iconName: "HeartHandshake"
  },
  {
    year: "2017",
    date: "June 2017 (Within 4 Years)",
    title: "Government Approval & Official Identity",
    subtitle: "Ogun State Government Recognition",
    description: "Through 4 years of steady growth, academic diligence, and community impact, the Ogun State Government officially approved the institution as 'Tofem Private School' (replacing the initial name 'Tofem Group of Schools'), transitioning from a care center to a fully structured basic school.",
    highlight: "Approved as Tofem Private School",
    iconName: "Award"
  },
  {
    year: "Secondary Expansion",
    date: "2000/2001 Academic Session",
    title: "Commencement of Tofem College",
    subtitle: "Secondary Education Wing",
    description: "To guarantee seamless academic continuity for our pupils, Tofem College opened its doors starting with a dedicated pioneer set of JSS1 students, laying the groundwork for secondary academic excellence.",
    highlight: "JSS1 Pioneer Class Introduced",
    iconName: "GraduationCap"
  },
  {
    year: "Present Day",
    date: "Fully Approved Dual Campuses",
    title: "Two Dedicated Campuses & Growing Impact",
    subtitle: "Modelling for Greatness — Primary & Secondary",
    description: "By God's grace, Tofem has blossomed into a complete educational institution operating two distinct campuses at a stone's throw from each other at Agbado crossing. Fully approved by the Ogun State Government, raising responsible, innovative future leaders.",
    highlight: "2 Campuses • Primary & Secondary",
    iconName: "Building2"
  }
];

export const ACADEMIC_PROGRAMS: AcademicProgram[] = [
  {
    id: "creche-care",
    level: "Creche & Care Centre",
    category: "Early Years",
    ageRange: "3 Months - 2 Years",
    description: "Nurturing early childhood care providing safety, sensory stimulation, social bonding, and foundational motor development in a warm environment.",
    subjects: ["Sensory Development", "Language Play", "Motor Skills", "Social Interaction", "Early Phonics"],
    keyFeatures: ["Daily Payment Option Available", "Hygiene & Safety Focus", "Dedicated Caregiver Supervision"],
    icon: "Baby"
  },
  {
    id: "nursery-primary",
    level: "Nursery & Primary Education",
    category: "Primary",
    ageRange: "3 - 11 Years",
    description: "Comprehensive basic education laying strong foundations in literacy, numeracy, science, cultural arts, and moral character at 32 Bodunrin Street.",
    subjects: ["Mathematics", "English Language & Diction", "Basic Science & Tech", "Social Studies", "Civic Education", "ICT Basics", "Agricultural Science", "Yoruba Language"],
    keyFeatures: ["Ogun State Basic Curriculum", "Phonics & Oratory Training", "Sports & Co-curriculars"],
    icon: "BookOpen"
  },
  {
    id: "junior-secondary",
    level: "Junior Secondary (JSS 1 - JSS 3)",
    category: "Junior Secondary",
    ageRange: "11 - 14 Years",
    description: "Rigorous Junior Secondary education preparing students for the Basic Education Certificate Examination (BECE) with focused academic discipline at 22 Olaoluwa Street.",
    subjects: ["Mathematics", "English Studies", "Basic Science", "Basic Technology", "Business Studies", "Computer Studies/ICT", "Civic Education", "Agricultural Science"],
    keyFeatures: ["BECE Examination Readiness", "Science & Tech Orientation", "Student Leadership Council"],
    icon: "School"
  },
  {
    id: "senior-secondary",
    level: "Senior Secondary (SSS 1 - SSS 3)",
    category: "Senior Secondary",
    ageRange: "14 - 17 Years",
    description: "Specialized Senior Secondary wings in Science, Arts, and Commercial streams preparing students for WAEC, NECO, JAMB/UTME, and university entry.",
    subjects: ["Physics, Chemistry, Biology", "Further Mathematics", "Financial Accounting & Commerce", "Government & Literature-in-English", "Economics", "Computer Science"],
    keyFeatures: ["WAEC & NECO Approval", "Hands-on Science Labs", "Career Counseling & JAMB Prep"],
    icon: "GraduationCap"
  }
];

export const ANNOUNCEMENTS: Announcement[] = [
  {
    id: "ann-1",
    title: "Admissions Ongoing for 2026/2027 Academic Session",
    category: "Academic",
    date: "July 2026",
    summary: "Entrance examinations and registration forms are now available for Primary & Tofem College.",
    content: "Tofem Private School and Tofem College welcome prospective pupils and students for the upcoming academic session. Entrance assessments are conducted every Wednesday and Saturday at our primary and secondary campuses.",
    badgeColor: "bg-emerald-100 text-emerald-800"
  },
  {
    id: "ann-2",
    title: "Daily Payment Lesson Plan Information Session",
    category: "Notice",
    date: "August 2026",
    summary: "Learn how our founding daily lesson plan empowers parents with flexible payment options.",
    content: "In line with our core founding vision since 2013, Tofem Private School continues to offer flexible payment arrangements including our popular daily lesson plan to ensure financial hardship never interrupts a child's right to quality education.",
    badgeColor: "bg-blue-100 text-blue-800"
  },
  {
    id: "ann-3",
    title: "Annual Inter-House Sports & Cultural Festival",
    category: "Sports",
    date: "Upcoming Term",
    summary: "A celebration of athletic talent, team spirit, and cultural heritage across both campuses.",
    content: "Students from Tofem Primary and Tofem College will showcase their sporting talent and cultural heritage. Parents and guardians are cordially invited to attend.",
    badgeColor: "bg-amber-100 text-amber-800"
  }
];

export const SAMPLE_STUDENT_RECORDS: StudentRecord[] = [
  {
    id: "rec-1",
    studentId: "TPS/2026/014",
    fullName: "Adebayo Samuel",
    class: "Basic 5",
    campus: "Tofem Primary School",
    parentName: "Mr. & Mrs. Adebayo",
    parentPhone: "08034860693",
    term: "3rd Term",
    academicYear: "2025/2026",
    overallGrade: "A (88.4%)",
    attendance: "98%",
    feeStatus: "Paid",
    subjects: [
      { name: "Mathematics", score: 92, grade: "A+" },
      { name: "English Studies", score: 86, grade: "A" },
      { name: "Basic Science", score: 89, grade: "A" },
      { name: "Social Studies", score: 85, grade: "A" },
      { name: "Computer Studies", score: 90, grade: "A+" }
    ]
  },
  {
    id: "rec-2",
    studentId: "TC/2026/089",
    fullName: "Olabiran Joy Chidimma",
    class: "JSS 2",
    campus: "Tofem College (Secondary)",
    parentName: "Mrs. Olabiran",
    parentPhone: "08034860693",
    term: "3rd Term",
    academicYear: "2025/2026",
    overallGrade: "A (91.2%)",
    attendance: "100%",
    feeStatus: "Daily Plan Active",
    subjects: [
      { name: "Mathematics", score: 95, grade: "A+" },
      { name: "English Language", score: 88, grade: "A" },
      { name: "Basic Technology", score: 94, grade: "A+" },
      { name: "Business Studies", score: 89, grade: "A" },
      { name: "Civic Education", score: 90, grade: "A+" }
    ]
  }
];
