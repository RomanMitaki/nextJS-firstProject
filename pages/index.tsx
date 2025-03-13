import React, { JSX } from 'react';
import { Htag } from '@/components';

export default function Home(): JSX.Element {
	return (
		<>
			<Htag tag="h1">Текст</Htag>
			<Htag tag="h2">Текст</Htag>
			<Htag tag="h3">Текст</Htag>
		</>
	);
}
