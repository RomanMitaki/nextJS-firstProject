import { HeaderProps } from './Header.props';
import styles from './Header.module.css';
import { JSX } from 'react';

export const Header = ({ ...props }: HeaderProps): JSX.Element => {
	return (
		<div className={styles.header} {...props}>
			Header
		</div>
	);
};
