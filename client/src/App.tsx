import SectionTitle from './components/SectionTitle';
import MainPageHeader from './components/mainPage/Header';

const App = () => {
	return (
		<div className="bg-[fill: linear-gradient(177deg, #FFF 10.28%, #D4F5FF 25.23%, #A7EAFF 40.18%, #7EE0FF 55.14%, #58D6FF 70.09%, #35CEFF 85.05%, #00C1FF 100%);] w-full overflow-x-hidden font-poppins text-white large:w-[1920px]">
			<MainPageHeader />

			<section>
				<SectionTitle text="Hakkımda" />
			</section>
		</div>
	);
};

export default App;
