import React from 'react';
import styles from './StatusBadge.module.css';

const StatusBadge = ({ status = 'online' }) => {
  const getStatusText = () => {
    switch (status) {
      case 'online': return 'Online';
      case 'busy': return 'Busy';
      case 'offline': return 'Maintenance';
      default: return 'Unknown';
    }
  };

  return (
    <div className={`${styles.badge} ${styles[status]}`}>
      <span className={styles.dot}></span>
      <span className={styles.text}>{getStatusText()}</span>
    </div>
  );
};

export default StatusBadge;
