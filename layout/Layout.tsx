import { LayoutProps } from './Layout.props';
import styles from './Layout.module.css';
import { FunctionComponent, JSX } from 'react';
import { Header } from '@/layout/Header/Header';
import { Sidebar } from '@/layout/Sidebar/Sidebar';
import { Footer } from '@/layout/Footer/Footer';
import React from 'react';

export const Layout = (props: LayoutProps): JSX.Element => {
	const { children } = props;
	return (
		<div className={styles.wrapper}>
			<Header className={styles.header} />
			<Sidebar className={styles.sidebar} />
			<div className={styles.body}>{children}</div>
			<Footer className={styles.footer} />
		</div>
	);
};

export const withLayout = <T extends Record<string, unknown>>(
	Component: FunctionComponent<T>
) => {
	return function withLayoutComponent(props: T): JSX.Element {
		return (
			<Layout>
				<Component {...props} />
			</Layout>
		);
	};
};
