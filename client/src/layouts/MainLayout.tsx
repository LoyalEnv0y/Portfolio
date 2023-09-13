import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import MainPageHeader from '../components/mainPage/Header';
/*
	-------------------------------------- 🔌 --------------------------------------
	Outlet does what the children does in react vanilla.
*/
const MainLayout = () => {
	return (
		<div className="bg-[#111928] font-poppins text-white overflow-x-hidden">
			<MainPageHeader />
			<NavBar />

			<section className='px-10'>
				<Outlet />
			</section>
		</div>
	);
};

export default MainLayout;
