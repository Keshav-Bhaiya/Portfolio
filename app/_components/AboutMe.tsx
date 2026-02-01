'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const AboutMe = () => {
    const container = React.useRef<HTMLDivElement>(null);

    // Animate in
    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'about-me-in',
                    trigger: container.current,
                    start: 'top 70%',
                    end: 'bottom bottom',
                    scrub: 0.5,
                },
            });

            tl.from('.slide-up-and-fade', {
                y: 150,
                opacity: 0,
                stagger: 0.05,
            });
        },
        { scope: container },
    );

    // Animate out
    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'about-me-out',
                    trigger: container.current,
                    start: 'bottom 50%',
                    end: 'bottom 10%',
                    scrub: 0.5,
                },
            });

            tl.to('.slide-up-and-fade', {
                y: -150,
                opacity: 0,
                stagger: 0.02,
            });
        },
        { scope: container },
    );

    return (
        <section className="pb-section" id="about-me">
            <div className="container" ref={container}>
                {/* BIG QUOTE */}
                <h2 className="text-4xl md:text-6xl font-thin mb-20 slide-up-and-fade">
                    I enjoy building products where clean code, thoughtful
                    design, and real-world impact come together.
                </h2>

                <p className="pb-3 border-b text-muted-foreground slide-up-and-fade">
                    About me
                </p>

                <div className="grid md:grid-cols-12 mt-9">
                    {/* LEFT */}
                    <div className="md:col-span-5">
                        <p className="text-5xl slide-up-and-fade">
                            Hi, I&apos;m Keshav.
                        </p>
                    </div>

                    {/* RIGHT */}
                    <div className="md:col-span-7">
                        <div className="text-lg text-muted-foreground max-w-[480px]">
                            <p className="slide-up-and-fade">
                                I’m a Full Stack Developer skilled in Java, MERN
                                stack, and AI/GenAI applications, with a strong
                                focus on building scalable and reliable
                                products. I enjoy working across the entire
                                stack — from designing intuitive frontends to
                                architecting robust backend systems.
                            </p>

                            <p className="mt-3 slide-up-and-fade">
                                I’ve built and deployed multiple real-world
                                projects, led development teams, and won
                                competitive hackathons and web development
                                competitions. My approach is simple: write clean
                                code, optimize performance, and deliver
                                experiences that users genuinely enjoy using.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
