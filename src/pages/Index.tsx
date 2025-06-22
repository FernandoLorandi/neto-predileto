import Header from "@/components/Header.tsx";
import Hero from "@/components/Hero.tsx";
import Footer from "@/components/Footer.tsx";
import Contact from "@/components/Contact.tsx";
import About from "@/components/About.tsx";
import Services from "@/components/Services.tsx";
import Testimonials from "@/components/Testimonials.tsx";
import Pricing from "@/components/Pricing.tsx";

const Index = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
            <Header />
            <div className="pt-16"> {/* Add padding-top to account for fixed header */}
                <Hero />
                <About />
                <Services />
                <Testimonials />
                <Pricing />
                <Contact />
                <Footer />
            </div>
        </div>
    );
};

export default Index;
