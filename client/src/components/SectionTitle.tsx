type SectionTitleProps = {
	text: string;
};

const SectionTitle = ({ text }: SectionTitleProps) => {
	return (
		<h2 className="section-title font-rubik text-3xl font-extrabold tracking-widest sm:text-5xl">
			{text}
		</h2>
	);
};

export default SectionTitle;
