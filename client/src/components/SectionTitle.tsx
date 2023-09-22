type SectionTitleProps = {
	text: string;
};

const SectionTitle = ({ text }: SectionTitleProps) => {
	return <h2 className="">{text}</h2>;
};

export default SectionTitle;

// background: linear-gradient(90deg, #F367FF 0%, #FF42C6 25%, #FF3188 50%, #FF484D 75%, #FF6800 100%);
// background-clip: text;
// -webkit-background-clip: text;
// -webkit-text-fill-color: transparent;