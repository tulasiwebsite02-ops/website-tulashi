import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "./components/Layout";
import { CartProvider } from "./lib/cart";
import Home from "./pages/Home";
import Books from "./pages/Books";
import NonFiction from "./pages/NonFiction";
import Fiction from "./pages/Fiction";
import Poetry from "./pages/Poetry";
import Translation from "./pages/Translation";
import Publications from "./pages/Publications";
import Blog from "./pages/Blog";
import BlogWrite from "./pages/BlogWrite";
import BlogPost from "./pages/BlogPost";
import Admin from "./pages/Admin";
import { AuthProvider } from "./lib/auth";
import Events from "./pages/Events";
import Media from "./pages/Media";
import Research from "./pages/Research";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ThankYou from "./pages/ThankYou";

function HashScroll() {
  const { hash, pathname } = useLocation();
  useEffect(() => {
    if (!hash) return;
    const id = hash.slice(1);
    const t = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 120);
    return () => window.clearTimeout(t);
  }, [hash, pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
      <CartProvider>
        <HashScroll />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<Books />} />
            <Route path="/non-fiction" element={<NonFiction />} />
            <Route path="/fiction" element={<Fiction />} />
            <Route path="/poetry" element={<Poetry />} />
            <Route path="/translation" element={<Translation />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin/write" element={<BlogWrite />} />
            <Route path="/admin/write/:id" element={<BlogWrite />} />
            <Route path="/blog/post/:id" element={<BlogPost />} />
            <Route path="/events" element={<Events />} />
            <Route path="/media" element={<Media />} />
            <Route path="/research" element={<Research />} />
            <Route path="/services" element={<Navigate to="/contact" replace />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Layout>
      </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
