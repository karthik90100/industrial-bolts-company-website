import AboutUs from "../components/home/aboutUs";
import ScrollingText from "../components/home/scrollingText";
import OurProducts from "../components/home/ourProducts";
import Industry from "../components/home/industry";
import IndustryExpertise from "../components/home/industryExpertise";
import EstemedClients from "../components/home/ourEstemedPartners";
import HeroOne from "../components/home/heroOne";
import ReviewCarousel from '../components/home/googleReview.jsx'
function Home() {
    return (
        <>
            <HeroOne />
            <ScrollingText />
            <AboutUs />
            <OurProducts />
            <Industry />
            <IndustryExpertise />
            <EstemedClients />
            <ReviewCarousel />
        </>

    );
}

export default Home;