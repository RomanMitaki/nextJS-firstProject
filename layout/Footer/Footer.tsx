import { FooterProps } from './Footer.props';
import styles from './Footer.module.css';
import { JSX } from 'react';

export const Footer = ({ ...props }: FooterProps): JSX.Element => {
	return (
		<div className={styles.footer} {...props}>
			Footer
		</div>
	);
};
