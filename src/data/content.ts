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
    question: "আমি কি একেবারে নতুন শিক্ষার্থী হলেও ভর্তি হতে পারব?",
    answer:
      "হ্যাঁ, অবশ্যই। আমাদের কোর্সগুলো একেবারে বিগিনার থেকে শুরু হয়। আমাদের ট্রেইনার আপনাকে একদম প্রথম থেকে হাতে-কলমে শেখাবেন।",
  },
  {
    id: "faq-2",
    question: "কোর্স করতে নিজস্ব কম্পিউটার লাগবে কি?",
    answer:
      "না, লাগবে না। আমাদের এয়ার-কন্ডিশন্ড কম্পিউটার ল্যাবে প্রতিটি শিক্ষার্থীর জন্য আলাদা কম্পিউটার রয়েছে।",
  },
  {
    id: "faq-3",
    question: "কোর্সের সময়কাল কতদিন এবং কখন ক্লাস হয়?",
    answer:
      "কোর্সভেদে ৪ থেকে ৮ সপ্তাহ। সকাল ও বিকেলে দুটি ব্যাচে ক্লাস হয়। ভর্তির সময় আপনার পছন্দের সময়সূচি বেছে নিতে পারবেন।",
  },
  {
    id: "faq-4",
    question: "কোর্স শেষে কি সার্টিফিকেট দেওয়া হয়?",
    answer:
      "হ্যাঁ। সফলভাবে কোর্স সম্পন্ন করলে Talukdar IT & Computer Training Centre-এর পক্ষ থেকে সার্টিফিকেট প্রদান করা হয়।",
  },
  {
    id: "faq-5",
    question: "ডেমো ক্লাস কি বিনামূল্যে?",
    answer:
      "হ্যাঁ। আমাদের ডেমো ক্লাস সম্পূর্ণ বিনামূল্যে। ভর্তির আগে একটি ডেমো ক্লাসে অংশগ্রহণ করে কোর্স ও পরিবেশ সম্পর্কে ধারণা নিতে পারবেন।",
  },
  {
    id: "faq-6",
    question: "ফি কি একসাথে পরিশোধ করতে হবে?",
    answer:
      "সাধারণত কোর্স ফি একবারে পরিশোধ করতে হয়। তবে বিশেষ প্রয়োজনে কিস্তিতে পরিশোধের সুবিধাও দেওয়া হয়। বিস্তারিত জানতে সরাসরি যোগাযোগ করুন।",
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
