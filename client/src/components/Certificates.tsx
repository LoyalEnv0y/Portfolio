import { useState } from 'react';
import certificatesData from '../data/Certificates';
import Modal from './Modal';
import { Certificate } from '../types';

const Certificates = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedCert, setSelectedCert] = useState<Certificate>();
	const closeModal = (event: React.MouseEvent) => {
		if (event.target === event.currentTarget) {
			setIsModalOpen(false);
		}
	};

	const modal = (
		<Modal handleClose={closeModal} targetClassName="certificate-modal">
			<div className="flex w-full flex-col items-center gap-y-5 rounded-md px-2 py-5 backdrop-blur-lg sm:h-full sm:w-2/5">
				<img
					src={selectedCert?.imageURL}
					className="rounded-md border shadow-lb"
				/>

				<div className="w-full rounded-md bg-white p-4 text-center text-xl font-bold shadow-lb">
					{selectedCert?.title}
				</div>

				<div className="flex w-full items-center rounded-md bg-white p-4 shadow-lb">
					<img src="public/assets/Certificate.svg" className="w-12" />
					<p className="w-full text-center font-semibold uppercase">
						{selectedCert?.id}
					</p>
				</div>

				<div className="flex w-full gap-x-5">
					<div className="flex w-full items-center gap-x-2 rounded-md bg-white p-4 shadow-lb">
						<img src="public/assets/Institution.svg" className="w-12" />
						<p className="font-semibold w-full text-center">{selectedCert?.institution}</p>
					</div>
					<div className="flex w-full items-center gap-x-2 rounded-md bg-white p-4 shadow-lb">
						<img src="public/assets/Calendar2.svg" className="w-12" />
						<p className="text-sm font-semibold w-full text-center">
							{selectedCert?.givenAt.replaceAll(' ', '/')}
						</p>
					</div>
					<div className="flex w-full items-center gap-x-2 rounded-md bg-white p-4 shadow-lb">
						<img src="public/assets/Link.svg" className="w-12" />
						<a href={selectedCert?.linkURL} target="_blank" className="text-center font-semibold w-full">
							Go to Certificate
						</a>
					</div>
				</div>
			</div>
		</Modal>
	);

	return (
		<div className="w-full px-2 py-4">
			{isModalOpen && modal}

			<div className="flex gap-x-5 overflow-x-auto p-2 pb-4 scrollbar-thin scrollbar-track-black/20 scrollbar-thumb-yellow-300 scrollbar-track-rounded-lg scrollbar-thumb-rounded-lg hover:scrollbar-thumb-yellow-500">
				{certificatesData.map((cert) => (
					<div
						key={cert.id}
						onClick={() => {
							setIsModalOpen(true);
							setSelectedCert(cert);
						}}
						className="relative flex h-full w-full max-w-[30rem] shrink-0 cursor-pointer items-center justify-center"
					>
						<div className="absolute h-full w-full animate-smallPing rounded-3xl border-2 border-white opacity-0"></div>

						<img
							src={cert.imageURL}
							className="max-h-96 rounded-3xl shadow-lb"
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default Certificates;
