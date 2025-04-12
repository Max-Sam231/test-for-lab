export type Reservoir = {
	name: string;
	capacity: number;
	volume: number;
	productId: number;
	isLocked: boolean;
	id: number;
	product: {
		name: string;
		id: number;
	};
};
