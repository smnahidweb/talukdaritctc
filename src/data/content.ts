// Course Departments / Categories — matches the hero carousel on rayhansict.com
export interface DepartmentItem {
  id: string;
  title: string;
  icon: string; // emoji for static icon
  href: string;
}

export const departments: DepartmentItem[] = [
  {
    id: "dept-1",
    title: "Office Applications",
    icon: "🖥️",
    href: "/courses#office",
  },
  {
    id: "dept-2",
    title: "Computer Fundamentals",
    icon: "💻",
    href: "/courses#fundamentals",
  },
  {
    id: "dept-3",
    title: "Web & Internet",
    icon: "🌐",
    href: "/courses#web",
  },
  {
    id: "dept-4",
    title: "Typing & Documentation",
    icon: "⌨️",
    href: "/courses#typing",
  },
  {
    id: "dept-5",
    title: "Digital Literacy",
    icon: "📱",
    href: "/courses#digital",
  },
  {
    id: "dept-6",
    title: "Career Development",
    icon: "🎯",
    href: "/career",
  },
];

// Comparison table data — matches the "differences" section on rayhansict.com
export interface ComparisonRow {
  feature: string;
  ours: boolean;
  others: boolean;
}

export const comparisonRows: ComparisonRow[] = [
  { feature: "Practical Lab Training", ours: true, others: false },
  { feature: "Experienced Trainers", ours: true, others: true },
  { feature: "Problem-Solving Classes", ours: true, others: false },
  { feature: "Personalized Guidance", ours: true, others: false },
  { feature: "Career Counseling", ours: true, others: false },
  { feature: "Computer Lab Access", ours: true, others: false },
  { feature: "Project & Portfolio Support", ours: true, others: false },
  { feature: "Certificate on Completion", ours: true, others: true },
];

// FAQ data — matches the 2-column accordion on rayhansict.com
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    id: "faq-1",
    question: "Can I enroll if I am a complete beginner?",
    answer:
      "Yes, absolutely. Our courses are designed for beginners and start from the fundamentals. Our trainers will guide you step by step through practical, hands-on learning.",
  },
  {
    id: "faq-2",
    question: "Do I need to bring my own computer?",
    answer:
      "No, you do not. Our air-conditioned computer lab has a dedicated computer for each student, so you can attend your classes without bringing your own device.",
  },
  {
    id: "faq-3",
    question: "How long are the courses, and when are the classes held?",
    answer:
      "Course duration varies depending on the program, typically ranging from 4 to 8 weeks. Classes are available in morning and afternoon batches, and you can choose your preferred schedule during enrollment.",
  },
  {
    id: "faq-4",
    question: "Will I receive a certificate after completing the course?",
    answer:
      "Yes. Students who successfully complete their course will receive a certificate from Talukdar IT & Computer Training Centre as recognition of their training and achievement.",
  },
  {
    id: "faq-5",
    question: "Is the demo class free?",
    answer:
      "Yes. Our demo class is completely free. You can attend a demo session before enrollment to experience the course, teaching approach, and learning environment.",
  },
  {
    id: "faq-6",
    question: "Do I have to pay the full course fee at once?",
    answer:
      "Course fees are generally paid in full at the time of enrollment. However, installment options may be available in special cases. Please contact us for more details.",
  },
];

// Mentor / Instructor data
export interface MentorItem {
  id: string;
  name: string;
  title: string;
  department: string;
  image: string;
}

export const mentorsData: MentorItem[] = [
  {
    id: "mentor-1",
    name: "Md. Talukdar Hossain",
    title: "Head Instructor",
    department: "Office Applications & Computer Fundamentals",
    image: "/images/mentors/mentor-1.jpg",
  },
  {
    id: "mentor-2",
    name: "Rashida Begum",
    title: "Senior Trainer",
    department: "Typing & Documentation",
    image: "/images/mentors/mentor-2.jpg",
  },
  {
    id: "mentor-3",
    name: "Jahirul Islam",
    title: "Trainer",
    department: "Web Design & Digital Skills",
    image: "/images/mentors/mentor-3.jpg",
  },
];
