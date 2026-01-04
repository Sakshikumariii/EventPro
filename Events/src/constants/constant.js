import {
  FaHome,
  FaUserCircle,
  FaBook,
  FaMoneyBillWave,
  FaBriefcase,
  FaBlogger,
  FaImage,
  FaPhone,
} from "react-icons/fa";

export const navLinks = [
  { path: "/", label: "Home", icon: FaHome },
  { path: "/events", label: "Events", icon: FaBlogger },
  { path: "/booking", label: "Booking", icon: FaBook },
  { path: "/pricing", label: "Pricing", icon: FaMoneyBillWave },
  { path: "/service", label: "Services", icon: FaBriefcase },
  { path: "/blog", label: "Blog", icon: FaBlogger },
  { path: "/gallery", label: "Gallery", icon: FaImage },
  { path: "/about", label: "About", icon: FaUserCircle },
  { path: "/contact", label: "Contact", icon: FaPhone },
];

export const HOME_TEXT = {
  title: "Welcome to Event World",
  buttonText: "Book Now",
};

export const ABOUT_TEXT = {
  title: "About",
  highlight: "Us",
  description:
    " Event management is a process of organizing a professional and focused event for a particular target audience.It involves visualizing concepts, planning, budgeting, organizing, and executing events such as weddings, musical concerts, corporate seminars, exhibitions, birthday celebrations, theme parties, etc. Event Management is a multi-million-dollar industry, growing rapidly, with events hosted regularly. ",
};

export const CONTACT_INFO = {
  address: "123 Event Street, Bangalore, India",
  email: "contact@eventmanagement.com",
  phone: "+91 9876543210",
};

export const EVENT_NAMES = [
  "Music Festival",
  "Tech Conference",
  "Art Exhibition",
  "Food Fair",
  "Sports Tournament",
  "Fashion Show",
  "Book Fair",
  "Film Festival",
  "Comic Con",
  "Trade Expo",
  "Craft Fair",
  "Cultural Festival",
  "Science Fair",
  "Gaming Expo",
  "Health Expo",
  "Automobile Expo",
  "Music Concert",
  "Dance Competition",
  "Job Fair",
  "Education Expo",
];

export const INDIAN_STATES = [
  "Andaman and Nicobar Islands",
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chandigarh",
  "Chhattisgarh",
  "Delhi",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Tamil Nadu",
  "Telangana",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];

import img1 from "../assets/blog1.png";
import img2 from "../assets/blog2.png";
import img3 from "../assets/blog3.png";

export const BLOGS = [
  {
    id: 1,
    image: img1,
    title: "Important things to keep in mind before booking mehendi artist",
    description:
      "Important things to keep in mind before booking mehendi artist - looking for the best bridal mehendi artist in India.",
  },
  {
    id: 2,
    image: img2,
    title: "Important things to keep in mind before booking mehendi artist",
    description:
      "Important things to keep in mind before booking mehendi artist - looking for the best bridal mehendi artist in India.",
  },
  {
    id: 3,
    image: img3,
    title: "Important things to keep in mind before booking mehendi artist",
    description:
      "Important things to keep in mind before booking mehendi artist - looking for the best bridal mehendi artist in India.",
  },
];
import image1 from "../assets/1.png";
import image2 from "../assets/2.png";
import image3 from "../assets/3.png";
import image4 from "../assets/4.png";
import image5 from "../assets/5.png";
import image6 from "../assets/6.png";
import image7 from "../assets/7.png";
import image8 from "../assets/8.png";
import image9 from "../assets/9.png";
import image10 from "../assets/10.png";
import image11 from "../assets/11.png";
import image12 from "../assets/12.png";

export const GALLERY_IMAGES = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
];

import price1 from "../assets/price1.png";
import price2 from "../assets/price2.png";
import price3 from "../assets/price3.png";
import price4 from "../assets/price4.png";
import price5 from "../assets/price5.png";
import price6 from "../assets/price6.png";

export const PRICING_LIST = [
  {
    id: 1,
    image: price1,
    title: "Destination Wedding",
    description:
      "A great wedding venue can help make your wedding fantasy come to life. The costs may soar high as soon as the word ‘luxury’ comes into play. But as the saying goes, you do get what you pay for luxury Hotel make wedding fantasy and that is luxury at its best.",
    price: "₹80,000 - ₹2,00,000",
  },
  {
    id: 2,
    image: price2,
    title: "Corporate Event",
    description:
      "Corporate event planning is the process of organizing and coordinating various events for businesses, product launches, company meetings, and organizations.",
    price: "₹80,000 - ₹2,00,000",
  },
  {
    id: 3,
    image: price3,
    title: "VIP Events",
    description:
      "VIP events are very different from formal event arrangements. These events are organized for special guests or chief guests with premium arrangements.",
    price: "₹80,000 - ₹2,00,000",
  },
  {
    id: 4,
    image: price4,
    title: "Cultural Events",
    description:
      "Cultural activities bring out the creative side of participants. These events include dance, theatre, drama, and many cultural programs.",
    price: "₹80,000 - ₹2,00,000",
  },
  {
    id: 5,
    image: price5,
    title: "Product Launch",
    description:
      "Product launch events help brands create awareness, generate buzz, and drive sales for newly launched products.",
    price: "₹80,000 - ₹2,00,000",
  },
  {
    id: 6,
    image: price6,
    title: "Birthday Event",
    description:
      "We offer the best-grade birthday event management with affordable pricing, ensuring a memorable celebration.",
    price: "₹80,000 - ₹2,00,000",
  },
];
export const SERVICES = [
  {
    id: 1,
    icon: "fas fa-hotel",
    title: "Affordable Resort",
    description:
      "Escape to budget-friendly resorts for a relaxing retreat. Enjoy comfort, serenity, and memorable stays without worrying about your budget.",
    link: "restaurant",
  },
  {
    id: 2,
    icon: "fas fa-video-camera",
    title: "Decoration Available",
    description:
      "Discover elegant and stylish decorations to enhance your events and spaces, making them welcoming and beautiful.",
    link: "decoration",
  },
  {
    id: 3,
    icon: "fas fa-utensils",
    title: "Dishes Available",
    description:
      "Explore a wide variety of delicious dishes, from classic favorites to exotic flavors, perfect for every occasion.",
    link: "dish",
  },
  {
    id: 4,
    icon: "fas fa-automobile",
    title: "Car Services Booking",
    description:
      "Book reliable car services easily. From maintenance to repairs, keep your vehicle running smoothly.",
    link: "royal",
  },
  {
    id: 5,
    icon: "fa fa-plane",
    title: "Airplane Services",
    description:
      "Access trusted airplane services including ticket booking and flight management for a smooth travel experience.",
    link: "airplane",
  },
  {
    id: 6,
    icon: "fas fa-comment-dollar",
    title: "Finance Provide",
    description:
      "Get expert financial guidance, from investment planning to loan management, tailored to your needs.",
    link: "finance",
  },
];

import dec1 from "../assets/dec1.png";
import dec2 from "../assets/dec2.png";
import dec3 from "../assets/dec3.png";
import dec4 from "../assets/dec4.png";
import dec5 from "../assets/dec5.png";
import dec6 from "../assets/dec6.png";

export const DECORATIONS = [
  {
    id: 1,
    image: dec1,
    title: "Wedding Stage Decoration",
    description:
      "Create an enchanting stage for your wedding or event. The stage is the focal point where memories are captured.",
  },
  {
    id: 2,
    image: dec2,
    title: "Organized Decor Setup",
    description:
      "Choosing a venue and altering it to match your event theme is crucial. We collaborate to perfect your space.",
  },
  {
    id: 3,
    image: dec3,
    title: "Elegant Event Decoration",
    description:
      "Our decorations enhance the venue ambiance and create a grand and memorable experience.",
  },
  {
    id: 4,
    image: dec4,
    title: "Table Setting for Events",
    description:
      "A well-designed table setting enhances the event’s aesthetics and complements the ambiance.",
  },
  {
    id: 5,
    image: dec5,
    title: "Product Launch Decor",
    description:
      "Make your product launch unforgettable with immersive decor and unique branding experiences.",
  },
  {
    id: 6,
    image: dec6,
    title: "Special Event Decorations",
    description:
      "We provide custom decorations tailored to your preferences for all special occasions.",
  },
];
import dis1 from "../assets/dis1.png";
import dis2 from "../assets/dis2.png";
import dis3 from "../assets/dis3.png";
import dis4 from "../assets/dis4.jpg";
import dis5 from "../assets/dis5.png";
import dis6 from "../assets/dis6.png";

export const DISHES = [
  {
    id: 1,
    image: dis1,
    title: "All Special Vegetable Recipes",
    description:
      "Delight in a variety of vegetarian dishes that showcase the richness of Indian cuisine.",
  },
  {
    id: 2,
    image: dis2,
    title: "Desi, Rustic Inspiration (Beverage Counters)",
    description:
      "Add a whimsical touch with rustic-inspired beverage counters using elements like straw and bamboo.",
  },
  {
    id: 3,
    image: dis3,
    title: "Latest Indian Wedding Food",
    description:
      "Stay ahead with contemporary dishes that put a fresh take on traditional Indian flavors.",
  },
  {
    id: 4,
    image: dis4,
    title: "All Dishes Non-Veg and Veg",
    description:
      "Enjoy a variety of trending finger foods, perfect for weddings and celebrations.",
  },
  {
    id: 5,
    image: dis5,
    title: "Wedding Special Recipes in Rajasthan",
    description:
      "Experience authentic Rajasthani dishes that showcase bold flavors and royal traditions.",
  },
  {
    id: 6,
    image: dis6,
    title: "Kerala Wedding Sadhya: The Making",
    description:
      "Taste the elegance of Kerala’s traditional Sadhya feast, served on banana leaves.",
  },
];

import res1 from "../assets/res1.png";
import res2 from "../assets/res2.png";
import res3 from "../assets/res3.png";
import res4 from "../assets/res4.png";
import res5 from "../assets/res5.png";
import res6 from "../assets/res6.png";

export const RESTAURANTS = [
  {
    id: 1,
    image: res1,
    title: "The Corinthians Resort",
    description:
      "The Corinthians is a five-star hotel located on the verdant hilltop of South Pune with luxurious rooms and suites designed in Moroccan architecture.",
  },
  {
    id: 2,
    image: res2,
    title: "Pride Amber Villas Resort",
    description:
      "Experience royal treatment in Jaipur with luxurious villas and unforgettable destination wedding arrangements.",
  },
  {
    id: 3,
    image: res3,
    title: "Best Resorts for Weddings",
    description:
      "Discover handpicked boutique resorts perfect for destination weddings with stunning views and premium services.",
  },
  {
    id: 4,
    image: res4,
    title: "Luxury Weddings in Delhi",
    description:
      "Explore breathtaking wedding venues in Delhi that make your special day grand and unforgettable.",
  },
  {
    id: 5,
    image: res5,
    title: "Suryagarh Fort, Jaisalmer",
    description:
      "A royal fort hotel overlooking the Thar Desert, offering a fairy-tale wedding experience.",
  },
  {
    id: 6,
    image: res6,
    title: "Chomu Palace, Rajasthan",
    description:
      "A 300-year-old palace hotel reflecting the grandeur of royal Rajasthan.",
  },
];

export const FOOTER_SECTIONS = [
  {
    title: "Main",
    links: [
      { label: "Home", path: "/" },
      { label: "About", path: "/about" },
      { label: "Booking", path: "/booking" },
      { label: "Pricing", path: "/pricing" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Resort", path: "/service/restaurant" },
      { label: "Decoration", path: "/service/decoration" },
      { label: "Catering", path: "/service/dish" },
    ],
  },
  {
    title: "Explore",
    links: [
      { label: "Blog", path: "/blog" },
      { label: "Gallery", path: "/gallery" },
      { label: "Contact", path: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", path: "#" },
      { label: "Terms & Conditions", path: "#" },
    ],
  },
];

export const FOOTER_COPYRIGHT = "All rights reserved.";
