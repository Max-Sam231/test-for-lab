import { create } from "zustand";
import { getAllReservoir } from "@/api/reservoirs";
import { Reservoir } from "@/types/types";


type ReservoirState = {
	reservoirs: Reservoir[];
	isLoading: boolean;
	error: string | null;
	fetchReservoirs: () => Promise<void>;
	selectedReservoir : Reservoir | null;
	setSelectedReservoir: (reservoir:Reservoir | null) => void;
};

export const useReservoirStore = create<ReservoirState>((set) => ({
	reservoirs: [],
	isLoading: false,
	error: null,
	selectedReservoir : null, 
	setSelectedReservoir:(reservoir:Reservoir | null)=> set({selectedReservoir: reservoir}), 
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
