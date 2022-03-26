import ContactSection from '../components/ContactSection';
import Hero from '../components/Hero';
import MainSection from '../components/MainSection';
import CardSection from '../components/CardSection';
import ProjectsSection from '../components/ProjectsSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <MainSection />
      <CardSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </>
  );
}
