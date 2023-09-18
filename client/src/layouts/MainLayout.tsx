import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import MainPageHeader from '../components/mainPage/Header';
/*
	-------------------------------------- 🔌 --------------------------------------
	Outlet does what the children does in react vanilla.
*/
const MainLayout = () => {
	return (
		<div className="overflow-x-hidden bg-[#00110B] font-poppins text-white large:w-[1920px]">
			<MainPageHeader />
			<NavBar />

			<Outlet />
		</div>
	);
};

export default MainLayout;
