import { useState } from 'react';
import { AboutCellContent } from '../types';
import { twMerge } from 'tailwind-merge';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import { v4 as uuid } from 'uuid';

type AboutCellProps = {
	cell: AboutCellContent;
	direction: number;
};

const AboutCell = ({ cell, direction }: AboutCellProps) => {
	const [activeImgIdx, setActiveImgIdx] = useState(0);

	const getTextBoxClasses = (idx: number): string => {
		return twMerge(
			classNames('group flex items-center gap-x-4 cursor-pointer', {
				'font-semibold': activeImgIdx === idx,
			})
		);
	};

	const getTextIconClasses = (idx: number): string => {
		return twMerge(
			classNames(
				'h-2 w-2 bg-secondary transition group-hover:rotate-[135deg] group-hover:scale-150 rounded-sm',
				{ 'rotate-[135deg] scale-150': activeImgIdx === idx }
			)
		);
	};

	const getTextClasses = (idx: number): string => {
		return twMerge(
			classNames(
				'w-[90%] leading-relaxed transition group-hover:translate-x-3 text-sm',
				{ 'translate-x-3': activeImgIdx === idx }
			)
		);
	};

	const getSvgContainer = (cell: AboutCellContent) => {
		if (!cell.svgLinks) return;

		return (
			<div className="flex max-h-full max-w-full flex-wrap justify-center gap-5">
				{cell.svgLinks.map((svg, i) => (
					<motion.div
						initial={{ x: direction > 0 ? -1000 : 1000, opacity: 0 }}
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
						className="bg-neutral flex h-16 w-16 items-center justify-center rounded-xl"
						key={uuid()}
					>
						<img
							src={`/assets/${svg}`}
							alt=""
							className="h-12 w-12 rounded-xl"
						/>
					</motion.div>
				))}
			</div>
		);
	};

	return (
		<section className="my-5 w-full">
			<div className="flex flex-col items-center gap-y-5">
				<motion.h3
					initial={{ opacity: 0, x: direction > 0 ? -1000 : 1000 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{
						duration: 1,
						type: 'spring',
					}}
					className="flex gap-x-4 text-lg font-bold items-center"
				>
					{cell.title}
					{cell.titleSignLink && (
						<img
							src={`/assets/${cell.titleSignLink}`}
							className="h-5 w-5"
						/>
					)}
				</motion.h3>

				<div className="flex h-5/6 flex-col items-center gap-y-10">
					{cell.body.map((row, i) => (
						<motion.div
							initial={{ opacity: 0, x: direction > 0 ? -1000 : 1000 }}
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
			
			<div className="mt-10 flex items-center justify-center">
				{cell.imageLinks && (
					<div
						className="h-56 w-56 rounded-3xl bg-cover bg-center bg-no-repeat"
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
