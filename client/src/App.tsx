import SectionTitle from './components/SectionTitle';
import Header from './components/Header';
import PictureBox from './components/PictureBox';
import About from './components/About';
import SectionContainer from './components/SectionContainer';

const App = () => {
	return (
		<div className="overflow-x-hidden">
			<Header />

			<main className="my-10 flex min-h-screen w-screen flex-col items-center gap-y-10 px-5 font-rubik">
				<SectionContainer className="gap-y-5">
					<SectionTitle text="HAKKIMDA" />

					<PictureBox />

					<About />
				</SectionContainer>

				<SectionContainer>
					<SectionTitle text="TEKNOLOJİLER" />
				</SectionContainer>
			</main>
		</div>
	);
};

export default App;
