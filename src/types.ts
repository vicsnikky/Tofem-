export interface Campus {
  id: string;
  name: string;
  type: 'Primary' | 'Secondary';
  address: string;
  landmark: string;
  image: string;
  phone: string;
  email: string;
  grades: string;
  features: string[];
}

export interface TimelineEvent {
  year: string;
  date?: string;
  title: string;
  subtitle: string;
  description: string;
  highlight?: string;
  iconName: string;
}

export interface AcademicProgram {
  id: string;
  level: string;
  category: 'Early Years' | 'Primary' | 'Junior Secondary' | 'Senior Secondary';
  ageRange: string;
  description: string;
  subjects: string[];
  keyFeatures: string[];
  icon: string;
}

export interface AdmissionInquiry {
  id?: string;
  studentName: string;
  parentName: string;
  phone: string;
  email: string;
  gradeApplying: string;
  campusPreference: 'Primary' | 'Secondary';
  paymentPlan: 'Standard Termly' | 'Flexible Fee Payment' | 'Flexible Installment';
  message?: string;
  createdAt?: string;
  status?: 'Pending' | 'Contacted' | 'Enrolled';
}

export interface Announcement {
  id: string;
  title: string;
  category: 'Notice' | 'Event' | 'Academic' | 'Sports';
  date: string;
  summary: string;
  content: string;
  badgeColor?: string;
}

export interface StudentRecord {
  id: string;
  studentId: string;
  fullName: string;
  class: string;
  campus: string;
  parentName: string;
  parentPhone: string;
  term: string;
  academicYear: string;
  overallGrade: string;
  attendance: string;
  feeStatus: 'Paid' | 'Partial' | 'Flexible Plan Active';
  subjects: { name: string; score: number; grade: string }[];
}

export interface ContactMessage {
  id?: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  createdAt?: string;
}
