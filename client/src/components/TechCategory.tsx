import TechsData from '../data/Techs';
import { Tech } from '../types';

type TechCategoryProps = {
	title: string;
	category: 'langs' | 'libraries' | 'frameworks' | 'databases' | 'tools';
	known: boolean;
};

const TechCategory = ({ title, category, known }: TechCategoryProps) => {
	const filterTechs = (techs: Tech[]) => {
		return techs.filter((tech) => tech.learned === known);
	};

	return (
		<div className="w-full">
			<h4 className="mb-2 text-sm font-semibold">{title}</h4>
			<div className={'overflow-auto'}>
				<div className="mb-2 flex gap-x-5">
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
		</div>
	);
};

export default TechCategory;
