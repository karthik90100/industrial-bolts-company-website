import WhoWeAre from '../components/about-us/who-we-are.jsx';
import ThreeGenerations from '../components/about-us/three-generations.jsx';
import WhyChooseUs from '../components/about-us/why-to-choose.jsx'
import OurJourney from '../components/about-us/our-journey.jsx';
import QualityPolicy from '../components/about-us/quality-products.jsx';
import HeroTwo from '../components/heroTwo.jsx';
function AboutUs() {
    return (
        <div>
            <HeroTwo />
            <WhoWeAre />
            <ThreeGenerations />
            <WhyChooseUs />
            <OurJourney />
            <QualityPolicy />
        </div>
    )
}

export default AboutUs;
