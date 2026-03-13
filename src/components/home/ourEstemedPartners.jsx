import pc1 from '../../assets/home_page_imgs/estemedClients/1.webp';
import pc2 from '../../assets/home_page_imgs/estemedClients/2.webp';
import pc3 from '../../assets/home_page_imgs/estemedClients/3.webp';
import pc4 from '../../assets/home_page_imgs/estemedClients/4.webp';
import pc5 from '../../assets/home_page_imgs/estemedClients/5.webp';
import pc6 from '../../assets/home_page_imgs/estemedClients/6.webp';
import pc7 from '../../assets/home_page_imgs/estemedClients/7.webp';
import pc8 from '../../assets/home_page_imgs/estemedClients/8.webp';
import pc9 from '../../assets/home_page_imgs/estemedClients/9.webp';
import pc10 from '../../assets/home_page_imgs/estemedClients/10.webp';
import pc11 from '../../assets/home_page_imgs/estemedClients/11.webp';
import pc12 from '../../assets/home_page_imgs/estemedClients/12.webp';
import pc13 from '../../assets/home_page_imgs/estemedClients/13.webp';
import pc14 from '../../assets/home_page_imgs/estemedClients/14.webp';
import pc15 from '../../assets/home_page_imgs/estemedClients/15.webp';
import pc16 from '../../assets/home_page_imgs/estemedClients/16.webp';
import pc17 from '../../assets/home_page_imgs/estemedClients/17.webp';
import pc18 from '../../assets/home_page_imgs/estemedClients/18.png';
import pc19 from '../../assets/home_page_imgs/estemedClients/19.png';
import pc20 from '../../assets/home_page_imgs/estemedClients/20.png';


const logos = [pc1, pc2, pc3, pc4, pc5,
    pc6, pc7, pc8, pc9, pc10,
    pc11, pc12, pc13, pc14, pc15,
    pc16, pc17, pc18, pc19, pc20,];

function EstemedClients() {
    return (
        <section className="py-20 bg-white">

            {/* Heading */}
            <h2 className="text-center text-[#0B1F3B] text-4xl font-bold mb-16">
                Our Esteemed Clients
            </h2>

            {/* Main centered container */}
            <div className="max-w-5xl mx-auto overflow-hidden">

                {/* Scrolling logos */}
                <div className="flex w-max gap-10 clients-scroll">

                    {[...logos, ...logos].map((logo, index) => (
                        <div
                            key={index}
                            className="min-w-40 h-30 border border-[#0B1F3B] rounded-lg flex items-center justify-center bg-white"
                        >
                            <img
                                src={logo}
                                alt="client logo"
                                className="max-h-16 object-contain"
                            />
                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
}

export default EstemedClients;