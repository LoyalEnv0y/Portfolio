import SectionTitle from './components/SectionTitle';
import Header from './components/Header';
import PictureBox from './components/PictureBox';
import About from './components/About';

const App = () => {
	return (
		<div className="overflow-x-hidden">
			<Header />

			<main className="my-10 flex min-h-screen w-screen flex-col items-center px-5">
				<section className="flex w-full flex-col items-center justify-center gap-y-5 font-rubik">
					<SectionTitle text="Hakkımda" />

					<PictureBox />

					<About />
				</section>
			</main>
		</div>
	);
};

export default App;
