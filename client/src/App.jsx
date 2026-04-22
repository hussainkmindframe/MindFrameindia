/**
 * Main App Component
 * Sets up routing and global layout
 */

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { useAuthStore } from "./utils/authStore";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import SingleBlog from "./pages/SingleBlog";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminPages/Dashboard";
import AdminBlogManagement from "./pages/AdminPages/BlogManagement";
import AdminAddBlog from "./pages/AdminPages/AddBlog";
import AdminContactManagement from "./pages/AdminPages/ContactManagement";
import OurWork from "./pages/OurWork";
import Testimonial from "./pages/Testimonial";
import NewsRoom from "./pages/NewsRoom";
import WebDevelopment from "./pages/Webdevelopment";
import MobileAppDevelopment from "./pages/MobileAppDevelopment";
import BrandingIdentity from "./pages/BrandingIdentity";
import BrandServices from "./pages/BrandServices";
import AboveTheLine from "./pages/Abovetheline";
import BelowTheLine from "./pages/BelowTheLine";
import MediaBuying from "./pages/MediaBuying";
import PublicRelation from "./pages/PublicRelation";
import DigitalMarketing from "./pages/DigitalMarketing";
import MarketingAndBranding from "./pages/MarketingAndBranding";
import CustomizedCampaignDesign from "./pages/CustomizedCampaignDesign";
import AdvertisingServices from "./pages/AdvertisingServices";
import Careers from "./pages/Careers";
import OurTeam from "./pages/OurTeam";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Creativedesign from "./pages/Creativedesign";
import AugmentedReality from "./pages/Augmentedreality";
import Animation  from "./pages/Animation";
import Television from "./pages/Television";


// Layout component for public pages (with header and footer)
function PublicLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  const { checkAuth } = useAuthStore();

  // Check authentication status on app load
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  return (
    <Router>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: "#363636",
            color: "#fff",
          },
          success: {
            style: {
              background: "#10b981",
            },
          },
          error: {
            style: {
              background: "#ef4444",
            },
          },
        }}
      />

      <Routes>
        {/* Public Routes */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:id" element={<SingleBlog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/work" element={<OurWork />} />
          <Route path="/testimonials" element={<Testimonial />} />
          <Route path="/News" element={<NewsRoom />} />
          <Route
            path="/services/web-development"
            element={<WebDevelopment />}
          />
          <Route
            path="/services/app-development"
            element={<MobileAppDevelopment />}
          />

          <Route
            path="/services/brand-identity"
            element={<BrandingIdentity />}
          />
          <Route path="/services/brand-services" element={<BrandServices />} />

          <Route path="/services/atl" element={<AboveTheLine />} />
          <Route path="/services/btl" element={<BelowTheLine />} />
          <Route path="/services/media-buying" element={<MediaBuying />} />
          <Route
            path="/services/public-realations"
            element={<PublicRelation />}
          />
          <Route
            path="/services/digital-marketing"
            element={<DigitalMarketing />}
          />
          <Route
            path="/services/marketing-branding"
            element={<MarketingAndBranding />}
          />
          <Route
            path="/services/customize-campaign"
            element={<CustomizedCampaignDesign />}
          />

               <Route
            path="/services/advertizing-services"
            element={<AdvertisingServices/>}
          />


  <Route
            path="/careers"
            element={<Careers/>}
          />


           <Route
            path="/team"
            element={<OurTeam/>}
          />


           <Route
            path="/privacy"
            element={<PrivacyPolicy/>}
          />

          
           <Route
            path="/services/creative-design"
            element={<Creativedesign/>}
          />


           <Route
            path="/services/augumented-reality"
            element={<AugmentedReality/>}
          />

           <Route
            path="/services/creative/animation-videos"
            element={<Animation/>}
          />


   <Route
            path="/services/creative/best-television-advertising-agency"
            element={<Television/>}
          />

        </Route>

        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/blogs"
          element={
            <ProtectedRoute>
              <AdminBlogManagement />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/blogs/add"
          element={
            <ProtectedRoute>
              <AdminAddBlog />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/contacts"
          element={
            <ProtectedRoute>
              <AdminContactManagement />
            </ProtectedRoute>
          }
        />

        {/* Catch all */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
