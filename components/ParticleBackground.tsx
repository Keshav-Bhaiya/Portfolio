'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP);

const PARTICLE_COUNT = 100;

const ParticleBackground = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!containerRef.current) return;

        const particles =
            containerRef.current.querySelectorAll<HTMLDivElement>('.particle');

        particles.forEach((particle) => {
            const size = Math.random() * 3 + 1;
            const startX = Math.random() * window.innerWidth;
            const startY = Math.random() * window.innerHeight;

            gsap.set(particle, {
                width: size,
                height: size,
                x: startX,
                y: startY,
                opacity: Math.random() * 0.8 + 0.2,
            });

            gsap.to(particle, {
                y: -50,
                duration: Math.random() * 10 + 10,
                ease: 'none',
                repeat: -1,
                delay: Math.random() * 10,
                onRepeat: () => {
                    gsap.set(particle, {
                        x: Math.random() * window.innerWidth,
                        y: window.innerHeight + 50,
                        opacity: Math.random() * 0.8 + 0.2,
                    });
                },
            });
        });
    }, []);

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-0 pointer-events-none"
        >
            {Array.from({ length: PARTICLE_COUNT }).map((_, i) => (
                <div
                    key={i}
                    className="particle absolute rounded-full bg-white"
                />
            ))}
        </div>
    );
};

export default ParticleBackground;
