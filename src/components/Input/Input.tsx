"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Input.module.scss";

type Props = {
	icon: string;
	valueInput: string;
	changeValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
	nameInput: "nameReservoir" | "capacity" | "volume" | "productId";
	defaultValue: string;
	cancelValue: (name: "nameReservoir" | "capacity" | "volume" | "productId") => void;
	successValue: (
		name: "nameReservoir" | "capacity" | "volume" | "productId",
		value: string
	) => void;
};
const Input: React.FC<Props> = ({
	icon,
	valueInput,
	changeValue,
	nameInput,
	defaultValue,
	cancelValue,
	successValue,
}) => {
	const [isActive, setIsActive] = useState(false);

	useEffect(() => {
		if (String(defaultValue) === valueInput) {
			setIsActive(false);
		} else {
			setIsActive(true);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [valueInput]);

	const cancelInputValue = () => {
		cancelValue(nameInput);
		setIsActive(false);
	};

	const successInputValue = () => {
		successValue(nameInput, valueInput);
		setIsActive(false);
	};
	return (
		<div className={styles.inputContainer}>
			<span className={`${styles.icon} ${styles.inputContainer__icon}`}>
				<Image
					src={`/assets/svg/${icon}.svg`}
					alt="Logo"
					width={100}
					height={100}
					style={{ width: "auto", height: "auto" }}
				/>
			</span>
			<input
				className={
					isActive
						? `${styles.inputContainer__input} ${styles["inputContainer__input--active"]}`
						: styles.inputContainer__input
				}
				type="text"
				autoComplete="off"
				name={nameInput}
				value={valueInput}
				onChange={changeValue}
			/>
			<button
				type="button"
				onClick={successInputValue}
				className={
					isActive
						? `${styles.button} ${styles["button--save"]} ${styles["button--active"]}`
						: styles.button
				}
			>
				<Image
					src={`/assets/svg/tick.svg`}
					alt="Logo"
					width={100}
					height={100}
					style={{ width: "auto", height: "auto" }}
				/>
			</button>
			<button
				onClick={() => cancelInputValue()}
				type="button"
				className={
					isActive
						? `${styles.button} ${styles["button--cancel"]} ${styles["button--active"]}`
						: styles.button
				}
			>
				<Image
					src={`/assets/svg/cancel-input.svg`}
					alt="Logo"
					width={100}
					height={100}
					style={{ width: "auto", height: "auto" }}
				/>
			</button>
		</div>
	);
};

export default Input;
