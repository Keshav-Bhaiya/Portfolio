'use client';
/* eslint-disable @next/next/no-img-element */

import SectionTitle from '@/components/SectionTitle';
import { PROJECTS } from '@/lib/data';
import { cn } from '@/lib/utils';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useRef, useState, useEffect, useCallback } from 'react';
import Project from './Project';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const ProjectList = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const projectListRef = useRef<HTMLDivElement>(null);
    const imageContainer = useRef<HTMLDivElement>(null);
    const [selectedProject, setSelectedProject] = useState<string | null>(null);
    const [isMobile, setIsMobile] = useState(true);

    // ✅ Initialize properly
    useEffect(() => {
        const checkMobile = () => {
            const mobile = window.innerWidth < 768;
            setIsMobile(mobile);

            // Set first project as default on desktop
            if (!mobile) {
                setSelectedProject(PROJECTS[0]?.slug ?? null);
            } else {
                setSelectedProject(null);
            }
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => {
            window.removeEventListener('resize', checkMobile);
        };
    }, []);

    // ✅ Mouse movement handler
    useEffect(() => {
        if (isMobile || !imageContainer.current) return;

        const handleMouseMove = (e: MouseEvent) => {
            if (!containerRef.current || !imageContainer.current) return;

            const containerRect = containerRef.current.getBoundingClientRect();
            const imageRect = imageContainer.current.getBoundingClientRect();

            // Check if mouse is inside container
            const isInside =
                e.clientY >= containerRect.top &&
                e.clientY <= containerRect.bottom &&
                e.clientX >= containerRect.left &&
                e.clientX <= containerRect.right;

            if (!isInside) {
                gsap.to(imageContainer.current, {
                    opacity: 0,
                    duration: 0.3,
                });
                return;
            }

            // Calculate position
            const offsetTop = e.clientY - containerRect.top;

            gsap.to(imageContainer.current, {
                y: offsetTop - imageRect.height / 2,
                opacity: 1,
                duration: 0.6,
                ease: 'power2.out',
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [isMobile]);

    // ✅ Scroll animation
    useGSAP(
        () => {
            if (!containerRef.current) return;

            gsap.from(containerRef.current, {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top bottom',
                    end: 'top 80%',
                    scrub: 1,
                },
                y: 100,
                opacity: 0,
            });
        },
        { scope: containerRef },
    );

    const handleMouseEnter = useCallback(
        (slug: string) => {
            if (isMobile) return;
            setSelectedProject(slug);
        },
        [isMobile],
    );

    return (
        <section className="pb-section" id="selected-projects">
            <div className="container">
                <SectionTitle title="SELECTED PROJECTS" />

                <div className="group/projects relative" ref={containerRef}>
                    {/* ✅ FIXED: Hover image container */}
                    {!isMobile && selectedProject && (
                        <div
                            ref={imageContainer}
                            className="hidden md:block fixed right-[1%] xl:right-[-6%] top-0 z-[100] pointer-events-none w-[280px] xl:w-[350px] aspect-[3/4] overflow-hidden rounded-lg shadow-2xl"
                            style={{
                                opacity: 0,
                                willChange: 'transform, opacity',
                            }}
                        >
                            {PROJECTS.map((project) => (
                                <img
                                    key={project.slug}
                                    src={project.thumbnail}
                                    alt={project.title}
                                    className={cn(
                                        'absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-500',
                                        selectedProject === project.slug
                                            ? 'opacity-100'
                                            : 'opacity-0',
                                    )}
                                    style={{ willChange: 'opacity' }}
                                />
                            ))}
                        </div>
                    )}

                    <div
                        className="flex flex-col max-md:gap-10 relative z-10"
                        ref={projectListRef}
                    >
                        {PROJECTS.map((project, index) => (
                            <Project
                                key={project.slug}
                                index={index}
                                project={project}
                                selectedProject={selectedProject}
                                onMouseEnter={handleMouseEnter}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectList;
