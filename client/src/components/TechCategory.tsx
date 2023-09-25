import { useState } from 'react';
import TechsData from '../data/Techs';

type TechCategoryProps = {
	title: string;
	category: 'langs' | 'libraries' | 'frameworks' | 'databases' | 'tools';
	known: boolean;
};

const TechCategory = ({ title, category, known }: TechCategoryProps) => {
	const techs = TechsData[category].filter((tech) => tech.learned === known);
	const [openTechIds, setOpenTechIds] = useState<string[]>([]);

	const toggleTech = (id: string) => {
		if (!openTechIds.includes(id)) {
			setOpenTechIds([...openTechIds, id]);
		} else {
			setOpenTechIds(openTechIds.filter((techId) => techId !== id));
		}
	};

	return (
		<div className="tech-card-outer flex h-[15.5rem] w-full items-center justify-center rounded-3xl shadow-[-3px_3px_4px_0px_#f19aff40]">
			<div className="tech-card-inner flex h-[calc(100%-4px)] w-[calc(100%-4px)] flex-col items-center gap-y-3  rounded-3xl px-2 py-4">
				<h4 className="text-sm">{title}</h4>

				<div className="grid w-full grid-cols-2 place-items-center gap-2 overflow-y-auto">
					{techs.map((tech) => (
						<div
							className="group flex h-20 w-16 items-center justify-center overflow-hidden rounded-lg border-[3px] bg-white p-1"
							style={{ borderColor: tech.colorHex }}
							onClick={() => toggleTech(tech.id)}
						>
							<div className="relative h-full w-full">
								<div className="absolute flex h-full w-full items-center justify-center rounded-lg transition group-hover:-translate-y-[200%]">
									<img src={tech.logoUrl} />
								</div>

								<div className="absolute top-[200%] flex h-full w-full items-center justify-center rounded-xl transition group-hover:-translate-y-[200%]">
									<p className="text-center text-xs text-black">
										{tech.title}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default TechCategory;
