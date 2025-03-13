import { ButtonProps } from './Button.props';
import styles from './Button.module.css';
import { JSX } from 'react';
import cn from 'classnames';
import ArrowIcon from './arrow.svg';

export const Button = (props: ButtonProps): JSX.Element => {
	const {
		appearance,
		arrow = 'none',
		children,
		className,
		...otherProps
	} = props;

	return (
		<button
			className={cn(styles.button, className, {
				[styles.primary]: appearance === 'primary',
				[styles.ghost]: appearance === 'ghost'
			})}
			{...otherProps}
		>
			{children}
			{arrow !== 'none' && (
				<span
					className={cn(styles.arrow, {
						[styles.down]: arrow === 'down'
					})}
				>
					<ArrowIcon />
				</span>
			)}
		</button>
	);
};
