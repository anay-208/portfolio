import type { MDXComponents } from 'mdx/types'
import Link from 'next/link'
import { CodeBlock } from './components/code-block'

const components: MDXComponents = {
    h1: ({ children }) => (
        <h1 className='mb-3 mt-8 text-3xl font-cal-sans text-white md:text-4xl'>{children}</h1>
    ),
    h2: ({ children }) => (
        <h2 className='mb-3 mt-8 text-2xl font-cal-sans text-white md:text-3xl'>{children}</h2>
    ),
    h3: ({ children }) => (
        <h3 className='mb-2 mt-6 text-xl font-cal-sans text-white md:text-2xl'>{children}</h3>
    ),
    h4: ({ children }) => (
        <h4 className='mb-2 mt-5 text-lg font-cal-sans text-white'>{children}</h4>
    ),
    p: ({ children }) => <p className='my-4 leading-7 text-white/75'>{children}</p>,
    a: ({ href = '', children, ...props }) => {
        const isExternal = href.startsWith('http')

        return (
            <Link
                href={href}
                className='underline decoration-white/25 underline-offset-4 transition-colors hover:text-white hover:decoration-white'
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noreferrer noopener' : undefined}
                {...props}
            >
                {children}
            </Link>
        )
    },
    ul: ({ children }) => <ul className='my-4 list-disc space-y-2 pl-6 text-white/75'>{children}</ul>,
    ol: ({ children }) => <ol className='my-4 list-decimal space-y-2 pl-6 text-white/75'>{children}</ol>,
    li: ({ children }) => <li className='leading-7'>{children}</li>,
    blockquote: ({ children }) => (
        <blockquote className='my-6 border-l-2 border-neutral-700 pl-4 italic text-white/70'>
            {children}
        </blockquote>
    ),
    hr: () => <hr className='my-10 border-neutral-800' />,
    pre: ({ children, ...props }) => <CodeBlock {...props}>{children}</CodeBlock>,
    code: ({ className, children, ...props }) => {
        const isBlockCode =
            (typeof className === 'string' && className.includes('language-')) ||
            'data-language' in props

        if (isBlockCode) {
            return (
                <code className={className} {...props}>
                    {children}
                </code>
            )
        }

        return (
            <code
                className='rounded-md border border-neutral-800 bg-neutral-900 px-1.5 py-0.5 text-[0.9em] text-white/90'
                {...props}
            >
                {children}
            </code>
        )
    },
    strong: ({ children }) => <strong className='font-semibold text-white'>{children}</strong>,
    em: ({ children }) => <em className='italic text-white/90'>{children}</em>,
    table: ({ children }) => (
        <div className='my-6 overflow-x-auto'>
            <table className='w-full border-collapse text-left text-sm'>{children}</table>
        </div>
    ),
    thead: ({ children }) => <thead className='border-b border-neutral-700 text-white'>{children}</thead>,
    tbody: ({ children }) => <tbody className='divide-y divide-neutral-800 text-white/75'>{children}</tbody>,
    tr: ({ children }) => <tr>{children}</tr>,
    th: ({ children }) => <th className='px-3 py-2 font-medium'>{children}</th>,
    td: ({ children }) => <td className='px-3 py-2 align-top'>{children}</td>,
}

export function useMDXComponents(): MDXComponents {
    return components
}