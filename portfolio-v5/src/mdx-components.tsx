import type { MDXComponents } from 'mdx/types'

const components: MDXComponents = {
    h1: ({ children }) => (
        <h1 className='text-2xl font-cal-sans mb-1'>{children}</h1>
    ),
}

export function useMDXComponents(): MDXComponents {
    return components
}