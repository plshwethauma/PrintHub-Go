import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload as UploadIcon, FileText, X } from 'lucide-react';
import styles from './Upload.module.css';

const Upload = () => {
    const navigate = useNavigate();
    const [file, setFile] = useState(null);
    const [settings, setSettings] = useState({
        colorMode: 'bw',
        pages: 'all',
        copies: 1,
        pageSize: 'a4',
        pageCount: 5 // Default simulated page count
    });

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            setFile(selectedFile);
            // Simulate random page detection for realism (3-15 pages)
            const randomPages = Math.floor(Math.random() * 12) + 3;
            setSettings(prev => ({ ...prev, pageCount: randomPages }));
        }
    };

    const handleRemoveFile = () => {
        setFile(null);
    };

    const calculatePrice = () => {
        const pricePerPage = settings.colorMode === 'bw' ? 2 : 5;
        return settings.pageCount * pricePerPage * settings.copies;
    };

    const handleProceed = () => {
        if (file) {
            // Store order details in sessionStorage for next screen
            sessionStorage.setItem('printOrder', JSON.stringify({
                fileName: file.name,
                settings,
                totalPrice: calculatePrice()
            }));
            navigate('/payment');
        }
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Upload Document</h1>
            <p className={styles.subtitle}>Select a PDF or image to print</p>

            {!file ? (
                <div className={styles.uploadZone}>
                    <input
                        type="file"
                        id="fileInput"
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={handleFileChange}
                        className={styles.fileInput}
                    />
                    <label htmlFor="fileInput" className={styles.uploadLabel}>
                        <UploadIcon size={48} className={styles.uploadIcon} />
                        <span className={styles.uploadText}>Tap to upload</span>
                        <span className={styles.uploadHint}>PDF, JPG, PNG (Max 10MB)</span>
                    </label>
                </div>
            ) : (
                <div className={styles.filePreview}>
                    <div className={styles.fileInfo}>
                        <FileText size={32} className={styles.fileIcon} />
                        <div className={styles.fileDetails}>
                            <span className={styles.fileName}>{file.name}</span>
                            <span className={styles.fileSize}>{(file.size / 1024).toFixed(2)} KB</span>
                        </div>
                        <button onClick={handleRemoveFile} className={styles.removeBtn}>
                            <X size={20} />
                        </button>
                    </div>
                </div>
            )}

            {file && (
                <div className={styles.settingsSection}>
                    <h2 className={styles.sectionTitle}>Print Settings</h2>

                    <div className={styles.settingGroup}>
                        <label className={styles.settingLabel}>Color Mode</label>
                        <div className={styles.radioGroup}>
                            <label className={styles.radioOption}>
                                <input
                                    type="radio"
                                    name="colorMode"
                                    value="bw"
                                    checked={settings.colorMode === 'bw'}
                                    onChange={(e) => setSettings({ ...settings, colorMode: e.target.value })}
                                />
                                <span>Black & White (₹2/page)</span>
                            </label>
                            <label className={styles.radioOption}>
                                <input
                                    type="radio"
                                    name="colorMode"
                                    value="color"
                                    checked={settings.colorMode === 'color'}
                                    onChange={(e) => setSettings({ ...settings, colorMode: e.target.value })}
                                />
                                <span>Color (₹5/page)</span>
                            </label>
                        </div>
                    </div>

                    <div className={styles.settingGroup}>
                        <label className={styles.settingLabel}>Detected Pages</label>
                        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                            <input
                                type="number"
                                min="1"
                                max="100"
                                value={settings.pageCount}
                                onChange={(e) => setSettings({ ...settings, pageCount: Math.max(1, parseInt(e.target.value) || 1) })}
                                className={styles.numberInput}
                            />
                            <span style={{ fontSize: '0.875rem', color: 'var(--color-text-light)' }}>(Edit if incorrect)</span>
                        </div>
                    </div>

                    <div className={styles.settingGroup}>
                        <label className={styles.settingLabel}>Copies</label>
                        <input
                            type="number"
                            min="1"
                            max="10"
                            value={settings.copies}
                            onChange={(e) => setSettings({ ...settings, copies: Math.max(1, parseInt(e.target.value) || 1) })}
                            className={styles.numberInput}
                        />
                    </div>

                    <div className={styles.priceCard}>
                        <div className={styles.priceRow}>
                            <span>Total Pages</span>
                            <span>{settings.pageCount} pages</span>
                        </div>
                        <div className={styles.priceRow}>
                            <span>Copies</span>
                            <span>{settings.copies}</span>
                        </div>
                        <div className={`${styles.priceRow} ${styles.totalRow}`}>
                            <span>Total</span>
                            <span className={styles.totalPrice}>₹{calculatePrice()}</span>
                        </div>
                    </div>

                    <button onClick={handleProceed} className={styles.proceedBtn}>
                        Proceed to Payment
                    </button>
                </div>
            )}
        </div>
    );
};

export default Upload;
