import React from 'react';
import { Link } from 'react-router-dom';
import StatusBadge from '../components/StatusBadge/StatusBadge';
import styles from './Home.module.css';
import { Printer, FileText, History } from 'lucide-react';

const Home = () => {
    // Simulator state: In real app, this comes from IoT backend
    const kioskStatus = 'online';

    return (
        <div className={styles.container}>
            <section className={styles.hero}>
                <h1 className={styles.greeting}>Print in 30 seconds.</h1>
                <p className={styles.subtitle}>No queues. No heavy bags. Just smart printing.</p>

                <div className={styles.statusCard}>
                    <div className={styles.statusHeader}>
                        <span className={styles.statusLabel}>Nearest Kiosk (Library)</span>
                        <StatusBadge status={kioskStatus} />
                    </div>
                    <p className={styles.statusNote}>Ready for your documents.</p>
                </div>
            </section>

            <section className={styles.actions}>
                <Link to="/upload" className={styles.primaryButton}>
                    <div className={styles.iconWrapper}>
                        <Printer size={24} />
                    </div>
                    <div className={styles.buttonText}>
                        <span className={styles.buttonTitle}>Start Print Job</span>
                        <span className={styles.buttonDesc}>Upload PDF or Image</span>
                    </div>
                </Link>
            </section>

            <section className={styles.recent}>
                <h2 className={styles.sectionTitle}>Recent Activity</h2>
                <div className={styles.emptyState}>
                    <History size={48} className={styles.emptyIcon} />
                    <p>No print jobs yet. Your history will appear here.</p>
                </div>
            </section>
        </div>
    );
};

export default Home;
