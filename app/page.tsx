import HeroSection from '@/components/home/HeroSection'
import AboutSection from '@/components/home/AboutSection'
import TechStackSection from '@/components/home/TechStackSection'
import ProjectsSection from '@/components/home/ProjectsSection'
import ContactSection from '@/components/home/ContactSection'

export default function HomePage() {
    return (
        <>
            <HeroSection />
            <AboutSection />
            <TechStackSection />
            <ProjectsSection />
            <ContactSection />
        </>
    )
}
