import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface PProps
	extends DetailedHTMLProps<
		HTMLAttributes<HTMLParagraphElement>,
		HTMLParagraphElement
	> {
	size?: 'small' | 'normal' | 'large';
	children: ReactNode;
}
