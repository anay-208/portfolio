

export default function Navbar() {
    return (
        <header className="w-full flex justify-center mt-8 mb-6 px-4">
            <nav className="w-full max-w-2xl rounded-full bg-neutral-900 border border-neutral-800/80 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.8)] px-6 py-3 flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" aria-hidden />
                    <span className="text-sm text-neutral-300">anayparaswani.dev</span>
                </div>

                <div className="flex items-center gap-4 *:text-sm *:text-neutral-200 *:transition-colors *:duration-150">
                    <a href="#apps" className="hover:text-white">Apps</a>
                    <a href="#blog" className="hover:text-white">Blog</a>
                    <a href="#contact" className="hover:text-white">Contact</a>
                </div>
            </nav>
        </header>
    );
}