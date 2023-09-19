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

export type Tech = {
	id: string;
	title: string;
	logoUrl: string;
	description: string;
	projects?: string[];
	certificates?: string[];
	knowledgePercent: number;
	isOpen: boolean;
	colorHex: string;
};
         