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
