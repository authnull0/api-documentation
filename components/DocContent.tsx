interface DocContentProps {
  contentHtml: string
}

export function DocContent({ contentHtml }: DocContentProps) {
  return (
    <div className="max-w-4xl px-8 py-10">
      <article
        className="prose prose-slate max-w-none
          prose-headings:font-semibold
          prose-h1:text-2xl prose-h1:border-b prose-h1:border-gray-200 prose-h1:pb-3 prose-h1:mb-6
          prose-h2:text-xl prose-h2:mt-10
          prose-h3:text-base prose-h3:mt-6
          prose-table:text-sm
          prose-th:bg-gray-50 prose-th:font-semibold
          prose-pre:rounded-lg prose-pre:shadow-sm
          prose-a:text-indigo-600 prose-a:no-underline hover:prose-a:underline"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    </div>
  )
}
