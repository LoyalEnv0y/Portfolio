import { FC, useState } from 'react';
import { AboutCellContent } from '../types';
import { twMerge } from 'tailwind-merge';
import classNames from 'classnames';

type AboutCellProps = {
	cell: AboutCellContent;
};

const AboutCell: FC<AboutCellProps> = ({ cell }) => {
	const [activeImgIdx, setActiveImgIdx] = useState(0);

	const contentBodyClasses = twMerge(
		classNames('flex h-5/6 flex-col gap-y-10', {
			'justify-start mt-10': cell.body.length === 1,
		})
	);

	const getTextBoxClasses = (idx: number): string => {
		return twMerge(
			classNames('group flex items-center gap-x-4 cursor-pointer', {
				'font-bold': activeImgIdx === idx,
			})
		);
	};

	const getTextIconClasses = (idx: number): string => {
		return twMerge(
			classNames(
				'h-2 w-2 bg-[#00A3FF] transition group-hover:rotate-[135deg] group-hover:scale-150 rounded-sm',
				{ 'rotate-[135deg] scale-150': activeImgIdx === idx }
			)
		);
	};

	const getTextClasses = (idx: number): string => {
		return twMerge(
			classNames(
				'w-[90%] leading-relaxed transition group-hover:translate-x-2',
				{ 'translate-x-2': activeImgIdx === idx }
			)
		);
	};

	return (
		<div className="flex h-full w-full">
			<p id={cell.index}></p>
			<section className="flex h-full w-1/2 flex-col items-center p-3">
				<h2 className="mt-10 h-1/6 text-4xl font-bold">{cell.title}</h2>

				<div className={contentBodyClasses}>
					{cell.body.map((row, i) => (
						<div
							className={getTextBoxClasses(i)}
							key={i}
							onClick={() => setActiveImgIdx(i)}
						>
							<div className={getTextIconClasses(i)}></div>
							<p className={getTextClasses(i)}>{row}</p>
						</div>
					))}
				</div>
			</section>
			<section className="flex h-full w-1/2 items-center justify-center">
				{cell.imageLinks && (
					<div
						className="h-96 w-96 bg-cover bg-center bg-no-repeat rounded-3xl"
						style={{
							backgroundImage: `url(/images/${cell.imageLinks[activeImgIdx]})`,
						}}
					/>
				)}
			</section>
		</div>
	);
};

export default AboutCell;
