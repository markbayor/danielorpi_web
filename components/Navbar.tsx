import Link from "next/link";
import { useRouter } from 'next/router'

const Navbar = () => {
  const router = useRouter()

  return (
    <div className={router.pathname === '/' ? 'header--transparent' : 'header'}>
      <h1 className="header__logo">
        <Link href="/">
          <a className='btn'>
            <img className='logo' src='/logo-header-white.png'/>
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
        {/* <a href="#" className="btn btn--nav">
          Contact
        </a> */}
        <a href="#" className="btn btn--nav">
          Diggin
        </a>
        <a href="#" className="btn btn--nav">
          Shop
        </a>
      </nav>
    </div>
  );
}

export default Navbar;