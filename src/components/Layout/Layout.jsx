import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import styles from './Layout.module.css';

const Layout = () => {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div className={styles.brand}>
                    <Link to="/" className={styles.logo}>PrintHub Go</Link>
                    <span className={styles.edition}>MVP</span>
                </div>
                {/* Navigation could go here */}
            </header>
            <main className={styles.main}>
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;
