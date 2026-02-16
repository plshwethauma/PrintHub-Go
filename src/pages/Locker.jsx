import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Unlock, QrCode } from 'lucide-react';
import styles from './Locker.module.css';

const Locker = () => {
    const navigate = useNavigate();
    const [unlocked, setUnlocked] = useState(false);
    const [countdown, setCountdown] = useState(30);
    const orderId = sessionStorage.getItem('orderId') || 'PH12345678';
    const otp = Math.floor(1000 + Math.random() * 9000);

    useEffect(() => {
        if (unlocked && countdown > 0) {
            const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [unlocked, countdown]);

    const handleUnlock = () => {
        setUnlocked(true);
    };

    const handleComplete = () => {
        sessionStorage.clear();
        navigate('/');
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Locker Pickup</h1>

            {!unlocked ? (
                <div className={styles.unlockSection}>
                    <div className={styles.qrCard}>
                        <div className={styles.qrPlaceholder}>
                            <QrCode size={120} className={styles.qrIcon} />
                        </div>
                        <p className={styles.qrLabel}>Scan at Kiosk</p>
                    </div>

                    <div className={styles.divider}>
                        <span className={styles.dividerText}>OR</span>
                    </div>

                    <div className={styles.otpCard}>
                        <div className={styles.otpLabel}>Enter OTP at Kiosk</div>
                        <div className={styles.otpDisplay}>{otp}</div>
                    </div>

                    <div className={styles.lockerDetails}>
                        <div className={styles.detailRow}>
                            <span>Locker Number</span>
                            <span className={styles.detailValue}>A3</span>
                        </div>
                        <div className={styles.detailRow}>
                            <span>Order ID</span>
                            <span className={styles.detailValue}>{orderId}</span>
                        </div>
                    </div>

                    <button onClick={handleUnlock} className={styles.unlockBtn}>
                        <Unlock size={20} />
                        <span>Simulate Unlock</span>
                    </button>

                    <p className={styles.note}>
                        In real deployment, scanning QR or entering OTP at the kiosk will unlock the locker.
                    </p>
                </div>
            ) : (
                <div className={styles.successSection}>
                    <div className={styles.successIcon}>
                        <Unlock size={64} />
                    </div>

                    <h2 className={styles.successTitle}>Locker Unlocked!</h2>
                    <p className={styles.successDesc}>Please collect your documents from Locker A3</p>

                    <div className={styles.timerCard}>
                        <Lock size={24} className={styles.timerIcon} />
                        <div className={styles.timerText}>
                            <span className={styles.timerLabel}>Auto-lock in</span>
                            <span className={styles.timerValue}>{countdown}s</span>
                        </div>
                    </div>

                    <button onClick={handleComplete} className={styles.completeBtn}>
                        I've Collected My Prints
                    </button>

                    <p className={styles.securityNote}>
                        🔒 Locker will automatically lock after timer expires for security.
                    </p>
                </div>
            )}
        </div>
    );
};

export default Locker;
