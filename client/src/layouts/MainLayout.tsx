import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import MainPageHeader from '../components/mainPage/Header';
/*
	-------------------------------------- 🔌 --------------------------------------
	Outlet does what the children does in react vanilla.
*/
const MainLayout = () => {
	return (
		<div className="bg-[#00110B] font-poppins text-white overflow-x-hidden large:w-[1920px]">
			<MainPageHeader />
			<NavBar />

			<section className='px-10'>
				<Outlet />
			</section>
		</div>
	);
};

export default MainLayout;
