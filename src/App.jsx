import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { LoadingScreen } from './Sections/LoadingScreen';
import { StarBackground } from './Sections/StarBackground';
import { Navbar } from './Sections/Navbar';
import { ScrollProgress } from './Sections/ScrollProgress';
import { Hero } from './Sections/Hero';
import { About } from './Sections/About';
import { Skills } from './Sections/Skills';
import { Projects } from './Sections/Projects';
import { Testimonials } from './Sections/Testimonials';
import { Services } from './Sections/Services';
import { Footer } from './Sections/Footer';
import CustomCursor  from './Components/CustomCursor';
import { BackToTop } from './Sections/BackToTop';
import { ContactSection } from './Sections/ContactSection';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Add dark mode class to document
    document.documentElement.classList.add('dark');
    
    // Prevent scroll during loading
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isLoading]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <div className="relative min-h-screen text-white">
          {/* Custom Cursor */}
          <CustomCursor />

          {/* Scroll Progress */}
          <ScrollProgress />

          {/* Star Background */}
          <StarBackground />

          {/* Navigation */}
          <Navbar />

          {/* Main Content */}
          <main className="relative z-10">
            <Hero />
            <About />
            <Skills />
            <Projects />
            {/* <Testimonials /> */}
            <Services />
            <ContactSection/>
          </main>

          {/* Footer */}
          <Footer />

          {/* Back to Top */}
          <BackToTop />
        </div>
      )}
    </>
  );
}