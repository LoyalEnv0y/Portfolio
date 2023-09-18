const PictureBox = () => {
	return (
		<section className="absolute left-5 top-2 flex justify-center self-start py-5">
			<div className="relative h-32 w-32">
				<img
					src="/images/PP2.jpg"
					alt=""
					className="absolute w-32 animate-fade rounded-full"
				/>
				<img
					src="/images/PP1.jpg"
					alt=""
					className="absolute w-32 -rotate-[30deg] animate-fade2 rounded-full"
				/>
				<img
					src="/images/PP3.jpg"
					alt=""
					className="absolute w-32 animate-fade3 rounded-full"
				/>
				<img
					src="/images/PP4.jpg"
					alt=""
					className="absolute w-32 animate-fade4 rounded-full"
				/>
			</div>
		</section>
	);
};

export default PictureBox;
