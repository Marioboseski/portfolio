import SocialMediaImg from "../assets/social-media.png";
import SocialMediaExpl from "../assets/social-media-expl.png";
import SocialMediaMess from "../assets/social-media-mess.png";
import SocialMediaProf from "../assets/social-media-prof.png";
import ChatAppImg from "../assets/chat-app.png";
import ChatAppResp from "../assets/chat-app-resp.png";
import BankDashboard from "../assets/bank-dashboard.png";
import BankDeposit from "../assets/bank-deposit.png";
import BankProfile from "../assets/bank-profile.png";

const projectsData = [
  {
    slug: "social-media",
    title: "Social Media Platform",
    image: SocialMediaImg,
    tags: ["Modern", "Mobile", "SocialMedia"],
    shortDescription: "Find, chat, connect with people, see stories",
    longDescription: "Social media(instagram-like) built with React. Allow users to save and like posts, open stories and a lot more. The social media is fully responsive and modern web development practices are used.",
    gallery: [SocialMediaExpl, SocialMediaMess, SocialMediaProf],
    features: ["Fully Responsive", "Clean UI", "Modern design"],
    liveUrl: "https://marioboseski.github.io/social-media/",
    githubUrl: "https://github.com/Marioboseski/social-media.git",
    liveLabel: "Social Media",
    githubLabel: "Github Repository",
    stack: ["HTML", "CSS", "JavaScript", "React", "Tailwind"],
  },

  {
    slug: "chat-app",
    title: "Chat App",
    shortDescription: "join rooms together with a friend, chat and have fun",
    longDescription: "Real-time chat application that enables users to join chat rooms with username and communicate with other users in the same room. Real-time handling and showcasing practical full-stack development skills.",
    image: ChatAppImg,
    tags: ["Chat App", "Modern", "Full-Stack"],
    gallery: [ChatAppImg, ChatAppResp],
    features: ["Join", "Chat", "Fully responsive"],
    liveUrl: "https://chat-app-mario.netlify.app/",
    githubUrl: "https://github.com/Marioboseski/chat-app.git",
    liveLabel: "Chat App",
    githubLabel: "Github Repository",
    stack: ["TypeScript", "React", "Node.js", "Express", "Zustand", "Tailwind"],
  },

  {
    slug: "bank-dashboard",
    title: "Bank Platform",
    shortDescription: "Deposit money, pay bill, track transactions",
    longDescription: "Bank Platform - web application that help users to quickly menage transactions, deposit money, pay bill, track balance, see profile and easily navigate through the app. Fully responsive.",
    image: BankDashboard,
    tags: ["Web App", "Mobile", "Bank"],
    gallery: [BankDashboard, BankDeposit, BankProfile],
    features: ["Clean UI", "Track Balance", "Responsive"],
    liveUrl: "https://marioboseski.github.io/bank-dashboard/",
    githubUrl: "https://github.com/Marioboseski/bank-dashboard.git",
    liveLabel: "Bank Platform",
    githubLabel: "Github Repository",
    stack: ["JavaScript", "React", "Tailwind"],
  }

];

export default projectsData;
