import { LayoutProps } from './Layout.props';
import { FunctionComponent, JSX } from 'react';
import { Header } from '@/layout/Header/Header';
import { Sidebar } from '@/layout/Sidebar/Sidebar';
import { Footer } from '@/layout/Footer/Footer';
import React from 'react';

export const Layout = (props: LayoutProps): JSX.Element => {
	const { children } = props;
	return (
		<>
			<Header />
			<div>
				<Sidebar />
				<div>{children}</div>
			</div>
			<Footer />
		</>
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
