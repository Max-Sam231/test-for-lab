"use client";
import SideBar from "@/components/SideBar/SideBar";
import styles from "./page.module.scss";
import Header from "@/components/Header/Header";
import Modal from "@/components/Modal/Modal";
import CardReservoir from "@/components/CardReservoir/CardReservoir";
import { useState } from "react";

export default function Home() {
	const [isOpen, setIsOpen] = useState(false);
	const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);

	return (
		<div className={styles.wrapper}>
			<Header setIsOpenMobile={() => setIsOpenMobileMenu((prev) => !prev)} />
			<div className={styles.container}>
				<SideBar
					isOpenMobile={isOpenMobileMenu}
					setIsOpenMobile={() => setIsOpenMobileMenu((prev) => !prev)}
				/>
				<CardReservoir />
			</div>
			<Modal isOpen={isOpen} setIsOpen={setIsOpen}>
				<p>Вы действительно хотите удалить резервуар?</p>
			</Modal>
		</div>
	);
}
