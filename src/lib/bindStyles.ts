import classNames from 'classnames/bind';

/**
 * Bind styles from CSS Modules into a classNames-compatible function.
 *
 * @param styles - The imported CSS module object
 * @returns A function that behaves like classNames but auto maps class keys to actual class names
 *
 * @example
 * const cx = bindStyles(styles);
 * cx('button', { active: true }) // => "button_abc active_xyz"
 */
export function bindStyles<T extends Record<string, string>>(styles: T) {
  return classNames.bind(styles);
}
