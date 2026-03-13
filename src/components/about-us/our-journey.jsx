import { motion } from 'framer-motion';

/* ───────────── timeline data ───────────── */
const timelineData = [
    {
        year: '2012',
        description:
            'Royal Anchors was conceived in 2012 by Johar Shakir and Ebrahim Haji with a vision to revolutionize the anchor bolt manufacturing industry in India.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
        ),
    },
    {
        year: '2013',
        description:
            'Even after being new in the industry, we secured the fully automated coal terminal project, proving our engineering capabilities on a national stage.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
        ),
    },
    {
        year: '2015',
        description:
            'Expanded operations with a state-of-the-art manufacturing facility, quadrupling production capacity and setting new quality benchmarks.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
        ),
    },
    {
        year: '2017',
        description:
            'Received ISO 9001:2015 certification and expanded to international markets, exporting precision-engineered anchor bolts to the Middle East & Africa.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        ),
    },
    {
        year: '2019',
        description:
            'Became the largest anchor bolt supplier for India\'s coastal infrastructure programme, supporting 50+ mega projects across the nation.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
        ),
    },
    {
        year: '2021',
        description:
            'Launched our R&D division focused on advanced materials and corrosion-resistant bolt technology, filing three patents in structural fastening systems.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
        ),
    },
    {
        year: '2023',
        description:
            'Crossed ₹500 Cr annual revenue milestone and inaugurated a second manufacturing plant with fully robotic assembly lines, doubling our capacity.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        ),
    },
    {
        year: '2025',
        description:
            'Pioneering smart infrastructure with IoT-enabled anchor bolt systems and AI-driven quality control — shaping the future of structural engineering.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
        ),
    },
];

/* ───────────── single timeline card ───────────── */
function TimelineCard({ item, index }) {
    const isLeft = index % 2 === 0;

    return (
        <div className="relative flex items-center w-full mb-12 md:mb-16">
            {/* ── desktop: left card ── */}
            {isLeft ? (
                <>
                    {/* card */}
                    <motion.div
                        initial={{ opacity: 0, x: -80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        className="hidden md:flex md:w-[45%] justify-end pr-10"
                    >
                        <Card item={item} />
                    </motion.div>

                    {/* node */}
                    <TimelineNode />

                    {/* spacer */}
                    <div className="hidden md:block md:w-[45%]" />
                </>
            ) : (
                <>
                    {/* spacer */}
                    <div className="hidden md:block md:w-[45%]" />

                    {/* node */}
                    <TimelineNode />

                    {/* card */}
                    <motion.div
                        initial={{ opacity: 0, x: 80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        className="hidden md:flex md:w-[45%] justify-start pl-10"
                    >
                        <Card item={item} />
                    </motion.div>
                </>
            )}

            {/* ── mobile: always visible, single column ── */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="md:hidden w-full pl-14"
            >
                <Card item={item} />
            </motion.div>

            {/* ── mobile: node (absolutely placed on line) ── */}
            <div className="md:hidden absolute left-4.5 top-6 z-10">
                <span className="block w-4 h-4 rounded-full bg-[#C89B3C] shadow-[0_0_10px_rgba(200,155,60,0.6)] ring-4 ring-[#C89B3C]/20" />
            </div>
        </div>
    );
}

/* ───────────── card UI ───────────── */
function Card({ item }) {
    return (
        <div className="group relative max-w-md w-full rounded-xl bg-white border border-[#e0d7c6] p-7 shadow-md transition-all duration-300 hover:scale-[1.03] hover:shadow-lg cursor-default">
            {/* icon + year */}
            <div className="flex items-center gap-3 mb-3">
                <span className="text-[#C89B3C] opacity-80 group-hover:opacity-100 transition-opacity">
                    {item.icon}
                </span>
                <h3 className="text-3xl font-bold text-[#0B1F3B]">
                    {item.year}
                </h3>
            </div>
            <p className="text-[#2F2F2F] leading-relaxed text-[15px]">
                {item.description}
            </p>
            {/* decorative corner accent */}
            <div className="absolute -top-px -left-px w-16 h-16 bg-linear-to-br from-[#C89B3C]/10 to-transparent rounded-tl-xl pointer-events-none" />
        </div>
    );
}

/* ───────────── node on the timeline ───────────── */
function TimelineNode() {
    return (
        <div className="hidden md:flex items-center justify-center w-[10%] z-10">
            <span className="block w-5 h-5 rounded-full bg-[#C89B3C] shadow-[0_0_10px_rgba(200,155,60,0.6)] ring-[5px] ring-[#C89B3C]/20" />
        </div>
    );
}

/* ───────────── main component ───────────── */
export default function OurJourney() {
    return (
        <section className="relative bg-gray-400 py-24 md:py-32 overflow-hidden">
            {/* ── decorative background blobs (subtle, vintage-toned) ── */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute -top-40 -left-40 w-125 h-125 bg-[#0B1F3B]/5 rounded-full blur-[120px]" />
                <div className="absolute top-1/3 -right-32 w-100 h-100 bg-[#C89B3C]/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 left-1/4 w-87.5 h-87.5 bg-[#0B1F3B]/3 rounded-full blur-[100px]" />
            </div>

            {/* ── heading ── */}
            <div className="relative z-10 text-center mb-20 px-6">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="uppercase tracking-[0.25em] text-sm text-white font-semibold mb-4"
                >
                    Milestones
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0B1F3B]"
                >
                    Our Journey
                </motion.h2>

                {/* divider */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="mx-auto mt-6 h-0.5 w-24 origin-center bg-linear-to-r from-[#0B1F3B] to-[#C89B3C] rounded-full"
                />
            </div>

            {/* ── timeline ── */}
            <div className="relative max-w-5xl mx-auto px-6">
                {/* vertical gradient line — desktop */}
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.75 bg-linear-to-b from-[#0B1F3B] to-[#C89B3C] rounded-full" />

                {/* vertical gradient line — mobile */}
                <div className="md:hidden absolute left-6.25 top-0 bottom-0 w-0.75 bg-linear-to-b from-[#0B1F3B] to-[#C89B3C] rounded-full" />

                {timelineData.map((item, index) => (
                    <TimelineCard key={item.year} item={item} index={index} />
                ))}
            </div>
        </section>
    );
}

