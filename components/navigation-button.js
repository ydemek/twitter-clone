import React from 'react';
import styles from './navigation-button.module.css';

console.log({ styles });

function NavButton({ children }) {
  return (
    <button type='button' className={styles.navButton}>
      {children}
    </button>
  );
}

export default NavButton;
