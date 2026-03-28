import { getPosts } from "@/lib/features/blogs/get-posts"
import Header from "./header"


export default async function BlogsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const posts = await getPosts();

    return (
        <>
            <div className="max-w-2xl mx-auto my-4 flex flex-col gap-6 min-h-screen">
                <Header posts={posts}/>
                <main className="flex flex-col gap-16">
                    <section className=" text-white/75 font-inter">
                        {children}
                    </section>
                </main>
            </div>
        </>
    )

}