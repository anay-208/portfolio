import Link from "next/link";

export default function Footer(){
    return (
        <footer className="flex items-center justify-center text-center w-full  bg-slate-950/95 py-6">
            <p className="text-white font-default tracking-wider"> &copy; {new Date().getFullYear()} <Link href={"https://anayparaswani.me/"} className="tracking-widest underline">Anay Paraswani</Link> All Rights reserved</p>
        </footer>
    )
}