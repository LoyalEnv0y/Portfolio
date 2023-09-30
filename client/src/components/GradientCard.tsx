import classNames from 'classnames';
import { ReactNode } from 'react';
import {
	createTailwindMerge,
	getDefaultConfig,
	mergeConfigs,
} from 'tailwind-merge';

const twMerge = createTailwindMerge(() =>
	mergeConfigs(getDefaultConfig(), {
		classGroups: {
			shadow: [{ shadow: ['lb'] }],
		},
	})
);

function hexToRgb(hex: string): string {
	// Remove the hash if it exists
	hex = hex.replace(/^#/, '');

	// Parse the hex value to RGB components
	const bigint = parseInt(hex, 16);
	const r = (bigint >> 16) & 255;
	const g = (bigint >> 8) & 255;
	const b = bigint & 255;

	// Return the RGB components as an object
	return `${r}, ${g}, ${b}`;
}

type GradientCardProps = {
	// All colors should be hexadecimal
	start: string;
	middle?: string;
	end: string;
	degree?: number;
	borderColor?: string;
	className?: string;
	children: ReactNode;
};

const GradientCard = ({
	start,
	middle,
	end,
	degree = 140,
	borderColor,
	className,
	children,
}: GradientCardProps) => {
	const classes = twMerge(classNames(`w-full border-2 rounded-3xl`, className));

	const getBgGradient = () => {
		const startRGB = `rgba(${hexToRgb(start)}, 0.6) 0%,`;
		const middleRGB = middle ? `rgba(${hexToRgb(middle)}, 0.8) 50%,` : '';
		const endRGB = `rgb(${hexToRgb(end)}) 100%`;

		return `linear-gradient(${degree}deg, ${startRGB} ${middleRGB} ${endRGB})`;
	};

	return (
		<div
			className={classes}
			style={{
				borderColor: borderColor || end,
				background: getBgGradient(),
			}}
		>
			{children}
		</div>
	);
};

export default GradientCard;
