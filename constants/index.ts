import { SidebarLink, TopQuestions, PopularTags } from "@/types";


export const themes = [
  { value: "light", label: "Light", icon: "/assets/icons/sun.svg" },
  { value: "dark", label: "Dark", icon: "/assets/icons/moon.svg" },
  { value: "system", label: "System", icon: "/assets/icons/computer.svg" },
];

export const sidebarLinks: SidebarLink[] = [
  {
    imgURL: "/assets/icons/home.svg",
    route: "/",
    label: "Home",
  },
  {
    imgURL: "/assets/icons/users.svg",
    route: "/community",
    label: "Community",
  },
  {
    imgURL: "/assets/icons/star.svg",
    route: "/collection",
    label: "Collections",
  },
  {
    imgURL: "/assets/icons/suitcase.svg",
    route: "/jobs",
    label: "Find Jobs",
  },
  {
    imgURL: "/assets/icons/tag.svg",
    route: "/tags",
    label: "Tags",
  },
  {
    imgURL: "/assets/icons/user.svg",
    route: "/profile",
    label: "Profile",
  },
  {
    imgURL: "/assets/icons/question.svg",
    route: "/ask-question",
    label: "Ask a question",
  },
];

export const BADGE_CRITERIA = {
  QUESTION_COUNT: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  ANSWER_COUNT: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  QUESTION_UPVOTES: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  ANSWER_UPVOTES: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  TOTAL_VIEWS: {
    BRONZE: 1000,
    SILVER: 10000,
    GOLD: 100000,
  },
};


export const topQuestions: TopQuestions[] = [
  {
    id: 1,
    question: "What is the best way to learn programming?",
    src: "/",
  },
  {
    id: 2,
    question: "How to become a full-stack developer?",
    src: "/",
  },
  {
    id: 3,
    question: "What is the best way to learn JavaScript?",
    src: "/",
  },
  {
    id: 4,
    question: "What is the best way to learn Python?",
    src: "/",
  },
];

export const popularTags: PopularTags[] = [
  {
    _id: '1',
    name: "javascript",
    totalQuestions: 100,
    showCount: true,
  },
  {
    _id: '2',
    name: "react",
    totalQuestions: 200,
    showCount: true,
  },
  {
    _id: '3',
    name: "nodejs",
    totalQuestions: 150,
    showCount: true,
  },
  {
    _id: '4',
    name: "python",
    totalQuestions: 300,
    showCount: true,
  },
  {
    _id: '5',
    name: "typescript",
    totalQuestions: 100,
    showCount: true,
  },
  {
    _id: '6',
    name: "nextjs",
    totalQuestions: 200,
    showCount: true,
  },
  {
    _id: '7',
    name: "vuejs",
    totalQuestions: 150,
    showCount: true,
  },
  {
    _id: '8',
    name: "angular",
    totalQuestions: 300,
    showCount: true,
  },
]