 
import Link from "@/lib/link";
import { getPosts } from "@/lib/features/blogs/get-posts";
// import Hero from "@/components/home/1-hero";
// import Projects from "@/components/home.old/2-projects";
// import Contact from "@/components/home.old/3-contact";

export default async function Home() {


  const posts = await getPosts();
  const socialLinkClass = "relative inline-block transition-colors hover:text-neutral-200 after:absolute after:left-0 after:-bottom-0 after:h-px after:w-full after:bg-current after:opacity-70 after:transition-opacity hover:after:opacity-100";
  return (
    <>
        <div className="max-w-2xl mx-auto flex flex-col gap-6 min-h-screen">
          <header className="flex flex-col gap-1 pt-32">
            <h1 className="font-cal-sans text-4xl">Anay Paraswani</h1>
            <div className="flex gap-3 text-neutral-400">
              <a href="https://github.com/anay-208" target="_blank" rel="noreferrer" className={socialLinkClass}>Github</a>
              <a href="https://x.com/anay_208" target="_blank" rel="noreferrer" className={socialLinkClass}>X</a>
              <a href="https://www.linkedin.com/in/anay-paraswani/" target="_blank" rel="noreferrer" className={socialLinkClass}>LinkedIn</a>
            </div>
          </header>
          <main className="flex flex-col gap-16">
          <section className="flex flex-col gap-4 text-white/75 font-cal-sans">
            <h2 className="sr-only">About me</h2>
            <p>I’m a developer and a student in my Junior Year of school, graduating in 2027.  I’m originally from Agra, India.</p>

            <p>In my early teen years, I started learning web development, in order to develop a real-world skill during the COVID lockdown. This is where I developed a passion for Computer science, and web development.</p>

            <p>Since then, I’ve worked on several projects ranging from open source tools to startup experiments.</p>
          </section>
          <section>
            <h2 className="font-cal-sans text-2xl">Blogs</h2>
            <ul className="flex flex-col mt-4 gap-4">
              {/* <li className="text-neutral-400">No blogs yet.</li> */}
              
              {posts.map((post) => (
                <li key={post.id} className="group">
                  <Link href={`/blogs/${post.id}`} className="flex items-center justify-between px-4 py-2 bg-neutral-800 rounded-lg">
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-neutral-400">
                        {post.date}
                      </span>
                      <h3 className="font-cal-sans text-white/80">
                        {post.title}
                      </h3>
                    </div>
                    <span className="text-xs text-neutral-400">
                      {post.viewsFormatted}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
          </main>
          <footer className="pt-8 pb-6 text-sm text-neutral-500 font-cal-sans mx-auto mt-auto">
            © {new Date().getFullYear()} Anay Paraswani
          </footer>
        </div>
    </>
  );
}
