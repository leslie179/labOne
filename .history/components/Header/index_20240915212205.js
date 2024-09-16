import Link from "next/link"

export default function Header() {
    return(
            <header>
            <h1>Header</h1>
            <Link href='/'>My Tunes</Link>
            </header>
    )
}