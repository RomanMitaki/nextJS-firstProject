import { TagProps } from './Tag.props';
import styles from './Tag.module.css';
import cn from 'classnames';
import { JSX } from 'react';

export const Tag = (props: TagProps): JSX.Element => {
	const {
		size = 's',
		children,
		color = 'ghost',
		href,
		className,
		...otherProps
	} = props;

	return (
		<div
			className={cn(styles.tag, className, {
				[styles.s]: size === 's',
				[styles.m]: size === 'm',
				[styles.ghost]: color === 'ghost',
				[styles.red]: color === 'red',
				[styles.grey]: color === 'grey',
				[styles.green]: color === 'green',
				[styles.primary]: color === 'primary'
			})}
			{...otherProps}
		>
			{href ? <a href={href}>{children}</a> : <>{children}</>}
		</div>
	);
};
