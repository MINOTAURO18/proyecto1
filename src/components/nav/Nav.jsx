import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from '../nav/nav.module.css'
const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => { 
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else { 
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <nav className={`${scrolled ? styles.scrolled : ''} w-full h-8vh  flex gap-6 justify-center items-center text-white text-2xl fixed z-10` }>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
    </nav>
  );
};

export default Nav;
