import React from 'react';
import styles from './Footer.module.css';
import { bindStyles } from '../../lib/bindStyles';

function Footer(): React.JSX.Element {
  const cx = bindStyles(styles);

  return <footer className={cx('')}> Click Me!</footer>;
}

export default Footer;
