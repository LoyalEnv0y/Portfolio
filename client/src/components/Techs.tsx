import TechCategory from './TechCategory';

const Techs = () => {
	return (
		<>
			<div className="flex w-full flex-col items-center gap-y-5 rounded-t-3xl bg-primary p-4">
				<h3 className="mt-5 text-lg font-bold">Bildiklerim</h3>
				<TechCategory
					title="Programlama Dilleri"
					category="langs"
					known={true}
				/>
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

			<div className="flex w-full flex-col items-center gap-y-5 rounded-b-3xl bg-primary p-4">
				<h3 className="mt-5 text-lg font-bold">Öğreneceklerim</h3>

				<TechCategory
					title="Programlama Dilleri"
					category="langs"
					known={false}
				/>
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
		</>
	);
};

export default Techs;
