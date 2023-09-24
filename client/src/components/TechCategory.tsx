import TechsData from '../data/Techs';

type TechCategoryProps = {
	title: string;
	category: 'langs' | 'libraries' | 'frameworks' | 'databases' | 'tools';
	known: boolean;
};

const TechCategory = ({ title, category, known }: TechCategoryProps) => {
	const techs = TechsData[category].filter((tech) => tech.learned === known);

	return (
		<div className="tech-card-outer flex h-60 w-full items-center justify-center rounded-3xl shadow-[-3px_3px_4px_0px_rgba(241,154,255,0.25)]">
			<div className="tech-card-inner flex h-[calc(100%-4px)] w-[calc(100%-4px)] flex-col items-center gap-y-3  rounded-3xl p-3">
				<h4 className="text-sm">{title}</h4>

				<div className="flex w-full flex-wrap gap-2 overflow-y-auto">
					{techs.map((tech) => (
						<div
							className="flex h-20 w-14 items-center justify-center rounded-lg border-[3px] bg-white"
							style={{ borderColor: tech.colorHex }}
						>
							<img src={tech.logoUrl} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default TechCategory;
