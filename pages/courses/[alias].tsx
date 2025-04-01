import React, { JSX } from 'react';
import { withLayout } from '@/layout/Layout';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import axios from 'axios';
import { MenuItem } from '@/interfaces/menu.interface';
import { TopPageModel } from '@/interfaces/page.interface';
import { ParsedUrlQuery } from 'node:querystring';
import { ProductModel } from '@/interfaces/product.interface';

const firstCategory = 0;

function Course({ products }: CourseProps): JSX.Element {
	return (
		<>
			<>{products && products.length}</>
		</>
	);
}

export default withLayout(Course);

export const getStaticPaths: GetStaticPaths = async () => {
	const { data: menu } = await axios.post<MenuItem[]>(
		process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
		{
			firstCategory
		}
	);
	// Формируем массив адресов
	const paths = menu.flatMap((m) => m.pages.map((p) => '/courses/' + p.alias));

	// Выводим адреса в консоль
	console.log('Paths generated for getStaticPaths:', paths);

	return {
		paths, // Эти пути будут статически сгенерированы
		fallback: true // Включаем fallback для обработки других путей
	};
};

export const getStaticProps: GetStaticProps<CourseProps> = async ({
	params
}: GetStaticPropsContext<ParsedUrlQuery>) => {
	// Логируем params в консоль
	console.log('Params received in getStaticProps:', params);

	if (!params) {
		return {
			notFound: true
		};
	}

	const { data: menu } = await axios.post<MenuItem[]>(
		process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
		{ firstCategory }
	);
	const { data: page } = await axios.get<TopPageModel>(
		process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/byAlias/' + params.alias
	);
	const { data: products } = await axios.post<ProductModel[]>(
		process.env.NEXT_PUBLIC_DOMAIN + '/api/product/find',
		{
			category: page.category,
			limit: 10
		}
	);

	return {
		props: {
			menu,
			firstCategory,
			page,
			products
		}
	};
};

interface CourseProps extends Record<string, unknown> {
	menu: MenuItem[];
	firstCategory: number;
	page: TopPageModel;
	products: ProductModel[];
}
