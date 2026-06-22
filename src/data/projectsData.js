// src/data/projectsData.js

// ====== COVER IMAGES ======
import coverRuthStore from "../assets/projects/chat-app.jpg";
import coverTaskManagement from "../assets/projects/inventoryApp1.jpg";
import coverMarketplace from "../assets/projects/portfolio66.jpg";
import coverDoctor from "../assets/projects/social-app.jpg";
import coverChat from "../assets/projects/chatApp1.jpg";
import coverMovie from "../assets/projects/2mernBlogee.jpg";

// ====== RUTH STORE SCREENSHOTS ======
import ruth01 from "../assets/projects/screens/amazon/01-overview.jpg";
import ruth02 from "../assets/projects/screens/amazon/02-product.jpg";
import ruth03 from "../assets/projects/screens/amazon/03-cart.jpg";
import ruth04 from "../assets/projects/screens/amazon/04-checkout.jpg";

// ====== TASK MANAGEMENT SCREENSHOTS ======
import task01 from "../assets/projects/screens/crm/01-dashboard.jpg";
import task02 from "../assets/projects/screens/crm/02-customers.jpg";
import task03 from "../assets/projects/screens/crm/03-pipeline.jpg";
import task04 from "../assets/projects/screens/crm/04-lead-detail.jpg";

// ====== MARKETPLACE SCREENSHOTS ======
import market01 from "../assets/projects/screens/marketplace/01-overview.jpg";
import market02 from "../assets/projects/screens/marketplace/02-vendor-signup.jpg";
import market03 from "../assets/projects/screens/marketplace/03-vendor-dashboard.jpg";
import market04 from "../assets/projects/screens/marketplace/04-product-create.jpg";

// ====== DOCTOR SCREENSHOTS ======
import doc01 from "../assets/projects/screens/doctor/01-home.jpg";
import doc02 from "../assets/projects/screens/doctor/02-doctors.jpg";
import doc03 from "../assets/projects/screens/doctor/03-doctor-profile.jpg";
import doc04 from "../assets/projects/screens/doctor/04-booking.jpg";

// ====== CHAT SCREENSHOTS ======
import chat01 from "../assets/projects/screens/support-chat/01-login.jpg";
import chat02 from "../assets/projects/screens/support-chat/02-chat-list.jpg";
import chat03 from "../assets/projects/screens/support-chat/03-chat-room.jpg";
import chat04 from "../assets/projects/screens/support-chat/04-typing-status.jpg";

// ====== MOVIE SCREENSHOTS ======
import movie01 from "../assets/projects/screens/movie/01-home.jpg";
import movie02 from "../assets/projects/screens/movie/02-search.jpg";
import movie03 from "../assets/projects/screens/movie/03-category.jpg";
import movie04 from "../assets/projects/screens/movie/04-details.jpg";

const LIVE_URL = "https://ruth-store-7.vercel.app/";
const GITHUB_URL = "https://github.com/haileyesus3126/Ruth-Store-7";

const slugify = (text) =>
  text
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

export const PROJECTS = [
  {
    title: "Ruth Store E-Commerce",
    slug: slugify("Ruth Store E-Commerce"),
    desc:
      "A full-stack MERN e-commerce platform for gifts, greeting cards, keepsakes, and special occasion products.",
    image: coverRuthStore,
    live: LIVE_URL,
    code: GITHUB_URL,
    technologies: [
      "React",
      "React Router",
      "Context API",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Multer",
    ],
    features: [
      "User Authentication",
      "Product Management",
      "Shopping Cart",
      "Wishlist",
      "Checkout",
      "Order Management",
      "Admin Dashboard",
      "Image Upload",
      "Responsive Design",
    ],
    screenshots: [ruth01, ruth02, ruth03, ruth04],
  },

  {
    title: "Task Management System",
    slug: slugify("Task Management System"),
    desc:
      "A full-stack task management system for creating, assigning, tracking, and reviewing team tasks.",
    image: coverTaskManagement,
    live: LIVE_URL,
    code: GITHUB_URL,
    technologies: [
      "React",
      "React Router",
      "Context API",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Multer",
    ],
    features: [
      "User Authentication",
      "Role-Based Access",
      "Task Creation",
      "Task Assignment",
      "Progress Tracking",
      "File Uploads",
      "Comments",
      "Dashboard Statistics",
      "Responsive Design",
    ],
    screenshots: [task01, task02, task03, task04],
  },

{
    title: "Ruth Books Library",
    slug: slugify("Ruth Books Library"),
    desc:
      "A free digital library website for readers in Ethiopia. Users can log in, search by category, and download PDF books easily.",
    image: coverMarketplace,
    live: LIVE_URL,
    code: GITHUB_URL,
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "JWT"],
    features: [
      "User Authentication",
      "Category Filter",
      "Advanced Book Search",
      "Instant PDF Download",
      "Book Upload Tool",
      "Admin Book Approval",
      "Responsive Design",
    ],
    screenshots: [market01, market02, market03, market04],
  },

  {
    title: "Doctor Appointment System",
    slug: slugify("Doctor Appointment System"),
    desc:
      "A healthcare appointment booking platform where patients can search doctors and book appointments.",
    image: coverDoctor,
    live: LIVE_URL,
    code: GITHUB_URL,
    technologies: ["React", "Node.js", "Express.js", "MongoDB"],
    features: [
      "Doctor Listing",
      "Doctor Profile",
      "Appointment Booking",
      "User Accounts",
      "Appointment History",
      "Doctor Dashboard",
      "Responsive Design",
    ],
    screenshots: [doc01, doc02, doc03, doc04],
  },

  {
    title: "Real-Time Chat Application",
    slug: slugify("Real-Time Chat Application"),
    desc:
      "A real-time messaging application for private conversations and support chat.",
    image: coverChat,
    live: LIVE_URL,
    code: GITHUB_URL,
    technologies: ["React", "Socket.IO", "Node.js", "Express.js", "MongoDB"],
    features: [
      "Real-Time Messaging",
      "Private Chat",
      "Online Status",
      "Typing Indicators",
      "Chat History",
      "User Authentication",
      "Responsive UI",
    ],
    screenshots: [chat01, chat02, chat03, chat04],
  },

  {
    title: "Movie Application",
    slug: slugify("Movie Application"),
    desc:
      "A movie discovery platform where users can browse movies, search by title, and view movie details.",
    image: coverMovie,
    live: LIVE_URL,
    code: GITHUB_URL,
    technologies: ["React", "JavaScript", "REST API", "CSS"],
    features: [
      "Movie Search",
      "Category Browsing",
      "Movie Details",
      "Trailer Section",
      "Favorites",
      "Responsive Design",
    ],
    screenshots: [movie01, movie02, movie03, movie04],
  },
];

export const getProjectBySlug = (slug) =>
  PROJECTS.find((project) => project.slug === slug);