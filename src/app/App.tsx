import { Header } from '@/app/components/Header';
import { Hero } from '@/app/components/Hero';
import { About } from '@/app/components/About';
import { SocialMediaExperience } from '@/app/components/SocialMediaExperience';
import { Projects } from '@/app/components/Projects';
import { Contact } from '@/app/components/Contact';
import { Footer } from '@/app/components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <SocialMediaExperience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
