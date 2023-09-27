import SectionTitle from './components/SectionTitle';
import Header from './components/Header';
import PictureBox from './components/PictureBox';
import About from './components/About';
import SectionContainer from './components/SectionContainer';
import Techs from './components/Techs';
import Projects from './components/Projects';

const App = () => {
	return (
		<div className="scrollbar-none overflow-x-hidden bg-black">
			<Header />

			<main className="my-10 flex min-h-screen w-screen flex-col items-center gap-y-20 px-5 font-rubik text-white">
				<SectionContainer>
					<SectionTitle text="HAKKIMDA" />

					<PictureBox />

					<About />
				</SectionContainer>

				<SectionContainer>
					<SectionTitle text="TEKNOLOJİLER" />

					<Techs />
				</SectionContainer>

				<SectionContainer>
					<SectionTitle text="Projeler" />

					<Projects />
				</SectionContainer>
			</main>
		</div>
	);
};

export default App;
