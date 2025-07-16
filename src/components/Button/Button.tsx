import React from 'react';
import styles from './Button.module.css';
import { bindStyles } from '../../lib/bindStyles';

function Button(): React.JSX.Element {
  const cx = bindStyles(styles);

  return <button className={cx('')}> Click Me!</button>;
}

export default Button;
