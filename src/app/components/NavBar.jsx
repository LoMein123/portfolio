import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="flex items-center">
      <ul className="flex gap-6 items-center">
        {/*  */}

        <li className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
          <Link href="/" className="">
            <p className="blue-gradient_text">JB</p>
          </Link>
        </li>

        <li className="flex text-[var(--foreground)]"><Link href="/about" className="">About</Link></li>
        <li className="flex text-[var(--foreground)]"><Link href="/projects" className="">Projects</Link></li>
        <li className="flex text-[var(--foreground)]"><Link href="/contact" className="">Contact Us</Link></li>
      </ul>
    </nav>
  )
}