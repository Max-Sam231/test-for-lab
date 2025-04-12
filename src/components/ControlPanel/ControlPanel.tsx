"use client";
import Image from "next/image";
import styles from "./ControlPanel.module.scss";
import React, { useContext } from "react";
import { ModalsContext } from "@/app/reservoirs/[id]/page";

const ControlPanel: React.FC = () => {
	const { lockModal, setLockModal, deleteModal, setDeleteModal } = useContext(ModalsContext);

	return (
		<div className={styles.controlPanel}>
			<div className={styles.inputContainer}>
				<span className={`${styles.icon} ${styles.inputContainer__icon}`}>
					<Image
						src="/assets/svg/lock-grey.svg"
						alt="Logo"
						width={100}
						height={100}
						style={{ width: "auto", height: "auto", background: "transparent" }}
					/>
				</span>
				<input
					className={styles.inputContainer__input}
					type="text"
					value={lockModal ? "Заблокирован" : "Разблокирован"}
					disabled
					readOnly
				/>
				<div className={styles.toggle}>
					<input
						type="checkbox"
						name="toggle"
						checked={lockModal}
						readOnly
						onClick={() => setLockModal(!lockModal)}
						className={styles.toggle__button}
					/>
				</div>
			</div>

			<button type="button" onClick={() => setDeleteModal(!deleteModal)} className={styles.button}>
				Удалить Резервуар
			</button>
		</div>
	);
};

export default ControlPanel;
