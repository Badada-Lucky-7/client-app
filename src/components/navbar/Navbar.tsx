'use client';

import useProfile from '@/hooks/useProfile';
import Link from 'next/link';

import './Navbar.css';

const Navbar = () => {
  const profile = useProfile();

  return (
    <header className="navbar-header">
      <nav className="navbar-nav">
        <Link href="/" className="nav-logo">
          홈
        </Link>
        <Link href="/challen-log" className="nav-challen-log">
          {'challen-log'}
        </Link>
        {profile ? <div>{profile.email}</div> : <Link href="/login">{'로그인'}</Link>}
      </nav>
    </header>
  );
};

export default Navbar;
