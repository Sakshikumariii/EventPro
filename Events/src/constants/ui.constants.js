import {
  FaHome,
  FaUserCircle,
  FaBook,
  FaBriefcase,
  FaBlogger,
  FaImage,
  FaPhone,
} from "react-icons/fa";

export const navLinks = [
  { path: "/", label: "Home", icon: FaHome },
  { path: "/events", label: "Events", icon: FaBlogger },
  { path: "/booking", label: "Booking", icon: FaBook },
  { path: "/service", label: "Services", icon: FaBriefcase },
  { path: "/blog", label: "Blog", icon: FaBlogger },
  { path: "/gallery", label: "Gallery", icon: FaImage },
  { path: "/about", label: "About", icon: FaUserCircle },
  { path: "/contact", label: "Contact", icon: FaPhone },
];

export const FOOTER_SECTIONS = [
  {
    title: "Main",
    links: [
      { label: "Home", path: "/" },
      { label: "About", path: "/about" },
      { label: "Booking", path: "/booking" },
      { label: "Events", path: "/events" },
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
