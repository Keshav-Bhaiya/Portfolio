import { notFound } from 'next/navigation';
import ProjectDetails from './_components/ProjectDetails';
import { PROJECTS } from '@/lib/data';
import type { Metadata } from 'next';

export const generateStaticParams = async () => {
    return PROJECTS.map((project) => ({ slug: project.slug }));
};

export const generateMetadata = async ({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> => {
    const { slug } = await params;
    const project = PROJECTS.find((project) => project.slug === slug);

    if (!project)
        return {
            title: 'Project Not Found | Vivek Sharma | Full Stack Developer',
            description: "The project you're looking for does not exist.",
        };

    const keywords = [
        'Vivek Sharma',
        'Pinak',
        'onipinak',
        'onipinaka',
        'Web Developer',
        'Software Development Intern',
        'Next.js Developer',
        'React Developer',
        'MERN Stack Developer',
        project.title,
        ...(project.techStack || []),
    ];

    return {
        title: `${project.title} | ${project.techStack
            .slice(0, 3)
            .join(', ')} | Vivek Sharma`,
        description:
            project.description ||
            `Discover details about ${
                project.title
            } — a project built by Vivek Sharma (Pinak), focusing on ${project.techStack.join(
                ', ',
            )}.`,
        keywords,
        openGraph: {
            title: `${project.title} | ${project.techStack
                .slice(0, 3)
                .join(', ')} | Vivek Sharma`,
            description:
                project.description ||
                `A web project by Vivek Sharma (Pinak / onipinak), showcasing ${project.techStack.join(
                    ', ',
                )}.`,
            url: `https://www.viveksharma.tech/projects/${slug}`,
            siteName: 'Vivek Sharma Portfolio',
            images: [
                {
                    url:
                        project.thumbnail ||
                        project.images?.[0] ||
                        '/og-image.png',
                    width: 1200,
                    height: 630,
                    alt: `${project.title} - ${project.techStack.join(', ')}`,
                },
            ],
            type: 'article',
        },
        twitter: {
            card: 'summary_large_image',
            title: `${project.title} | ${project.techStack
                .slice(0, 3)
                .join(', ')} | Vivek Sharma`,
            description:
                project.description ||
                `Explore ${project.title} — a creation by Vivek Sharma, a Next.js and React developer.`,
            images: [project.images?.[0] || '/og-image.png'],
        },
    };
};

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = await params;
    const project = PROJECTS.find((project) => project.slug === slug);

    if (!project) return notFound();

    return <ProjectDetails project={project} />;
};

export default Page;
