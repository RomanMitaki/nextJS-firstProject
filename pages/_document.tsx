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
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="anonymous"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@100..900&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
