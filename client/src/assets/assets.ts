
export type Asset = {
  icon: string;
  heading: string;
  description: string;
  background: string;
};

export const assets: Asset[] = [
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8.5 7C8.5 8.10457 7.60457 9 6.5 9C5.39543 9 4.5 8.10457 4.5 7C4.5 5.89543 5.39543 5 6.5 5C7.60457 5 8.5 5.89543 8.5 7ZM2.5 7C2.5 9.20914 4.29086 11 6.5 11C8.70914 11 10.5 9.20914 10.5 7C10.5 4.79086 8.70914 3 6.5 3C4.29086 3 2.5 4.79086 2.5 7ZM9 16.5C9 15.1193 7.88071 14 6.5 14C5.11929 14 4 15.1193 4 16.5V19H9V16.5ZM11 21H2V16.5C2 14.0147 4.01472 12 6.5 12C8.98528 12 11 14.0147 11 16.5V21ZM19.5 7C19.5 8.10457 18.6046 9 17.5 9C16.3954 9 15.5 8.10457 15.5 7C15.5 5.89543 16.3954 5 17.5 5C18.6046 5 19.5 5.89543 19.5 7ZM13.5 7C13.5 9.20914 15.2909 11 17.5 11C19.7091 11 21.5 9.20914 21.5 7C21.5 4.79086 19.7091 3 17.5 3C15.2909 3 13.5 4.79086 13.5 7ZM20 16.5C20 15.1193 18.8807 14 17.5 14C16.1193 14 15 15.1193 15 16.5V19H20V16.5ZM13 19V16.5C13 14.0147 15.0147 12 17.5 12C19.9853 12 22 14.0147 22 16.5V21H13V19Z"></path></svg>',
    heading: 'Create Your Profile',
    description:
      'List the skills you know and the skills you want to learn. Our smart algorithm will find your perfect learning partners.',

    background: '#DBEAFE',
  },

  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 9H21L11 24V15H4L13 0V9ZM11 11V7.22063L7.53238 13H13V17.3944L17.263 11H11Z"></path></svg>',
    heading: 'Get Matched',
    description:
      'Receive personalized matches based on complementary skills. Connect with people who can teach you and learn from you.',
    background: '#F3E8FF',
  },

  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853Z"></path></svg>',
    heading: 'Start Learning',
    description:
      'Begin meaningful learning exchanges through video calls, messaging, and collaborative projects with your matches.',
    background: '#DCFCE7',
  },
];

export const chooses: Asset[] = [
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="#2563EB" fill="none"  stroke-width="1" width="40"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26ZM12.0006 15.968L16.2473 18.3451L15.2988 13.5717L18.8719 10.2674L14.039 9.69434L12.0006 5.27502L9.96214 9.69434L5.12921 10.2674L8.70231 13.5717L7.75383 18.3451L12.0006 15.968Z"></path></svg>',
    heading: 'Smart Matching',
    description:
      'Our AI-powered algorithm finds the perfect learning partners based on your skills and goals.',

    background: '#DBEAFE',
  },

  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="#9333EA" fill="none"  stroke-width=".8" width="40"><path d="M2 22C2 17.5817 5.58172 14 10 14C14.4183 14 18 17.5817 18 22H16C16 18.6863 13.3137 16 10 16C6.68629 16 4 18.6863 4 22H2ZM10 13C6.685 13 4 10.315 4 7C4 3.685 6.685 1 10 1C13.315 1 16 3.685 16 7C16 10.315 13.315 13 10 13ZM10 11C12.21 11 14 9.21 14 7C14 4.79 12.21 3 10 3C7.79 3 6 4.79 6 7C6 9.21 7.79 11 10 11ZM18.2837 14.7028C21.0644 15.9561 23 18.752 23 22H21C21 19.564 19.5483 17.4671 17.4628 16.5271L18.2837 14.7028ZM17.5962 3.41321C19.5944 4.23703 21 6.20361 21 8.5C21 11.3702 18.8042 13.7252 16 13.9776V11.9646C17.6967 11.7222 19 10.264 19 8.5C19 7.11935 18.2016 5.92603 17.041 5.35635L17.5962 3.41321Z"></path></svg>',
    heading: 'Community Driven',
    description:
      'Learn from real people with real experience, not just theoretical knowledge.',

    background: '#F3E8FF',
  },

  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"  stroke="#16A34A" stroke-width="1" width="40"><path d="M13 21V23H11V21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H9C10.1947 3 11.2671 3.52375 12 4.35418C12.7329 3.52375 13.8053 3 15 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H13ZM20 19V5H15C13.8954 5 13 5.89543 13 7V19H20ZM11 19V7C11 5.89543 10.1046 5 9 5H4V19H11Z"></path></svg>',
    heading: 'Flexible Learning',
    description:
      'Learn at your own pace through various formats: video calls, messaging, or in-person meetups.',

    background: '#DCFCE7',
  },
];

export type Category = {
  title: string;
  learners: string;
};

export const categories: Category[] = [
  {
    title: 'Programming & Tech',
    learners: '2,500+ learners',
  },
  {
    title: 'Design & Creative',
    learners: '1,800+ learners',
  },
  {
    title: 'Languages',
    learners: '3,200+ learners',
  },
  {
    title: 'Business & Marketing',
    learners: '1,500+ learners',
  },
  {
    title: 'Music & Arts',
    learners: '900+ learners',
  },
];

export type item = {
  title: string;
  logo: string;
  number: number;
  description: string;
};

export const dashboardItems: item[] = [
  {
    title: 'Total Matches',
    logo: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 22C2 17.5817 5.58172 14 10 14C14.4183 14 18 17.5817 18 22H16C16 18.6863 13.3137 16 10 16C6.68629 16 4 18.6863 4 22H2ZM10 13C6.685 13 4 10.315 4 7C4 3.685 6.685 1 10 1C13.315 1 16 3.685 16 7C16 10.315 13.315 13 10 13ZM10 11C12.21 11 14 9.21 14 7C14 4.79 12.21 3 10 3C7.79 3 6 4.79 6 7C6 9.21 7.79 11 10 11ZM18.2837 14.7028C21.0644 15.9561 23 18.752 23 22H21C21 19.564 19.5483 17.4671 17.4628 16.5271L18.2837 14.7028ZM17.5962 3.41321C19.5944 4.23703 21 6.20361 21 8.5C21 11.3702 18.8042 13.7252 16 13.9776V11.9646C17.6967 11.7222 19 10.264 19 8.5C19 7.11935 18.2016 5.92603 17.041 5.35635L17.5962 3.41321Z"></path></svg>',
    number: 24,
    description: '+3 from last week',
  },
  {
    title: 'Active Sessions',
    logo: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M7.29117 20.8242L2 22L3.17581 16.7088C2.42544 15.3056 2 13.7025 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C10.2975 22 8.6944 21.5746 7.29117 20.8242ZM7.58075 18.711L8.23428 19.0605C9.38248 19.6745 10.6655 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 13.3345 4.32549 14.6175 4.93949 15.7657L5.28896 16.4192L4.63416 19.3658L7.58075 18.711Z"></path></svg>',
    number: 8,
    description: '2 scheduled today',
  },
  {
    title: 'Skills Learned',
    logo: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 21V23H11V21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H9C10.1947 3 11.2671 3.52375 12 4.35418C12.7329 3.52375 13.8053 3 15 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H13ZM20 19V5H15C13.8954 5 13 5.89543 13 7V19H20ZM11 19V7C11 5.89543 10.1046 5 9 5H4V19H11Z"></path></svg>',
    number: 12,
    description: '+2 this month',
  },
  {
    title: 'Rating',
    logo: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26ZM12.0006 15.968L16.2473 18.3451L15.2988 13.5717L18.8719 10.2674L14.039 9.69434L12.0006 5.27502L9.96214 9.69434L5.12921 10.2674L8.70231 13.5717L7.75383 18.3451L12.0006 15.968Z"></path></svg>',
    number: 4.8,
    description: 'Based on 15 reviews',
  },
];


export type UserMatch = {
  id: string,
  image: string,
  name: string,
  teaches: string[],
  wants: string[]
}

export const profiles: UserMatch[] = [
  {
    id: 'yoges',
    image: "",
    name: "Yogesh Shah",
    teaches: ["NodeJs", "HTML", 'React'],
    wants: ["AI/ML", "CyberSecurity"]
  }
  , {
    id: 'alice-johnson',
    image: 'https://via.placeholder.com/150',
    name: 'Alice Johnson',
    teaches: ['Python', 'Data Science'],
    wants: ['JavaScript', 'Node.js'],
  },
  {
    id: 'bob-smith',
    image: "", // No image available
    name: 'Bob Smith',
    teaches: ['React', 'TypeScript'],
    wants: ['UI/UX Design', 'Figma'],
  },
]

export type Skill = {
  name: string;
  icon: string;
};

export const skills: Skill[] = [
  { name: 'JavaScript', icon: '🟨' },
  { name: 'Python', icon: '🐍' },
  { name: 'React', icon: '⚛️' },
  { name: 'Node.js', icon: '🟩' },
  { name: 'UI/UX Design', icon: '🎨' },
  { name: 'Machine Learning', icon: '🤖' },
  { name: 'Data Science', icon: '📊' },
  { name: 'Figma', icon: '🖌️' },
  { name: 'Photography', icon: '📷' },
  { name: 'Spanish', icon: '🇪🇸' },
  { name: 'Marketing', icon: '📈' },
  { name: 'Public Speaking', icon: '🎤' },
];

export type partner = {
  image: string,
  name: string,
  session: number,
  rating: number,
  expertise: string[]
}
export const learningPartners: partner[] = [
  {
    image: "",
    name: "Sarah Chen",
    session: 24,
    rating: 4.9,
    expertise: ["React", "Node.js"]
  },

  {
    image: "",
    name: "Marcus Johnso",
    session: 18,
    rating: 4.8,
    expertise: ["Python", "Data Science"]
  },
  {
    image: "",
    name: "Elena Rodriguez",
    session: 31,
    rating: 4.9,
    expertise: ["UI/UX Design", "Figma"]
  }
]


export const time = [
  "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM", "2:00 PM", "3:00 PM", " 4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM"
]

type ChatUser = {
  id: string;
  name: string;
  message: string;
  skills: string[];
  avatarColor: string; // optional if you want colored avatar placeholder
  lastActive: string;
  unreadCount: number;
};

export const chatUsers: ChatUser[] = [
  {
    id: '1',
    name: 'Alice Johnson',
    message: 'Hey! Can you help me with React state management?',
    skills: ['React', 'Redux'],
    avatarColor: 'bg-gray-400',
    lastActive: '2 mins ago',
    unreadCount: 2,
  },
  {
    id: '2',
    name: 'Bob Smith',
    message: 'Let’s schedule a session for backend API design.',
    skills: ['Node.js', 'Express'],
    avatarColor: 'bg-gray-500',
    lastActive: '5 mins ago',
    unreadCount: 0,
  },
  {
    id: '3',
    name: 'Clara Liu',
    message: 'Can you review my Figma layout?',
    skills: ['UI/UX Design', 'Figma'],
    avatarColor: 'bg-blue-300',
    lastActive: '10 mins ago',
    unreadCount: 1,
  },
  {
    id: '4',
    name: 'David Kim',
    message: 'I’m interested in learning about machine learning!',
    skills: ['Python', 'Machine Learning'],
    avatarColor: 'bg-green-400',
    lastActive: '20 mins ago',
    unreadCount: 3,
  },
];
