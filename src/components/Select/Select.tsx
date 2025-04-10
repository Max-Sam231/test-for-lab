"use client";
import React, { useRef, useState } from "react";
import styles from "./Select.module.scss";
import Image from "next/image";

const Select: React.FC = () => {
	const selectOptions: string[] = [
		"Бензин",
		"Дизель",
		"Автомобильное топливо",
		"Авиационное топливо",
		"Газ",
	];
	const [isSelectOpen, setIsSelectOpen] = useState(false);
	const [SelectOption, setSelectOption] = useState(selectOptions[0]);
	const menuRef = useRef<HTMLDivElement>(null);
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
			<div className={isSelectOpen ? `${styles.select} ${styles["select--active"]}` : styles.select}>{SelectOption}</div>
			<span
				className={isSelectOpen ? `${styles.arrow} ${styles["arrow--up"]} ` : styles.arrow}
			></span>
			<div
				ref={menuRef}
				className={
					isSelectOpen
						? `${styles.select__menu} ${styles["select__menu--open"]} `
						: styles.select__menu
				}
			>
				<ul>
					{selectOptions.map((item, index) => {
						return (
							<li
								key={index}
								className={item === SelectOption ? styles.active : ""}
								onClick={() => optionClick(item)}
							>
								{item}
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};
export default Select;
