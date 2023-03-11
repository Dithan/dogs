import React from 'react';
import styles from './Header.module.css';
import Link from 'next/link';
import Image from 'next/image';

import { UserContext } from '../../UseContext';

const Header = () => {
  const { data, userLogout } = React.useContext(UserContext);

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
        {data ? (
          <Link className={styles.login} href="/login">
            {data.nome}
            <button onClick={userLogout}>sair</button>
          </Link>
        ) : (
          <Link className={styles.login} href="/login">
            Login / Criar
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
