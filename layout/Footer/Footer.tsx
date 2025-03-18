import { FooterProps } from './Footer.props';
import styles from './Footer.module.css';
import { JSX } from 'react';
import { P } from '@/components';
import cn from 'classnames';

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
	return (
		<footer className={cn(styles.footer, className)} {...props}>
			<P className={styles.paragraph}>
				OwlTop © 2020 - {new Date().getFullYear()} Все права защищены
			</P>
			<a className={styles.link} href="#" target="_blank">
				Пользовательское соглашение
			</a>
			<a className={styles.link} href="#" target="_blank">
				Политика конфиденциальности
			</a>
		</footer>
	);
};
