import Link from "next/link";

const Navbar = () => {
  return (
    <div className="header">
      <h1 className="header__logo">
        <Link href="/">
          <a className='btn'>
            <img />
            LOGO
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
        <a href="#" className="btn btn--nav">
          Contact
        </a>
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