"use client";
import React, { useEffect, useState } from "react";
import styles from "./Select.module.scss";
import Image from "next/image";
import { getAllProduts } from "@/api/reservoirs";
import { useReservoirStore } from "@/store/reservoirsStore";

const Select: React.FC = () => {
	const {selectedReservoir} = useReservoirStore();
	const [isSelectOpen, setIsSelectOpen] = useState(false);
	const [Options, setOptions] = useState([]);
	const [SelectOption, setSelectOption] = useState(selectedReservoir?.product.name);

	useEffect(() => {
		const getOption = async () => {
			const data = await getAllProduts();
			setOptions(data);
		};
		getOption();
	}, []);

	const optionClick = (option: string): void => {
		setSelectOption(option);
		setIsSelectOpen(!isSelectOpen);
	};
	return (
		<div className={styles.Container} onClick={() => setIsSelectOpen(!isSelectOpen)}>
			<span className={`${styles.icon}`}>
				<Image
					src="/assets/svg/drop.svg"
					alt="Logo"
					width={100}
					height={100}
					style={{ width: "auto", height: "auto", background: "transparent" }}
				/>
			</span>
			<div
				className={isSelectOpen ? `${styles.select} ${styles["select--active"]}` : styles.select}
			>
				{SelectOption}
			</div>
			<span
				className={isSelectOpen ? `${styles.arrow} ${styles["arrow--up"]} ` : styles.arrow}
			></span>
			<div
				className={
					isSelectOpen
						? `${styles.select__menu} ${styles["select__menu--open"]} `
						: styles.select__menu
				}
			>
				<ul>
					{Options.map((item: { name: string; id: number }, index) => {
						return (
							<li
								key={index}
								className={item.name === SelectOption ? styles.active : ""}
								onClick={() => optionClick(item.name)}
							>
								{item.name}
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};
export default Select;
