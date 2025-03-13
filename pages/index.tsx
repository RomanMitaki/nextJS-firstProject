import React, { JSX } from 'react';
import { Button, Htag, P, Tag } from '@/components';

export default function Home(): JSX.Element {
	return (
		<>
			<Htag tag="h1">Текст</Htag>
			<Htag tag="h2">Текст</Htag>
			<Htag tag="h3">Текст</Htag>
			<Button appearance="primary" arrow={'right'}>
				Кнопка
			</Button>
			<Button appearance="ghost" arrow="down">
				Кнопка
			</Button>
			<P size="small">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
				consequuntur dolores ducimus eius enim libero natus nemo nihil nostrum
				nulla perferendis, quia sed velit voluptates voluptatum? Aliquid odit
				sequi sint.
			</P>
			<P>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
				consequuntur dolores ducimus eius enim libero natus nemo nihil nostrum
				nulla perferendis, quia sed velit voluptates voluptatum? Aliquid odit
				sequi sint.
			</P>
			<P size="large">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
				consequuntur dolores ducimus eius enim libero natus nemo nihil nostrum
				nulla perferendis, quia sed velit voluptates voluptatum? Aliquid odit
				sequi sint.
			</P>
			<Tag size="s">Ghost</Tag>
			<Tag size="m" color="red">
				Red
			</Tag>
			<Tag size="s" color="green">
				Green
			</Tag>
			<Tag color="primary">Green</Tag>
		</>
	);
}
