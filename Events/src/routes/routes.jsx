import { createBrowserRouter, Navigate } from "react-router-dom";
import LandingPage from "../components/layout/LandingPage";
import Booking from "../pages/Booking/Booking";
import Price from "../pages/Price/Price";
import Blog from "../pages/Blog/Blog";
import Gallery from "../pages/Gallery/Gallery";
import About from "../pages/Home/About";
import Contact from "../pages/Contact/Contact";
import ServiceLayout from "../pages/Services/ServiceLayout";
import Service from "../pages/Services/Service";
import Restaurant from "../pages/Services/Restaurant";
import Dish from "../pages/Services/Dish";
import Decoration from "../pages/Services/Decoration";
import Layout from "../components/layout/Layout";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import ProtectedRoute from "../components/auth/ProtectedRoute";
import Events from "../pages/Events/Events";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <LandingPage /> },

      // ✅ Public routes
      { path: "about", element: <About /> },
      { path: "events", element: <Events /> },
      { path: "pricing", element: <Price /> },
      { path: "blog", element: <Blog /> },
      { path: "gallery", element: <Gallery /> },
      { path: "contact", element: <Contact /> },

      // 🔒 Protected route
      {
        path: "booking",
        element: (
          <ProtectedRoute>
            <Booking />
          </ProtectedRoute>
        ),
      },

      // ✅ Public nested routes
      {
        path: "service",
        element: <ServiceLayout />,
        children: [
          { index: true, element: <Service /> },
          { path: "restaurant", element: <Restaurant /> },
          { path: "decoration", element: <Decoration /> },
          { path: "dish", element: <Dish /> },
        ],
      },
    ],
  },

  // ✅ Auth routes
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },

  // ✅ Fallback
  { path: "*", element: <Navigate to="/" replace /> },
]);

export default router;
