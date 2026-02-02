import type { Metadata } from 'next';
import { Anton, Roboto_Flex } from 'next/font/google';
import { ReactLenis } from 'lenis/react';
import 'lenis/dist/lenis.css';
import './globals.css';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollProgressIndicator from '@/components/ScrollProgressIndicator';
import CustomCursor from '@/components/CustomCursor';
import Preloader from '@/components/Preloader';
import StickyEmail from './_components/StickyEmail';
import ParticleBackground from '@/components/ParticleBackground';

import { GoogleAnalytics } from '@next/third-parties/google';
import Script from 'next/script';

/* -------------------- Fonts -------------------- */

const antonFont = Anton({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-anton',
});

const robotoFlex = Roboto_Flex({
    weight: ['100', '400', '500', '600', '700', '800'],
    subsets: ['latin'],
    variable: '--font-roboto-flex',
});

/* -------------------- Metadata -------------------- */

export const metadata: Metadata = {
    title: 'Keshav Bhaiya | Full Stack Developer | Software Intern',
    description:
        'I’m Keshav Bhaiya — a Full Stack Developer skilled in Java, MERN stack, and AI/GenAI applications.',
    keywords: [
        'Keshav Bhaiya',
        'Full Stack Developer',
        'MERN Stack Developer',
        'Java Developer',
        'AI Developer',
        'GenAI Engineer',
        'Next.js Developer',
        'React Developer',
        'LNCT Group',
        'Portfolio',
    ],
    authors: [{ name: 'Keshav Bhaiya' }],
    openGraph: {
        title: 'Keshav Bhaiya | Full Stack Developer & AI Engineer',
        description:
            'Portfolio of Keshav Bhaiya showcasing full stack, MERN, Java, and AI-powered projects.',
        siteName: 'Keshav Bhaiya Portfolio',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Keshav Bhaiya Portfolio',
            },
        ],
        locale: 'en_IN',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Keshav Bhaiya | Full Stack Developer',
        description:
            'Full Stack Developer skilled in Java, MERN stack, and AI/GenAI applications.',
        images: ['/og-image.png'],
    },
};

/* -------------------- Root Layout -------------------- */

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            {/* Analytics */}
            <GoogleAnalytics gaId="G-MHLY1LNGY5" />

            {/* Structured Data */}
            <Script
                id="structured-data"
                type="application/ld+json"
                strategy="beforeInteractive"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Person',
                        name: 'Keshav Bhaiya',
                        jobTitle: 'Full Stack Developer',
                        sameAs: ['https://github.com/Keshav-Bhaiya'],
                        alumniOf: {
                            '@type': 'CollegeOrUniversity',
                            name: 'LNCT Group, Bhopal',
                        },
                    }),
                }}
            />

            {/* Hotjar */}
            <Script id="hotjar" strategy="afterInteractive">
                {`(function(h,o,t,j,a,r){
                  h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                  h._hjSettings={hjid:6380611,hjsv:6};
                  a=o.getElementsByTagName('head')[0];
                  r=o.createElement('script');r.async=1;
                  r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                  a.appendChild(r);
                })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`}
            </Script>

            <body
                className={`${antonFont.variable} ${robotoFlex.variable} antialiased relative`}
            >
                {/* 🔹 BACKGROUND LAYER */}
                <ParticleBackground />

                {/* 🔹 APP CONTENT */}
                <ReactLenis root options={{ lerp: 0.1, duration: 1.4 }}>
                    <Navbar />
                    <main className="relative z-[2]">{children}</main>
                    <Footer />
                </ReactLenis>

                {/* 🔹 UI OVERLAYS */}
                <CustomCursor />
                <Preloader />
                <ScrollProgressIndicator />
                <StickyEmail />
            </body>
        </html>
    );
}
