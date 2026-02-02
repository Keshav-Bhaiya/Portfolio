'use client';

import ArrowAnimation from '@/components/ArrowAnimation';
import Button from '@/components/Button';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Banner = () => {
    const containerRef = React.useRef<HTMLDivElement>(null);

    // move the content a little up on scroll
    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 70%',
                    end: 'bottom 10%',
                    scrub: 1,
                },
            });

            tl.fromTo(
                '.slide-up-and-fade',
                { y: 0, opacity: 1 },
                { y: -150, opacity: 0, stagger: 0.05 },
            );
        },
        { scope: containerRef },
    );

    return (
        <section className="relative overflow-hidden" id="banner">
            <ArrowAnimation />

            <div
                className="container h-[100svh] min-h-[530px] max-md:pb-10 flex justify-between items-center max-md:flex-col"
                ref={containerRef}
            >
                {/* LEFT CONTENT */}
                <div className="max-md:grow max-md:flex flex-col justify-center items-start max-w-[560px]">
                    <h1 className="banner-title slide-up-and-fade leading-[0.95] text-6xl sm:text-[80px] font-anton">
                        <span className="text-primary">FULL STACK</span>
                        <br />
                        <span className="ml-4">DEVELOPER</span>
                    </h1>

                    <p className="banner-description slide-up-and-fade mt-6 text-lg text-muted-foreground">
                        Hi, I&apos;m{' '}
                        <span className="font-medium text-foreground">
                            Keshav Bhaiya
                        </span>
                        . A Full Stack Developer skilled in{' '}
                        <span className="text-foreground font-medium">
                            Java, MERN stack, and AI/GenAI applications
                        </span>
                        . I build scalable products, award-winning projects, and
                        clean, high-performance user experiences. From robust
                        backends to intuitive frontends, I focus on creating
                        solutions that are fast, reliable, and impactful.
                    </p>

                    <div className="flex gap-4 mt-9">
                        <Button
                            as="link"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://github.com/Keshav-Bhaiya"
                            variant="primary"
                            className="banner-button slide-up-and-fade"
                        >
                            View GitHub
                        </Button>

                        <Button
                            as="link"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://drive.google.com/file/d/13vbI5aq9XMS9g5iHM5MDxX-RHbtOsFcU/view?usp=sharing"
                            variant="primary"
                            className="banner-button slide-up-and-fade"
                        >
                            Resume
                        </Button>
                    </div>
                </div>

                {/* RIGHT STATS */}
                <div className="md:absolute bottom-[10%] right-[4%] flex md:flex-col gap-4 md:gap-8 text-center md:text-right">
                    <div className="slide-up-and-fade">
                        <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">
                            2+
                        </h5>
                        <p className="text-muted-foreground">
                            Years of Experience
                        </p>
                    </div>

                    <div className="slide-up-and-fade">
                        <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">
                            10+
                        </h5>
                        <p className="text-muted-foreground">
                            Real-World Projects
                        </p>
                    </div>

                    <div className="slide-up-and-fade">
                        <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">
                            10K+
                        </h5>
                        <p className="text-muted-foreground">Hours Worked</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
