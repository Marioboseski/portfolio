import JobFinderImg from "../assets/JobFinder-Img.png";
import JobFinderProfile from "../assets/JobFinder-Profile-Img.png";
import JobFinderBookmarks from "../assets/JobFinder-Bookmarks-Img.png";

const projectsData = [
  {
    slug: "job-finder-app",
    title: "Job Finder Platform",
    image: JobFinderImg,
    tags: ["Web App", "Mobile", "JobFinder"],
    shortDescription: "Find jobs, connect with people",
    longDescription: "A full-stack job search platform that allows users to login and then search, save and menage job listings with a clean and intuitive UI",
    gallery: [JobFinderImg, JobFinderProfile, JobFinderBookmarks],
    features: ["Fully Responsive", "Clean UI", "Easy to use"],
    liveUrl: "https://marioboseski.github.io/job-finder-app-react/",
    githubUrl: "https://github.com/Marioboseski/job-finder-app-react.git",
    liveLabel: "Job Finder App",
    githubLabel: "Github Repository",
    stack: ["HTML", "CSS", "JavaScript", "React"],
  },

  {
    slug: "personal-finance-tracker",
    title: "Personal Finance Tracker",
    shortDescription: "Calculate incomes and expenses, track balance",
    longDescription: "Web app that is used to track incomes and expeneses. Calculate balance. Added incomes and expenses are saved in the app. Fully responsive Web-app and easy to use.  ",
    image: JobFinderImg,
    tags: ["Web App", "Mobile", "Finance"],
    gallery: [JobFinderImg, JobFinderProfile, JobFinderBookmarks],
    features: ["Clean UI", "Calculation", "Balance"],
    liveUrl: "https://marioboseski.github.io/Personal-Finance-Tracker/",
    githubUrl: "https://github.com/Marioboseski/Personal-Finance-Tracker.git",
    liveLabel: "Personal Finance Tracker",
    githubLabel: "Github Repository",
    stack: ["JavaScript", "HTML", "CSS"],
  },

  {
    slug: "country-info-app",
    title: "County Info App",
    shortDescription: "Fetches real-time data, displays informations",
    longDescription: "Web app that fetches real-time data about the entered country and displays informations. Fully responsive and fast application",
    image: JobFinderImg,
    tags: ["Web App", "Mobile", "API"],
    gallery: [JobFinderImg, JobFinderProfile, JobFinderBookmarks],
    features: ["Clean UI", "CountryApp", "Search"],
    liveUrl: "https://marioboseski.github.io/Country-Info-App/",
    githubUrl: "https://github.com/Marioboseski/Country-Info-App.git",
    liveLabel: "Country info App",
    githubLabel: "Github Repository",
    stack: ["JavaScript", "HTML", "CSS"],
  }

];

export default projectsData;
