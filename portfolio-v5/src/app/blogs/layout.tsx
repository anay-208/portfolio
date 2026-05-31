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
            <div className="max-w-2xl mx-auto flex flex-col gap-6 min-h-screen px-8 pb-16">
                <Header posts={posts}/>
                <main className="flex flex-col gap-16">
                    {/* The first paragraph has a my-4, but margin at the top is not needed. hence -mt-4 is added to balance it */}
                    <section className=" text-white/75 font-inter -mt-4"> 
                        {children}
                    </section>
                </main>
            </div>
        </>
    )

}