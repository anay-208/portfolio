"use client"
import type { LinkProps } from "next/link"
import Link from "next/link"
import { type ForesightRegisterOptions } from "js.foresight"
import { useRef, useEffect, useState } from "react"
import {
  ForesightManager,
  type ForesightRegisterOptionsWithoutElement,
  type ForesightRegisterResult,
} from "js.foresight"

function useForesight<T extends HTMLElement = HTMLElement>(
  options: ForesightRegisterOptionsWithoutElement
) {
  const elementRef = useRef<T>(null)
  const registerResults = useRef<ForesightRegisterResult | null>(null)
  useEffect(() => {
    if (!elementRef.current) return

    registerResults.current = ForesightManager.instance.register({
      element: elementRef.current,
      ...options,
    })
  }, [options])

  return { elementRef, registerResults }
}



interface ForesightLinkProps
  extends Omit<LinkProps, "prefetch">, Omit<ForesightRegisterOptions, "element" | "callback"> {
  children: React.ReactNode
  className?: string
}


export default function ForesightLink({ children, className, ...props }: ForesightLinkProps) {
  const [active, setActive] = useState(false);
  const { elementRef } = useForesight<HTMLAnchorElement>({
    callback: () => {
      console.log("prefetching", props.href.toString());
      // Here, instead of router.prefetch, we used state, as router.prefetch has the same behaviour
      // as prefetch={auto}. I want the pages to load almost immediately
      setActive(true);
    },
    hitSlop: props.hitSlop,
    name: props.name,
    meta: props.meta,
    reactivateAfter: props.reactivateAfter,
  })

  return (
    <Link {...props} ref={elementRef} className={className} prefetch={active ? true : "auto"}>
      {children}
    </Link>
  )
}