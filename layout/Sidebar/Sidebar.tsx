import { SidebarProps } from './Sidebar.props';
import styles from './Sidebar.module.css';
import { JSX } from 'react';

export const Sidebar = ({ ...props }: SidebarProps): JSX.Element => {
	return (
		<div className={styles.sidebar} {...props}>
			Sidebar
		</div>
	);
};
