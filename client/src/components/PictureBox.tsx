// TODO: THIS LOOKS ABYSMAL PLEASE CHANGE THIS!!!!
const PictureBox = () => {
	return (
		<div className="relative h-32 w-32">
			<img
				src="/images/PP2.jpg"
				className="absolute w-32 animate-fade rounded-full"
			/>
			<img
				src="/images/PP1.jpg"
				className="absolute w-32 -rotate-[30deg] animate-fade2 rounded-full"
			/>
			<img
				src="/images/PP3.jpg"
				className="absolute w-32 animate-fade3 rounded-full"
			/>
			<img
				src="/images/PP4.jpg"
				className="absolute w-32 animate-fade4 rounded-full"
			/>
		</div>
	);
};

export default PictureBox;
