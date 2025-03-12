import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang="ru">
			<Head>
				<link
					rel="icon"
					href="/favicon.ico"
					sizes="16x16"
					type="image/x-icon"
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
