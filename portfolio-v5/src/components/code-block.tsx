'use client'

import { Check, ChevronDown, Copy } from 'lucide-react'
import { useId, useRef, useState } from 'react'

function CopyButton({ targetRef }: { targetRef: React.RefObject<HTMLPreElement | null> }) {
    const [copied, setCopied] = useState(false)

    const onCopy = async () => {
        const text = targetRef.current?.textContent ?? ''
        try {
            await navigator.clipboard.writeText(text)
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        } catch {
            // clipboard unavailable (e.g. insecure context) — ignore
        }
    }

    return (
        <button
            type='button'
            onClick={onCopy}
            aria-label={copied ? 'Copied' : 'Copy code'}
            className='rounded-md border border-neutral-800 bg-neutral-900 p-1.5 text-white/60 transition-colors hover:text-white'
        >
            {copied ? <Check className='size-4 text-green-400' /> : <Copy className='size-4' />}
        </button>
    )
}

type CodeBlockProps = React.ComponentPropsWithoutRef<'pre'> & {
    'data-language'?: string
}

// Height the code is clamped to before "Show more" is clicked.
const COLLAPSED_HEIGHT = 'max-h-72'

const labelClass =
    'cursor-pointer items-center justify-center gap-1 border-t border-neutral-800 px-4 py-2 text-xs font-medium text-white/50 transition-colors hover:text-white'

export function CodeBlock({ children, className, ...props }: CodeBlockProps) {
    const preRef = useRef<HTMLPreElement>(null)
    const id = useId()
    const language = props['data-language']

    return (
        <div className='my-6 overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950'>
            <div className='flex items-center justify-between border-b border-neutral-800 px-4 py-2'>
                <span className='text-xs font-medium uppercase tracking-wide text-white/40'>
                    {language ?? 'code'}
                </span>
                <CopyButton targetRef={preRef} />
            </div>

            {/* CSS-only toggle: no React state, so the code never re-renders. */}
            <input id={id} type='checkbox' className='peer sr-only' />

            <div
                className={`relative ${COLLAPSED_HEIGHT} overflow-hidden transition-[max-height] duration-300 peer-checked:max-h-[3000px] peer-checked:[&_.fade]:opacity-0`}
            >
                <pre
                    ref={preRef}
                    {...props}
                    className={`overflow-x-auto p-4 text-sm text-white/90 ${className ?? ''}`}
                >
                    {children}
                </pre>
                <div className='fade pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-neutral-950 to-transparent transition-opacity duration-300' />
            </div>

            <label htmlFor={id} className={`flex ${labelClass} peer-checked:hidden`}>
                Show more
                <ChevronDown className='size-4' />
            </label>
            <label htmlFor={id} className={`hidden ${labelClass} peer-checked:flex`}>
                Show less
                <ChevronDown className='size-4 rotate-180' />
            </label>
        </div>
    )
}
