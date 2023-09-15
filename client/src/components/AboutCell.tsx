import { FC } from 'react';
import { AboutCellContent } from '../types';
import { twMerge } from 'tailwind-merge';
import classNames from 'classnames';

type AboutCellProps = {
	cell: AboutCellContent;
};

const AboutCell: FC<AboutCellProps> = ({ cell }) => {
	console.log(cell.imageLinks);

	const textBoxClasses = twMerge(
		classNames('flex h-5/6 flex-col gap-y-10', {
			'justify-start mt-10': cell.body.length === 1,
		})
	);

	return (
		<div className="flex h-full w-full">
			<section className="flex h-full w-1/2 flex-col items-center p-3">
				<h2 className="mt-10 h-1/6 text-4xl font-bold">{cell.title}</h2>

				<div className={textBoxClasses}>
					{cell.body.map((row, i) => (
						<div className="group flex items-center gap-x-4" key={i}>
							<div className="h-2 w-2 bg-[#00A3FF] transition group-hover:rotate-[135deg] group-hover:scale-150"></div>
							<p className="w-[90%] leading-relaxed transition group-hover:translate-x-2">
								{row}
							</p>
						</div>
					))}
				</div>
			</section>
			<section className="flex h-full w-1/2 items-center justify-center">
				<div className={`bg-[url('/images/${cell.imageLinks[0]}')] w-full h-full`}></div>
			</section>
		</div>
	);
};

export default AboutCell;

// bg-[url('/images/header/Trees.png')]