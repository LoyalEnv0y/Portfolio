import TechsData from '../data/Techs';
import { Tech } from '../types';
import TechCategory from './TechCategory';

const Techs = () => {
	const getKnownTech = (techs: Tech[]) => {
		return techs.filter((tech) => tech.learned === true);
	};

	// const getUnknownTech = (techs: Tech[]) => {
	// 	return techs.filter((tech) => tech.learned !== true);
	// };

	return (
		<div className="flex w-full flex-col items-center gap-y-10 rounded-3xl bg-primary p-4">
			<h3 className="mt-5 text-lg font-bold">Bildiklerim</h3>

			<TechCategory
				title="Programlama Dilleri"
				category="langs"
				known={true}
			/>
			<TechCategory title="Kütüphaneler" category="libraries" known={true} />
			<TechCategory title="Databases" category="databases" known={true} />
			<TechCategory title="Other / Tools" category="tools" known={true} />
		</div>
	);
};

export default Techs;
