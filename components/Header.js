'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FiArrowUpRight, FiMenu, FiPhone, FiX } from 'react-icons/fi';
import styles from './Header.module.scss';

const links = [
  ['About', '#about'],
  ['Vision & Mission', '#vision'],
  ['Services', '#services'],
  ['Why Us', '#why-us'],
  ['Industries', '#industries'],
  ['Contact', '#contact'],
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.topline}>
        <div className={styles.toplineInner}>
          <span>Trusted Advice. Smart Technology. Secure Business Growth.</span>
          <a href="tel:+919930525424"><FiPhone aria-hidden="true" /> 9930525424</a>
        </div>
      </div>
      <div className={styles.navWrap}>
        <a className={styles.brand} href="#home" aria-label="Mark Consultants home" onClick={closeMenu}>
          <Image className={styles.brandLogo} src="/images/mark-consultants-logo.png" alt="Mark Consultants" width={180} height={58} priority />
        </a>
        <button className={styles.menuButton} type="button" onClick={() => setIsOpen((value) => !value)} aria-expanded={isOpen} aria-controls="primary-navigation" aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}>
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
        <nav id="primary-navigation" className={`${styles.nav} ${isOpen ? styles.navOpen : ''}`} aria-label="Primary navigation">
          {links.map(([label, href]) => <a key={href} href={href} onClick={closeMenu}>{label}</a>)}
          <a className={styles.navCta} href="#contact" onClick={closeMenu}>Free Consultation <FiArrowUpRight aria-hidden="true" /></a>
        </nav>
      </div>
    </header>
  );
}
