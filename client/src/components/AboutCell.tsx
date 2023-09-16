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
				{ 'translate-x-3 text-[#00A3FF]': activeImgIdx === idx }
			)
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
					className="mt-10 h-1/6 text-4xl font-bold"
				>
					{cell.title}
				</motion.h2>

				<div className="flex h-5/6 flex-col gap-y-10 items-center">
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
			</div>
		</section>
	);
};

export default AboutCell;
