"use client";
import { PatchToggleReservoir } from "@/api/reservoirs";
import CardReservoir from "@/components/CardReservoir/CardReservoir";
import Modal from "@/components/Modal/Modal";
import { useReservoirStore } from "@/store/reservoirsStore";
import { useRouter } from "next/navigation";
import React from "react";
import { useEffect, useState } from "react";

export type ModalsContextType = {
	lockModal: boolean;
	setLockModal: React.Dispatch<React.SetStateAction<boolean>>;
	deleteModal: boolean;
	setDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ModalsContext = React.createContext<ModalsContextType>({
	lockModal: false,
	setLockModal: () => {},
	deleteModal: false,
	setDeleteModal: () => {},
});

export default function Home() {
	const { selectedReservoir,setSelectedReservoir, fetchReservoirs } = useReservoirStore();
	const [lockModal, setLockModal] = useState(false);
	const [deleteModal, setDeleteModal] = useState(false);

	const router = useRouter();
	useEffect(() => {
		if (!selectedReservoir) {
			router.replace("/");
		}
	}, [selectedReservoir, router]);

	const lockReservoir = async () => {
		if (selectedReservoir?.id !== null) {
			const updatedReservoir = await PatchToggleReservoir(selectedReservoir?.id);
			setLockModal(false);
			await fetchReservoirs();
			setSelectedReservoir(updatedReservoir);
		}
	};
	return (
		<>
			<ModalsContext.Provider value={{ lockModal, setLockModal, deleteModal, setDeleteModal }}>
				{selectedReservoir && <CardReservoir reservoir={selectedReservoir} />}

				<Modal isOpen={lockModal} setIsOpen={setLockModal} successFunc={lockReservoir}>
					<p>Вы действительно хотите {!selectedReservoir?.isLocked ? "заблокировать" : "разблокировать"} резервуар?</p>
				</Modal>

				<Modal
					isOpen={deleteModal}
					setIsOpen={setDeleteModal}
					successFunc={function (): void {
						throw new Error("Function not implemented.");
					}}
				>
					<p>Вы действительно хотите удалить резервуар?</p>
				</Modal>
			</ModalsContext.Provider>
		</>
	);
}
