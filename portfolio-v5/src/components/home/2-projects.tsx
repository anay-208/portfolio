import Image from "next/image";


export default function Projects() {
    return (
        <section>
            <div className="bg-neutral-950 text-white rounded-3xl m-2 py-2 px-4 sm:py-4 sm:px-8 ">
                <h2 className="font-cal-sans text-3xl sm:text-5xl">Projects</h2>

                <div className="grid grid-cols-2">
                    <div>
                        {/* Project Counter */}
                    </div>
                    <div className="flex flex-col p-16 gap-2">
                        <div>
                            {/* Project Image */}
                            <Image src="/projects/lifelog.png" alt="Lifelog" width={1712} height={972} className="rounded-2xl" />
                        </div>
                        <div className="flex justify-between items-center">
                            <h3 className="font-cal-sans text-2xl sm:text-4xl">LifeLog</h3>
                            <div className="flex gap-2">
                                <div className="bg-[#D9D9D9] text-black rounded-2xl h-fit px-2  flex justify-center items-center font-cal-sans">
                                    Next.js Global Hackathon
                                </div>
                                <div className="bg-[#D9D9D9] text-black rounded-2xl h-fit px-2  flex justify-center items-center font-cal-sans">
                                    2025
                                </div>
                            </div>
                        </div>
                        <p className="text-[#D4D4D4] font-cal-sans">
                            Lifelog is a unified space for managing your thoughts, goals, finances, and reflections. Built using Next.js with a focus on seamless navigation and performance.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}