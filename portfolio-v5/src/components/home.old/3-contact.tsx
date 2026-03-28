export default function Contact() {
    return (
        <section className="py-24 w-screen flex justify-center items-center flex-col gap-8">
            <div className="text-center">
                <h2 className="font-cal-sans text-5xl md:text-7xl mb-6">Get in Touch</h2>
                <p className="text-black/75 font-inter font-semibold text-lg mb-8">I&apos;d love to hear from you. Feel free to reach out!</p>
                <a
                    href="mailto:me@anayparaswani.dev"
                    className="inline-block px-8 py-4 bg-black text-white font-inter font-semibold rounded-lg hover:bg-black/80 transition-colors"
                >
                    me@anayparaswani.dev
                </a>
            </div>
        </section>
    )
}
