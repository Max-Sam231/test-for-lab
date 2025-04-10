import { create } from "zustand";
import { getAllReservoir } from "@/api/reservoirs";

type Reservoir = {
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

type ReservoirState = {
	reservoirs: Reservoir[];
	isLoading: boolean;
	error: string | null;
	fetchReservoirs: () => Promise<void>;
};

export const useReservoirStore = create<ReservoirState>((set) => ({
	reservoirs: [],
	isLoading: false,
	error: null,
	fetchReservoirs: async () => {
		set({ isLoading: true, error: null });
		try {
			const data = await getAllReservoir();
			set({ reservoirs: data, isLoading: false });
		} catch {
			set({
				error: "Не удалось загрузить резервуары",
				isLoading: false,
			});
		}
	},
}));
