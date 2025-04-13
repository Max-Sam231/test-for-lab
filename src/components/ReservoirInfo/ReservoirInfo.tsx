import React, { useEffect, useState } from "react";
import Input from "../Input/Input";
import Select from "../Select/Select";
import styles from "./ReservoirInfo.module.scss";
import { useReservoirStore } from "@/store/reservoirsStore";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { ReservoirFormData, reservoirSchema } from "@/schemas/ValidationScheme";
import { zodResolver } from "@hookform/resolvers/zod";

const ReservoirInfo: React.FC = () => {
	const { selectedReservoir, setSelectedReservoir } = useReservoirStore();
	const methods = useForm<ReservoirFormData>({
		resolver: zodResolver(reservoirSchema),
		defaultValues: {
			name: selectedReservoir?.name || "",
			capacity: selectedReservoir?.capacity || 0,
			volume: selectedReservoir?.volume || 0,
			productId: selectedReservoir?.productId?.toString() || "",
		},
		mode: "onChange",
	});

	const { reset, handleSubmit } = methods;

	const measures: string[] = ["ТОННЫ", "%"];
	const [activeMeasure, setActiveMeasure] = useState(measures[0]);

	useEffect(() => {
		if (selectedReservoir) {
			reset({
				name: selectedReservoir.name,
				capacity: selectedReservoir.capacity,
				volume: selectedReservoir.volume,
				productId: selectedReservoir.productId.toString(),
			});
		}
	}, [selectedReservoir, reset]);

	const handleSuccess = (name: keyof ReservoirFormData) => {
		const currentValue = methods.getValues(name);
		setSelectedReservoir({
			...selectedReservoir!,
			[name]: currentValue,
		});
		console.log(selectedReservoir);

		methods.setValue(name, currentValue, { shouldDirty: false });
	};

	const onSubmit: SubmitHandler<ReservoirFormData> = (data) => {
		if (methods.formState.isDirty || methods.formState.isValid) return;
		console.log("Form submitted:", data);
	};

	return (
		<FormProvider {...methods}>
			<form className={styles.reservoirInfo} onSubmit={handleSubmit(onSubmit)}>
				<div className={styles.reservoirInfo__container}>
					<Input
						icon="tank-icon"
						name="name"
						error={methods.formState.errors.name?.message}
						onCancel={(name) => methods.resetField(name)}
						onSuccess={(name) => handleSuccess(name)}
						defaultValue={selectedReservoir?.name || ""}
					/>
					<Select />
					<Input
						icon="capacity-full"
						name="capacity"
						error={methods.formState.errors.name?.message}
						onCancel={(name) => methods.resetField(name)}
						onSuccess={(name) => handleSuccess(name)}
						defaultValue={selectedReservoir?.capacity || 0}
					/>

					<div>
						{measures.map((item, index) => (
							<button
								key={index}
								type="button"
								onClick={() => setActiveMeasure(item)}
								className={`${styles.button} ${
									activeMeasure === item ? styles["button--active"] : ""
								} ${styles.reservoirInfo__buttonSwitch}`}
							>
								{item}
							</button>
						))}
						<Input
							icon="capacity"
							name="volume"
							error={methods.formState.errors.name?.message}
							onCancel={(name) => methods.resetField(name)}
							onSuccess={(name) => handleSuccess(name)}
							defaultValue={selectedReservoir?.volume || 0}
						/>
					</div>
					<div className={styles.submitContainer}>
						<button type="submit" className={`${styles.button} ${styles["button--active"]}`}>
							Сохранить
						</button>
						<button
							type="button"
							className={`${styles.button} ${styles["button--disable"]}`}
							onClick={() => methods.reset()}
						>
							Отменить
						</button>
					</div>
				</div>
			</form>
		</FormProvider>
	);
};

export default ReservoirInfo;
