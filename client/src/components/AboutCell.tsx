import { useState } from 'react';
import { AboutCellContent } from '../types';
import { twMerge } from 'tailwind-merge';
import classNames from 'classnames';
import { motion } from 'framer-motion';

type AboutCellProps = {
	cell: AboutCellContent;
};

const AboutCell = ({ cell }: AboutCellProps) => {
	const [activeImgIdx, setActiveImgIdx] = useState(0);

	const getTextBoxClasses = (idx: number): string => {
		return twMerge(
			classNames('group flex items-center w-11/12 gap-x-4 cursor-pointer', {
				'font-semibold': activeImgIdx === idx,
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
				'w-[90%] leading-relaxed transition group-hover:translate-x-3 text-xl',
				{ 'translate-x-3 text-[#84d4ff]': activeImgIdx === idx }
			)
		);
	};

	const getSvgContainer = (cell: AboutCellContent) => {
		if (!cell.svgLinks) return;
		return (
			<div className="flex max-h-full max-w-full flex-wrap gap-10">
				{cell.svgLinks.map((svg, i) => (
					<motion.div
						initial={{ x: 1000, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{
							x: {
								duration: 0.2,
								delay: i / 10,
								type: 'spring',
								stiffness: 70,
								damping: 12,
							},
						}}
						className="flex h-32 w-32 items-center justify-center rounded-xl bg-[#2d2d2d]"
					>
						<img
							src={`/assets/${svg}`}
							alt=""
							className="h-28 w-28 rounded-xl"
						/>
					</motion.div>
				))}
			</div>
		);
	};

	return (
		<section className="flex h-full p-10">
			<div className="flex h-full w-3/4 flex-col items-center p-3">
				<motion.h2
					initial={{ opacity: 0, x: -1000 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{
						duration: 1,
						type: 'spring',
					}}
					className="mt-10 flex h-1/6 gap-x-5 text-4xl font-bold"
				>
					{cell.title}
					{cell.titleSignLink && (
						<img
							src={`/assets/${cell.titleSignLink}`}
							className="h-12 w-12"
						/>
					)}
				</motion.h2>

				<div className="flex h-5/6 flex-col items-center gap-y-10">
					{cell.body.map((row, i) => (
						<motion.div
							initial={{ opacity: 0, x: -1000 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{
								duration: 1,
								delay: i / 10 + 0.1,
								type: 'spring',
							}}
							className={getTextBoxClasses(i)}
							key={i}
							onClick={() => setActiveImgIdx(i)}
						>
							<div className={getTextIconClasses(i)}></div>
							<p className={getTextClasses(i)}>{row}</p>
						</motion.div>
					))}
				</div>
			</div>
			<div className="flex h-full w-2/4 items-center justify-center">
				{cell.imageLinks && (
					<div
						className="h-96 w-96 rounded-3xl bg-cover bg-center bg-no-repeat"
						style={{
							backgroundImage: `url(/images/${cell.imageLinks[activeImgIdx]})`,
						}}
					/>
				)}

				{getSvgContainer(cell)}
			</div>
		</section>
	);
};

export default AboutCell;
