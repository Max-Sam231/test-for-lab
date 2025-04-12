import React, { useEffect, useState } from "react";
import Input from "../Input/Input";
import Select from "../Select/Select";
import styles from "./ReservoirInfo.module.scss";
import { useReservoirStore } from "@/store/reservoirsStore";
const ReservoirInfo: React.FC = () => {
	const { selectedReservoir } = useReservoirStore();

	const [initialFormData, setInitialFormData] = useState({
		nameReservoir: selectedReservoir?.name || "",
		capacity: selectedReservoir?.capacity?.toString() || "",
		volume: selectedReservoir?.volume?.toString() || "",
		productId: selectedReservoir?.productId?.toString() || "",
	});

	const [inputValues, setInputValues] = useState(initialFormData);
	useEffect(() => {
		if (selectedReservoir) {
			const newInitialData = {
				nameReservoir: selectedReservoir.name,
				capacity: selectedReservoir.capacity.toString(),
				volume: selectedReservoir.volume.toString(),
				productId: selectedReservoir.productId.toString(),
			};
			setInitialFormData(newInitialData);
			setInputValues(newInitialData);
		}
	}, [selectedReservoir]);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setInputValues((prev) => ({ ...prev, [name]: value }));
	};

	const cancelValue = (name: keyof typeof initialFormData) => {
		setInputValues((prev) => ({ ...prev, [name]: initialFormData[name] }));
	};

	const successValue = (name: keyof typeof initialFormData, value: string) => {
		setInputValues((prev) => ({ ...prev, [name]: value }));
		setInitialFormData((prev)=>({...prev, [name]: value}))
	};
	return (
		<>
			<form className={styles.reservoirInfo} onSubmit={() => console.log("DDD")}>
				<div className={styles.reservoirInfo__container}>
					<Input
						icon={"tank-icon"}
						valueInput={inputValues.nameReservoir}
						changeValue={handleChange}
						nameInput={"nameReservoir"}
						defaultValue={`${initialFormData.nameReservoir}`}
						cancelValue={cancelValue}
						successValue={successValue}
					/>
					<Select />
					<Input
						icon={"capacity-full"}
						valueInput={`${inputValues.capacity}`}
						changeValue={handleChange}
						nameInput={"capacity"}
						defaultValue={`${initialFormData.capacity}`}
						cancelValue={cancelValue}
						successValue={successValue}
					/>

					<div className="buttons">
						<button
							type="button"
							className={`${styles.button} ${styles.reservoirInfo__buttonSwitch}`}
						>
							ТОННЫ
						</button>
						<button
							type="button"
							className={`${styles.button} ${styles.reservoirInfo__buttonSwitch}`}
						>
							%
						</button>

						<Input
							icon={"capacity"}
							valueInput={`${inputValues.volume}`}
							changeValue={handleChange}
							nameInput={"volume"}
							defaultValue={`${initialFormData.volume}`}
							cancelValue={cancelValue}
							successValue={successValue}
						/>
					</div>
					<div className={styles.submitContainer}>
						<button type="button" className={`${styles.button} ${styles["button--active"]}`}>
							Сохранить
						</button>
						<button type="button" className={`${styles.button} ${styles["button--disable"]}`}>
							Отменить
						</button>
					</div>
				</div>
			</form>
		</>
	);
};

export default ReservoirInfo;
