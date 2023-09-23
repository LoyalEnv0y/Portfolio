export type Link = {
	id: string;
	content: string;
	to: string;
};

export type AboutCellContent = {
	id: string;
	index: number;
	title: string;
	titleSignLink?: string;
	body: string[];
	imageLinks?: string[];
	svgLinks?: string[];
};

// TODO: Get rid of the properties you don't use such as: projects, certificates, knowledgePercent and isOpen
export type Tech = {
	id: string;
	title: string;
	logoUrl: string;
	colorHex: string;
	learned: boolean;
};

export type Techs = {
	programmingLanguages: Tech[];
	libraries: Tech[];
	frameworks: Tech[];
	dataBases: Tech[];
	tools: Tech[];
};
