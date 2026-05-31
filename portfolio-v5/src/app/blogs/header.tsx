"use client";

import { Post } from "@/lib/features/blogs/get-posts";
import { useSelectedLayoutSegments } from "next/dist/client/components/navigation";
import { useEffect, useRef } from "react";
import useSWR   from "swr";



const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function Header({posts}: {posts: Post[]}) {
    const segments = useSelectedLayoutSegments();

      const initialPost = posts.find(
    post => post.id === segments[segments.length - 1]
  );
  const { data: post, mutate } = useSWR(
    `/api/view?id=${initialPost?.id ?? ""}`,
    fetcher,
    {
      fallbackData: initialPost,
      refreshInterval: 5000,
    }
  );

  if (initialPost == null) return <></>;

    return (
        <>
            <header className="flex flex-col gap-1 pt-16 md:pt-32">
                <h1 className="font-cal-sans text-4xl">{post.title}</h1>
                <div className="flex justify-between  text-neutral-400">
                    <span>By Anay Paraswani on {post.date}</span>
                    <Views id={post.id} mutate={mutate} defaultValue={post.views}/>
                </div>
            </header>
        </>
    )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Views({ id, mutate, defaultValue } : { id: string, mutate: (data?: any) => void, defaultValue: number }) { 
  const views = defaultValue;
  const didLogViewRef = useRef(false);

  useEffect(() => {
    if ("development" === process.env.NODE_ENV) return;
    if (!didLogViewRef.current) {
      const url = "/api/view?incr=1&id=" + encodeURIComponent(id);
      fetch(url)
        .then(res => res.json())
        .then(obj => {
          mutate(obj);
        })
        .catch(console.error);
      didLogViewRef.current = true;
    }
  });

  return <>{views != null ? <span>{views} views</span> : null}</>;
}