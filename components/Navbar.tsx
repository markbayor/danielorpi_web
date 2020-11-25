import Link from "next/link";
import { useRouter } from 'next/router'

const Navbar = () => {
  const router = useRouter()

  return (
    // <div className={router.pathname === '/' ? 'header--home' : 'header'}>
    <div className='header'>
      <h1 className="header__logo">
        <Link href="/">
          <a className='btn'>
            <img className='header__logo-img' src='/logo-header-white.png'/>
          </a>
        </Link>
      </h1>
      <nav className="navigation">
        <Link href="/">
          <a className="btn btn--nav">Home</a>
        </Link>
        <Link href="/music">
          <a className="btn btn--nav">Music</a>
        </Link>
        <Link href="/tour">
          <a className="btn btn--nav">Tour</a>
        </Link>
        <Link href="/contact">
          <a className="btn btn--nav">Contact</a>
        </Link>
        <a href="#" className="btn btn--nav">
          Diggin
        </a>
      </nav>
    </div>
  );
}

export {Navbar};