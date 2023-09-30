import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';
import { ReactNode } from 'react';

type SectionProps = {
	className?: string;
	children?: ReactNode;
};

const Section = ({ className, children }: SectionProps) => {
	const classes = twMerge(
		classNames('w-full flex flex-col items-center gap-y-5', className)
	);

	return <section className={classes}>{children}</section>;
};

export default Section;
