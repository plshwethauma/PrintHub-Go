import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Loader, Printer, Package, CheckCircle } from 'lucide-react';
import styles from './Status.module.css';

const Status = () => {
    const navigate = useNavigate();
    const [stage, setStage] = useState(0);
    const orderId = sessionStorage.getItem('orderId') || 'PH12345678';

    const stages = [
        { id: 0, label: 'Processing', desc: 'Sending file to kiosk...', icon: Loader, duration: 2000 },
        { id: 1, label: 'Printing', desc: 'Printing your documents...', icon: Printer, duration: 3000 },
        { id: 2, label: 'Storing', desc: 'Moving to Locker #A3...', icon: Package, duration: 2000 },
        { id: 3, label: 'Ready', desc: 'Ready for pickup!', icon: CheckCircle, duration: 0 }
    ];

    useEffect(() => {
        if (stage < stages.length - 1) {
            const timer = setTimeout(() => {
                setStage(stage + 1);
            }, stages[stage].duration);
            return () => clearTimeout(timer);
        }
    }, [stage]);

    const currentStage = stages[stage];
    const Icon = currentStage.icon;

    const handleCollect = () => {
        navigate('/locker');
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Print Status</h1>
                <div className={styles.orderId}>Order #{orderId}</div>
            </div>

            <div className={styles.statusCard}>
                <div className={`${styles.iconCircle} ${stage === 3 ? styles.complete : styles.processing}`}>
                    <Icon size={48} className={styles.statusIcon} />
                </div>

                <h2 className={styles.stageLabel}>{currentStage.label}</h2>
                <p className={styles.stageDesc}>{currentStage.desc}</p>

                <div className={styles.progressBar}>
                    <div
                        className={styles.progressFill}
                        style={{ width: `${((stage + 1) / stages.length) * 100}%` }}
                    />
                </div>

                <div className={styles.stagesList}>
                    {stages.map((s, idx) => (
                        <div
                            key={s.id}
                            className={`${styles.stageItem} ${idx <= stage ? styles.stageComplete : ''}`}
                        >
                            <div className={styles.stageDot} />
                            <span className={styles.stageName}>{s.label}</span>
                        </div>
                    ))}
                </div>
            </div>

            {stage === 3 && (
                <div className={styles.readySection}>
                    <div className={styles.lockerInfo}>
                        <div className={styles.lockerLabel}>Your Locker</div>
                        <div className={styles.lockerNumber}>A3</div>
                    </div>

                    <button onClick={handleCollect} className={styles.collectBtn}>
                        Unlock & Collect
                    </button>

                    <p className={styles.expiryNote}>
                        ⏱️ Locker will auto-lock in 5 minutes
                    </p>
                </div>
            )}
        </div>
    );
};

export default Status;
