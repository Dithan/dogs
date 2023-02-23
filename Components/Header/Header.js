import React from 'react';
import styles from './Header.module.css';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} href="/">
          <Image
            src="../../Assets/dogs.svg"
            alt="Dogs-Home"
            aria-label="Dogs-Home"
            width={28}
            height={22}
          />
        </Link>
        <Link className={styles.login} href="/login">Login / Criar</Link>
      </nav>
    </header>
  );
};

export default Header;
