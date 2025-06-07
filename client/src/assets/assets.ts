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
