import Hero from '../sections/Hero/Hero'
import TrustSection from '../sections/TrustSection/TrustSection';
import HowItWorksSection from '../sections/HowItWorksSection/HowItWorksSection';
import TopDestinationsSection from '../sections/TopDestinationsSection/TopDestinationsSection';
import PackagesSection from '../sections/PackagesSection/PackagesSection';
import SupportSection from '../sections/SupportSection/SupportSection';
import FooterLinks from '../sections/FooterLinks/FooterLinks';
import Footer from '../components/Footer/Footer';


export default function TirarVistoPage() {
  return (
    <main>

    <Hero />
    <TrustSection />
    <HowItWorksSection />
    <TopDestinationsSection />
    <PackagesSection />
    <SupportSection />
    <FooterLinks />
    <Footer />
    </main>
    
  )
}