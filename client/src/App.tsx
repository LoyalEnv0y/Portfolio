import SectionTitle from './components/SectionTitle';
import Header from './components/Header';
import PictureBox from './components/PictureBox';
import About from './components/About';

const App = () => {
	return (
		<>
			<Header />

			<main className="my-10 flex min-h-screen flex-col items-center px-10">
				<section className="flex flex-col items-center justify-center gap-y-10">
					<SectionTitle text="Hakkımda" />

					<PictureBox />

					<About />
				</section>
			</main>
		</>
	);
};

export default App;
