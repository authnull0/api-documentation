import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import remarkRehype from 'remark-rehype'
import rehypeHighlight from 'rehype-highlight'
import rehypeRaw from 'rehype-raw'
import rehypeStringify from 'rehype-stringify'

const contentDir = path.join(process.cwd(), 'content')

export async function getDocBySlug(slug: string) {
  const filePath = path.join(contentDir, `${slug}.md`)
  const fileContent = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContent)

  const result = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeHighlight, { ignoreMissing: true } as never)
    .use(rehypeStringify)
    .process(content)

  return {
    slug,
    title: (data.title as string) || slug,
    contentHtml: String(result),
  }
}

export function getAllSlugs(): string[] {
  const files = fs.readdirSync(contentDir)
  return files
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace(/\.md$/, ''))
}
