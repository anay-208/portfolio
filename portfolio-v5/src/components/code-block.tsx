'use client'

import { Check, Copy } from 'lucide-react'
import { useRef, useState } from 'react'

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

export function CodeBlock({ children, className, ...props }: CodeBlockProps) {
    const preRef = useRef<HTMLPreElement>(null)
    const language = props['data-language']

    return (
        <div className='group relative  overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950'>
            <div className='flex items-center justify-between border-b border-neutral-800 px-4 py-2'>
                <span className='text-xs font-medium uppercase tracking-wide text-white/40'>
                    {language ?? 'code'}
                </span>
                <CopyButton targetRef={preRef} />
            </div>
            <pre
                ref={preRef}
                {...props}
                className={`overflow-x-auto p-4 text-sm text-white/90 ${className ?? ''}`}
            >
                {children}
            </pre>
        </div>
    )
}
