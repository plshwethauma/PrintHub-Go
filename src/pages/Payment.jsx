import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCard, Wallet, CheckCircle } from 'lucide-react';
import styles from './Payment.module.css';

const Payment = () => {
    const navigate = useNavigate();
    const [paymentMethod, setPaymentMethod] = useState('upi');
    const [processing, setProcessing] = useState(false);

    const orderData = JSON.parse(sessionStorage.getItem('printOrder') || '{}');

    const handlePayment = () => {
        setProcessing(true);

        // Simulate payment processing
        setTimeout(() => {
            const orderId = 'PH' + Date.now().toString().slice(-8);
            sessionStorage.setItem('orderId', orderId);
            navigate('/status');
        }, 2000);
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Payment</h1>

            <div className={styles.orderSummary}>
                <h2 className={styles.summaryTitle}>Order Summary</h2>
                <div className={styles.summaryRow}>
                    <span>Document</span>
                    <span className={styles.summaryValue}>{orderData.fileName || 'document.pdf'}</span>
                </div>
                <div className={styles.summaryRow}>
                    <span>Mode</span>
                    <span className={styles.summaryValue}>
                        {orderData.settings?.colorMode === 'bw' ? 'Black & White' : 'Color'}
                    </span>
                </div>
                <div className={styles.summaryRow}>
                    <span>Pages</span>
                    <span className={styles.summaryValue}>{orderData.settings?.pageCount || 5} pages</span>
                </div>
                <div className={styles.summaryRow}>
                    <span>Copies</span>
                    <span className={styles.summaryValue}>{orderData.settings?.copies || 1}</span>
                </div>
                <div className={`${styles.summaryRow} ${styles.totalRow}`}>
                    <span>Total Amount</span>
                    <span className={styles.totalAmount}>₹{orderData.totalPrice || 10}</span>
                </div>
            </div>

            <div className={styles.paymentMethods}>
                <h2 className={styles.sectionTitle}>Payment Method</h2>

                <label className={styles.methodOption}>
                    <input
                        type="radio"
                        name="payment"
                        value="upi"
                        checked={paymentMethod === 'upi'}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    <div className={styles.methodContent}>
                        <CreditCard size={24} className={styles.methodIcon} />
                        <span className={styles.methodText}>UPI / Cards</span>
                    </div>
                </label>

                <label className={styles.methodOption}>
                    <input
                        type="radio"
                        name="payment"
                        value="wallet"
                        checked={paymentMethod === 'wallet'}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    <div className={styles.methodContent}>
                        <Wallet size={24} className={styles.methodIcon} />
                        <span className={styles.methodText}>Campus Wallet</span>
                    </div>
                </label>
            </div>

            <button
                onClick={handlePayment}
                className={styles.payBtn}
                disabled={processing}
            >
                {processing ? (
                    <span className={styles.processingText}>Processing...</span>
                ) : (
                    <>
                        <CheckCircle size={20} />
                        <span>Pay ₹{orderData.totalPrice || 10}</span>
                    </>
                )}
            </button>

            <p className={styles.securityNote}>
                🔒 Your payment is secure. Documents are encrypted end-to-end.
            </p>
        </div>
    );
};

export default Payment;
