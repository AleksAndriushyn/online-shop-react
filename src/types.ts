export type Product = {
	category: string;
	id: number;
	title: string;
	description: string;
	rating: Rating;
	image: string;
	price: number;
};

export type Category = {
	name: string;
};

export type Rating = {
	rate: number;
	count: number;
};
