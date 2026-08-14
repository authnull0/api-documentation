'use client'

import { useEffect, useRef } from 'react'

interface DocContentProps {
  contentHtml: string
}

const COPY_ICON =
  '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>'

const CHECK_ICON =
  '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>'

export function DocContent({ contentHtml }: DocContentProps) {
  const articleRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const article = articleRef.current
    if (!article) return

    const buttons: HTMLButtonElement[] = []
    let copiedTimeout: number | undefined

    article.querySelectorAll('pre').forEach((pre) => {
      const button = document.createElement('button')
      button.type = 'button'
      button.className = 'copy-code-btn'
      button.innerHTML = COPY_ICON
      button.setAttribute('aria-label', 'Copy code to clipboard')

      const handler = () => {
        const code = pre.querySelector('code')
        const text = code ? code.textContent ?? '' : pre.textContent ?? ''

        navigator.clipboard.writeText(text).then(() => {
          window.clearTimeout(copiedTimeout)
          button.innerHTML = CHECK_ICON
          button.classList.add('copied')
          copiedTimeout = window.setTimeout(() => {
            button.innerHTML = COPY_ICON
            button.classList.remove('copied')
          }, 1500)
        })
      }

      button.addEventListener('click', handler)
      buttons.push(button)
      pre.appendChild(button)
    })

    return () => {
      window.clearTimeout(copiedTimeout)
      buttons.forEach((button) => button.remove())
    }
  }, [contentHtml])

  return (
    <div className="max-w-4xl px-8 py-10">
      <article
        ref={articleRef}
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
