import { PProps } from './P.props';
import styles from './P.module.css';
import { JSX } from 'react';
import cn from 'classnames';

export const P = (props: PProps): JSX.Element => {
	const { children, className, size = 'normal', ...otherProps } = props;
	return (
		<p
			className={cn(styles.p, className, {
				[styles.small]: size === 'small',
				[styles.normal]: size === 'normal',
				[styles.large]: size === 'large'
			})}
			{...otherProps}
		>
			{children}
		</p>
	);
};
