import Link from 'next/link'
import Image from 'next/image'
import Logo from './logo.png'
import LogoutButton from './LogoutButton'

export default function Navbar({ user }) {
    return (
        <nav>
            <Image 
                src={Logo}
                alt='OpenCode Helpdesk Logo'
                width={130}
                quality={100}
                placeholder='blur'
            />
            <h2>OpenCode Helpdesk</h2>
            <Link href="/">Dashboard</Link>
            <Link href="/tickets">Tickets</Link>
            <Link href="/tickets/create" className='mr-auto'>Create</Link>

            {user && <span>Hello, {user.email}</span>}
            <LogoutButton />
        </nav>
    )
}
