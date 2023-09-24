import TechCategory from './TechCategory';

const Techs = () => {
	return (
		<>
			<div className="flex w-full flex-col items-center gap-y-10">
				<h3 className="mt-5 text-lg font-bold">Bildiklerim</h3>
				<div className="grid w-full grid-cols-2 gap-x-2 gap-y-3">
					<TechCategory title="Diller" category="langs" known={true} />
					<TechCategory
						title="Kütüphaneler"
						category="libraries"
						known={true}
					/>
					<TechCategory
						title="Databaseler"
						category="databases"
						known={true}
					/>
					<TechCategory
						title="Diğer / Araçlar"
						category="tools"
						known={true}
					/>
				</div>
			</div>

			<div className="flex w-full flex-col items-center gap-y-10">
				<h3 className="mt-5 text-lg font-bold">Öğreneceklerim</h3>
				<div className="grid w-full grid-cols-2 gap-x-2 gap-y-3">
					<TechCategory title="Diller" category="langs" known={false} />
					<TechCategory
						title="Kütüphaneler"
						category="libraries"
						known={false}
					/>
					<TechCategory
						title="Frameworkler"
						category="frameworks"
						known={false}
					/>
					<TechCategory
						title="Databaseler"
						category="databases"
						known={false}
					/>
					<TechCategory
						title="Diğer / Araçlar"
						category="tools"
						known={false}
					/>
				</div>
			</div>
		</>
	);
};

export default Techs;
