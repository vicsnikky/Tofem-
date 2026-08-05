import { Campus, TimelineEvent, AcademicProgram, Announcement, StudentRecord } from '../types';

export const SCHOOL_INFO = {
  name: "Tofem Private School & Tofem College",
  shortName: "Tofem Schools",
  tagline: "Building Future Leaders — Modelling for Greatness",
  motto: "Modelling for Greatness",
  mission: "Building Future Leaders — Committed to raising learners who will become responsible, innovative, and impactful leaders.",
  vision: "To enhance sustainable knowledge and good character in the lives of our learners. We believe education is about building both the mind and the character.",
  foundedDate: "June 3rd, 2013",
  foundingStory: "Tofem Private School began on June 3rd, 2013, in a rented space with a heart to serve. It started as a Creche and Care Centre for less privileged children who were old enough to begin formal education. To make learning accessible, we introduced flexible fee payment plans so finances would not be a barrier to education. The school began with just one female teacher and the Proprietress, operating with dedication, sacrifice, and the belief that every child deserves quality education.",
  email: "olabiranjo2005@gmail.com",
  phone: "08034860693",
  formattedPhone: "+234 803 486 0693",
  whatsappNumber: "2348034860693",
  whatsappUrl: "https://wa.me/2348034860693?text=Hello%20Tofem%20Private%20School%2C%20I%20would%20like%20to%20make%20an%20enquiry.",
  approvalStatus: "Fully Approved by Ogun State Government",
  workingHours: "Monday - Friday: 7:30 AM - 4:00 PM",
  socialLinks: {
    facebook: "https://www.facebook.com/share/1DUhgwkuYa/",
    instagram: "https://www.instagram.com/tofemschool?igsh=MWd5czFjMzh4bjB6bg==",
    tiktok: "https://www.tiktok.com/@tofemschool?_r=1&_t=ZS-98dL46VROK5",
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
    image: "https://i.ibb.co/m5N6T7h8/Whats-App-Image-2026-07-24-at-2-22-42-PM.jpg",
    phone: "08034860693",
    email: "olabiranjo2005@gmail.com",
    grades: "Creche, Nursery & Basic 1 to 6",
    features: [
      "Dedicated Early Childhood Care & Creche",
      "Spacious, Ventilated Classrooms",
      "Child Safety & Secure Perimeter",
      "Interactive Learning Aids & Phonics",
      "Flexible & Standard Termly Fee Options",
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
    description: "Started in a rented space as a Creche and Care Centre for less privileged children. To ensure financial constraints never barred any child from learning, we pioneered flexible fee payment options. Operated with dedication by just one female teacher and the Proprietress.",
    highlight: "1 Teacher + Proprietress • Flexible Fee Access",
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
    year: "10th Anniversary",
    date: "A Decade of Impact (2013 - 2023)",
    title: "10th Anniversary Celebration",
    subtitle: "Celebrating 10 Years of Faithful Impact",
    description: "Tofem marked a glorious decade of nurturing champions and future leaders with thanksgiving, community celebration, and honoring pioneer staff, alumni, and parents who journeyed with us since 2013.",
    highlight: "10 Years of Impact & Grace",
    iconName: "Sparkles"
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

export const CULTURAL_PHOTOS = [
  {
    title: "Cultural Day Costume & Heritage Presentation",
    image: "https://i.ibb.co/8n4j00XF/Whats-App-Image-2026-08-05-at-7-17-08-PM.jpg",
    caption: "Pupils celebrating rich Nigerian cultural traditions and heritage in authentic attires.",
    category: "Cultural Day",
    campus: "Tofem Assembly Hall"
  },
  {
    title: "Traditional Cultural Dance & Performance",
    image: "https://i.ibb.co/S4VGvNvB/Whats-App-Image-2026-08-05-at-7-17-09-PM-1.jpg",
    caption: "Students performing traditional cultural dances and artistic choreographies.",
    category: "Cultural Day",
    campus: "Tofem Cultural Stage"
  },
  {
    title: "Students in Vibrant Nigerian Cultural Attire",
    image: "https://i.ibb.co/SX97Vnsh/Whats-App-Image-2026-08-05-at-7-17-09-PM.jpg",
    caption: "Celebrating cultural diversity and unity among pupils and teachers at Tofem.",
    category: "Cultural Day",
    campus: "Tofem Primary Campus"
  }
];

export const ANNIVERSARY_PHOTOS = [
  {
    title: "10th Anniversary Celebration Banner & Cake",
    image: "https://i.ibb.co/5hSZB7Vb/Whats-App-Image-2026-08-01-at-5-07-54-PM-1.jpg",
    caption: "Marking 10 glorious years of building future leaders with dedication and grace.",
    category: "10th Anniversary",
    campus: "Tofem Celebration Ground"
  },
  {
    title: "Proprietress, MD & Dignitaries at 10th Anniversary",
    image: "https://i.ibb.co/LzTM6P8P/Whats-App-Image-2026-08-01-at-5-07-54-PM.jpg",
    caption: "School founders, management, and special guests celebrating a decade of excellence.",
    category: "10th Anniversary",
    campus: "Anniversary Banquet"
  },
  {
    title: "10th Anniversary Thanksgiving & Celebration",
    image: "https://i.ibb.co/0yB8dZnD/Whats-App-Image-2026-08-01-at-5-07-55-PM.jpg",
    caption: "Thanksgiving, awards, and anniversary rejoicing with staff, parents, and students.",
    category: "10th Anniversary",
    campus: "Tofem Anniversary Stage"
  }
];

export const GRADUATION_2026_PHOTOS = [
  {
    title: "2026 Graduating Pupils in Academic Gowns",
    image: "https://i.ibb.co/27d7jkrj/Whats-App-Image-2026-08-05-at-7-17-04-PM-1.jpg",
    caption: "Proud graduating pupils dressed in academic gowns and caps on their graduation day.",
    category: "Graduation 2026",
    campus: "Tofem Graduation Hall"
  },
  {
    title: "2026 Graduation Procession & Celebration",
    image: "https://i.ibb.co/7J33RMyh/Whats-App-Image-2026-08-05-at-7-17-04-PM-2.jpg",
    caption: "Graduation ceremony procession and festive presentation with teachers and parents.",
    category: "Graduation 2026",
    campus: "Tofem Event Grounds"
  },
  {
    title: "Valedictory & Prize Giving Ceremony Stage",
    image: "https://i.ibb.co/270Q5FY3/Whats-App-Image-2026-08-05-at-7-17-04-PM.jpg",
    caption: "Celebrating academic champions and prize winners on the valedictory stage.",
    category: "Graduation 2026",
    campus: "Tofem Stage"
  },
  {
    title: "2026 Graduating Class Academic Presentation",
    image: "https://i.ibb.co/4wP7Wnrr/Whats-App-Image-2026-08-05-at-7-17-05-PM-1.jpg",
    caption: "Graduating class giving speeches, presentations, and farewell songs.",
    category: "Graduation 2026",
    campus: "Auditorium Stage"
  },
  {
    title: "Graduation Day Pupils with Awards & Certificates",
    image: "https://i.ibb.co/9m5qNVpX/Whats-App-Image-2026-08-05-at-7-17-05-PM-2.jpg",
    caption: "Pupils proudly receiving their certificates and awards for academic outstanding excellence.",
    category: "Graduation 2026",
    campus: "Tofem Stage"
  },
  {
    title: "Graduation Special Performance & Choreography",
    image: "https://i.ibb.co/W4MTY2yc/Whats-App-Image-2026-08-05-at-7-17-05-PM.jpg",
    caption: "Students performing special choreography, choir hymns, and drama presentations.",
    category: "Graduation 2026",
    campus: "Celebration Arena"
  },
  {
    title: "Joyful Graduates & Proud Parents Moment",
    image: "https://i.ibb.co/5WZ4DnXf/Whats-App-Image-2026-08-05-at-7-17-06-PM-1.jpg",
    caption: "Heartwarming moments between graduating scholars and proud parents.",
    category: "Graduation 2026",
    campus: "Tofem Photo Booth"
  },
  {
    title: "2026 Valedictory Session with Teachers & Founders",
    image: "https://i.ibb.co/h1VMVC1Y/Whats-App-Image-2026-08-05-at-7-17-06-PM.jpg",
    caption: "Graduating set with dedicated teaching staff, Proprietress, and Managing Director.",
    category: "Graduation 2026",
    campus: "Tofem Graduation Hall"
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
    keyFeatures: ["Flexible Fee Payment Options", "Hygiene & Safety Focus", "Dedicated Caregiver Supervision"],
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
    id: "ann-grad-2026",
    title: "2026 Annual Graduation & Valedictory Ceremony Highlights",
    category: "Academic",
    date: "August 2026",
    summary: "Celebrating our graduating scholars across primary and secondary wings with prizes, joy, and awards.",
    content: "Hearty congratulations to the 2026 graduating class of Tofem Private School & Tofem College! We celebrate their exceptional achievements, character, and readiness to lead in their next academic chapters.",
    badgeColor: "bg-red-100 text-red-800"
  },
  {
    id: "ann-culture",
    title: "Annual Cultural Heritage & Talent Exhibition",
    category: "Sports",
    date: "2026 Session",
    summary: "A vibrant celebration of Nigerian culture, ethnic traditions, dance, and student theatrical drama.",
    content: "Our learners showcased colorful traditional attires, cultural dances, drama presentations, and culinary heritage representing diverse cultures across Nigeria at the Tofem Assembly Grounds.",
    badgeColor: "bg-amber-100 text-amber-800"
  },
  {
    id: "ann-1",
    title: "Admissions Ongoing for 2026/2027 Academic Session",
    category: "Academic",
    date: "July - Sept 2026",
    summary: "Entrance examinations and registration forms are now available for Primary & Tofem College.",
    content: "Tofem Private School and Tofem College welcome prospective pupils and students for the upcoming academic session. Entrance assessments are conducted every Wednesday and Saturday at our primary and secondary campuses.",
    badgeColor: "bg-emerald-100 text-emerald-800"
  },
  {
    id: "ann-2",
    title: "Flexible Payment & Standard Fee Information",
    category: "Notice",
    date: "August 2026",
    summary: "Learn how our flexible payment options and standard termly fee structures empower parents.",
    content: "In line with our core vision, Tofem Private School & Tofem College offers flexible fee payment plans and standard termly arrangements to ensure financial hardship never interrupts a child's right to quality education.",
    badgeColor: "bg-blue-100 text-blue-800"
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
    parentName: "Pastor Mrs. Olabiran",
    parentPhone: "08034860693",
    term: "3rd Term",
    academicYear: "2025/2026",
    overallGrade: "A (91.2%)",
    attendance: "100%",
    feeStatus: "Flexible Plan Active",
    subjects: [
      { name: "Mathematics", score: 95, grade: "A+" },
      { name: "English Language", score: 88, grade: "A" },
      { name: "Basic Technology", score: 94, grade: "A+" },
      { name: "Business Studies", score: 89, grade: "A" },
      { name: "Civic Education", score: 90, grade: "A+" }
    ]
  }
];
