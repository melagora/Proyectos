import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import useDarkMode from "./hooks/useDarkMode";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import PageLoader from "./components/PageLoader";

const Home = lazy(() => import("./pages/Home"));
const Products = lazy(() => import("./pages/Products"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  const { theme, toggleTheme } = useDarkMode();

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#111111] transition-colors duration-500">
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <ScrollToTop />

      <main className="flex-1 container mx-auto p-6">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<Products />} />
            <Route path="/nosotros" element={<About />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}

export default App;
