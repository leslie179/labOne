import Link from "next/link"

export default function Header() {
    return(
            <header>
            <h1>My Tunes</h1>
            <Link href='/'>Home</Link>
            </header>
    )
}