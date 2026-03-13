import PageOne from "../components/blog-page-details/page-one";
import PageTwo from "../components/blog-page-details/page-two";
import PageThree from "../components/blog-page-details/page-three";
import PageFour from "../components/blog-page-details/page-four";
import PageFive from "../components/blog-page-details/page-five";
import PageSix from "../components/blog-page-details/page-six";
import PageSeven from "../components/blog-page-details/page-seven";
import PageEight from "../components/blog-page-details/page-eigth";
import PageNine from "../components/blog-page-details/page-nine";
import { useParams } from "react-router-dom";
const blogPages = {
    "gi-sag-rod-price-guide": PageOne,
    "l-type-foundation-bolt-manufacturer": PageTwo,
    "bevel-washer-supplier-chennai": PageThree,
    "foundation-bolt-selection-mistakes": PageFour,
    "hillside-washer-chennai": PageFive,
    "light-pole-foundation-bolts": PageSix,
    "l-type-foundation-bolts-guide": PageSeven,
    "j-type-foundation-bolts": PageEight,
    "j-type-foundation-bolts-india": PageNine,
};
function BlogDeatilsPage() {
    const { slug } = useParams();

    const BlogComponent = blogPages[slug];

    if (!BlogComponent) {
        return <h1>Blog not found</h1>;
    }
    console.log("slug:", slug);
    console.log("blogPages:", blogPages);
    return <BlogComponent />;

}

export default BlogDeatilsPage
