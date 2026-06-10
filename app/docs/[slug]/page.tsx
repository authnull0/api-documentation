import { getDocBySlug, getAllSlugs } from '@/lib/docs'
import { DocContent } from '@/components/DocContent'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

type Props = { params: { slug: string } }

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const doc = await getDocBySlug(params.slug)
    return { title: `${doc.title} — AuthNull API` }
  } catch {
    return { title: 'AuthNull API Documentation' }
  }
}

export default async function DocPage({ params }: Props) {
  try {
    const doc = await getDocBySlug(params.slug)
    return <DocContent contentHtml={doc.contentHtml} />
  } catch {
    notFound()
  }
}
