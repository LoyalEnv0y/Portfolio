import SectionTitle from './components/SectionTitle';
import Header from './components/Header';
import PictureBox from './components/PictureBox';
import About from './components/About';
import Section from './components/Section';
import Techs from './components/Techs';
import Projects from './components/Projects';
import GradientCard from './components/GradientCard';

const App = () => {
	return (
		<div className="overflow-x-hidden bg-black scrollbar-none">
			<Header />

			<main className="my-10 flex min-h-screen w-screen flex-col items-center gap-y-20 px-5 font-rubik text-white">
				<Section>
					<SectionTitle text="HAKKIMDA" />

					<PictureBox />

					<GradientCard
						start="#20161b"
						middle="#8a365f"
						end="#ff59a9"
						degree={162}
						className="flex w-full flex-col items-center justify-between p-4 shadow-lb shadow-[#ff57a859]"
					>
						<About />
					</GradientCard>
				</Section>

				<Section>
					<SectionTitle text="TEKNOLOJİLER" />

					<Techs />
				</Section>

				<Section>
					<SectionTitle text="PROJELER" />

					<GradientCard
						start="#006e8f"
						middle="#0098c7"
						end="#00c2ff"
						className="shadow-lb shadow-[#00c2ff59]"
					>
						<Projects />
					</GradientCard>
				</Section>

				{/* <GradientCard
					start="#8B8B8B"
					end="#FFC700"
					className="shadow-lb shadow-[#ffc70059]"
				>
				</GradientCard> */}
			</main>
		</div>
	);
};

export default App;

// .projects-card {
// 	background: linear-gradient(
// 		177deg,
// 		#006e8f 0%,
// 		#0098c7 50%,
// 		#00c2ff 100%
// 	);
// }
