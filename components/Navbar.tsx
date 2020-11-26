import Link from "next/link";
import React, {useState} from "react";
import {useWindowSize} from "../common/functions";

const Navbar = () => {
  const {width, height} = useWindowSize()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className={`${width && width > 700 ? 'header' : 'header_mobile'}`}>
      <h1 className="header__logo">
        <Link href="/">
          <a className='btn'>
            <img className='header__logo-img' src='/logo-header-white.png'/>
          </a>
        </Link>
      </h1>
      {width && width < 700 ? <div className={`${isMenuOpen ? 'container change' : 'container'}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
      : null}
      <nav className={`navigation${isMenuOpen ? ' u-translate-x-0': ' u-translate-x-30'}`}>
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