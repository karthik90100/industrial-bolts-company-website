import FastenersHero from '../components/fasteners/fasteners-hero.jsx';
import WhyChooseUs from '../components/fasteners/why-choose-us.jsx';
import ProductRange from '../components/fasteners/our-product-range.jsx'
import QualityAssurance from '../components/fasteners/quality-assurance.jsx'
import Industry from '../components/home/industry.jsx'
import PartnerWithUs from '../components/fasteners/partner-with-us.jsx'
import ContactSection from '../components/fasteners/contact-section.jsx'
import HeroTwo from '../components/heroTwo.jsx';
function Fasteners() {
    return (
        <div>
            <HeroTwo/>
            <FastenersHero />
            <WhyChooseUs />
            <ProductRange />
            <QualityAssurance />
            <Industry />
            <PartnerWithUs />
            <ContactSection />
        </div>
    )
}

export default Fasteners
