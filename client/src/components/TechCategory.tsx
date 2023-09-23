import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';
import TechsData from '../data/Techs';
import { Tech } from '../types';

type TechCategoryProps = {
	title: string;
	category: 'langs' | 'libraries' | 'frameworks' | 'databases' | 'tools';
	known: boolean;
	className?: string;
};

const TechCategory = ({ title, category, known, className }: TechCategoryProps) => {
	const classes = twMerge(classNames('w-full overflow-auto', className));

	const filterTechs = (techs: Tech[]) => {
		return techs.filter((tech) => tech.learned === known);
	};

	return (
		<div className={classes}>
			<h4 className="mb-5 text-sm font-semibold">{title}</h4>

			<div className="mb-5 flex gap-x-5">
				{filterTechs(TechsData[category]).map((item) => (
					<div
						key={item.id}
						className="flex h-28 w-20 flex-none flex-col items-center justify-evenly rounded-xl bg-neutral"
					>
						<img className="h-14 w-14" src={item.logoUrl} />
						<p
							className="text-center text-sm"
							style={{ color: item.colorHex }}
						>
							{item.title}
						</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default TechCategory;
