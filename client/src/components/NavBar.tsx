import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';
import { v4 as uuid } from 'uuid';

type link = {
	id: string;
	content: string;
	to: string;
};

const links: link[] = [
	{ id: uuid(), content: 'Ana Sayfa', to: '/' },
	{ id: uuid(), content: 'Teknolojiler', to: '/' },
	{ id: uuid(), content: 'Sertifikalar', to: '/' },
	{ id: uuid(), content: 'İletişim', to: '/' },
];

const NavBar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const navContainerClasses = twMerge(
		classNames(
			'fixed right-10 top-10 z-50 h-12 w-12 rounded-full transition-[height, width] duration-100',
			{
				'w-screen h-screen rounded-none top-0 right-0 bg-[#282828]':
					isMenuOpen,
			}
		)
	);

	const navToggleButtonClasses = twMerge(
		classNames(
			'fixed right-10 top-10 flex h-12 w-12 bg-white cursor-pointer items-center justify-center rounded-full hover:bg-zinc-300',
			{
				'bg-zinc-200': isMenuOpen,
			}
		)
	);

	const navContent = isMenuOpen && (
		<div className="flex h-full w-full items-center justify-center text-white">
			<nav className="flex h-2/3 w-1/3 flex-col gap-y-4">
				{/* Animations are on the index.css page */}
				{links.map((link) => (
					<div
						key={link.id}
						className="group flex items-center gap-x-10 py-3 hover:text-blue-500"
					>
						<div className="h-2 w-2 bg-fuchsia-600 transition group-hover:rotate-[135deg] group-hover:scale-150" />
						<a
							href={link.to}
							className="text-3xl font-semibold transition group-hover:translate-x-7 group-hover:font-bold"
						>
							{link.content}
						</a>
					</div>
				))}
			</nav>
		</div>
	);

	return (
		<section className={navContainerClasses}>
			<div
				onClick={() => setIsMenuOpen(!isMenuOpen)}
				className={navToggleButtonClasses}
			>
				{isMenuOpen ? <CloseIcon /> : <MenuIcon />}
			</div>

			{navContent}
		</section>
	);
};

export default NavBar;
