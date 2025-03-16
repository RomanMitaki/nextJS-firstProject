declare module '*.svg' {
	const content: React.FunctionComponent<React.SVGAttributes<SVGAElement>>;
	export default content;
}

declare module '*.svg?url' {
	const content: unknown;
	export default content;
}
