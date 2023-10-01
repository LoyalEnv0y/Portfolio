import certificatesData from '../data/Certificates';

const Certificates = () => {
	return (
		<div className="w-full px-2 py-4">
			<div className="flex gap-x-5 overflow-x-auto p-2 pb-4 scrollbar-thin scrollbar-track-black/20 scrollbar-thumb-yellow-300 scrollbar-track-rounded-lg scrollbar-thumb-rounded-lg hover:scrollbar-thumb-yellow-500">
				{certificatesData.map((cert) => (
					<div className="relative flex h-full w-full max-w-[30rem] shrink-0 cursor-pointer items-center justify-center">
						<div className="animate-smallPing absolute h-full w-full rounded-3xl border-2 border-white opacity-0"></div>

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
