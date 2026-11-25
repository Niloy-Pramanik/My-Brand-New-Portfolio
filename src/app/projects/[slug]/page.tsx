import { notFound } from 'next/navigation';
import { PROJECTS } from '@/lib/data';
import { pageMetadata } from '@/lib/metadata';
import { ProjectDetail } from '@/components/shared/ProjectDetail';

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = PROJECTS.find((item) => item.slug === slug);
  if (!project) notFound();
  return pageMetadata(`${project.title} — ${project.subtitle} | Niloy Pramanik`, project.description, `/projects/${slug}`, project.image);
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = PROJECTS.find((item) => item.slug === slug);
  if (!project) notFound();
  return <ProjectDetail project={project} />;
}
