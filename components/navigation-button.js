import React from 'react';
import cn from 'classnames';

import styles from './navigation-button.module.css';

console.log({ styles });

function NavButton({ notify, selected, children, ...props }) {
  return (
    <button
      type='button'
      className={cn(styles.navButton, selected && styles.navButtonSelected)}
      {...props}
    >
      {children}
      {notify && <span className={styles.notify}>{notify}</span>}
    </button>
  );
}

export default NavButton;
