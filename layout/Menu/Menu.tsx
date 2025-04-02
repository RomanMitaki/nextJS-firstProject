import styles from './Menu.module.css';
import React, { JSX, useContext } from 'react';
import { AppContext } from '@/context/app.context';
import { FirstLevelMenuItem, PageItem } from '@/interfaces/menu.interface';
import CoursesIcon from './icons/courses.svg';
import ServicesIcon from './icons/services.svg';
import BooksIcon from './icons/books.svg';
import ProductsIcon from './icons/products.svg';
import { TopLevelCategory } from '@/interfaces/page.interface';
import cn from 'classnames';

const firstLevelMenu: FirstLevelMenuItem[] = [
	{
		route: 'courses',
		name: 'Курсы',
		icon: <CoursesIcon />,
		id: TopLevelCategory.Courses
	},
	{
		route: 'services',
		name: 'Сервисы',
		icon: <ServicesIcon />,
		id: TopLevelCategory.Services
	},
	{
		route: 'books',
		name: 'Книги',
		icon: <BooksIcon />,
		id: TopLevelCategory.Books
	},
	{
		route: 'products',
		name: 'Товары',
		icon: <ProductsIcon />,
		id: TopLevelCategory.Products
	}
];

export const Menu = (): JSX.Element => {
	const { menu, firstCategory } = useContext(AppContext);

	const buildFirstLevelMenu = (): JSX.Element => {
		return (
			<>
				{firstLevelMenu.map((menu) => (
					<div key={menu.route}>
						<a href={`/${menu.route}`}>
							<div
								className={cn(styles['first-level'], {
									[styles['first-level-active']]: menu.id === firstCategory
								})}
							>
								{menu.icon}
								<span>{menu.name}</span>
							</div>
						</a>
						{menu.id === firstCategory && buildSecondLevelMenu(menu)}
					</div>
				))}
			</>
		);
	};

	const buildSecondLevelMenu = (menuItem: FirstLevelMenuItem) => {
		return (
			<div className={styles['second-block']}>
				{menu.map((m) => (
					<div key={m._id.secondCategory}>
						<div className={styles['second-level']}>{m._id.secondCategory}</div>
						<div
							className={cn(styles['second-level-block'], {
								[styles['second-level-block-opened']]: m.isOpened
							})}
						>
							{buildThirdLevel(m.pages, menuItem.route)}
						</div>
					</div>
				))}
			</div>
		);
	};

	const buildThirdLevel = (pages: PageItem[], route: string) => {
		return pages.map((p) => (
			<a
				key={p._id}
				href={`/${route}/${p.alias}`}
				className={cn(styles['third-level'], {
					[styles['third-level-active']]: false
				})}
			>
				{p.category}
			</a>
		));
	};

	return <div className={styles.menu}>{buildFirstLevelMenu()}</div>;
};
