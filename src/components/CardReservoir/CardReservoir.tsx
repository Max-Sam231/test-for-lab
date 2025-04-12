"use client";
import Image from "next/image";
import styles from "./CardReservoir.module.scss";
import { Reservoir } from "@/types/types";
import ControlPanel from "../ControlPanel/ControlPanel";
import React from "react";
import ReservoirInfo from "../ReservoirInfo/ReservoirInfo";

type Props = {
	reservoir: Reservoir | null;
};

const CardReservoir: React.FC<Props> = ({ reservoir }) => {
	return (
		<div className={styles.cardReservoir}>
			<div className={styles.cardReservoir__title}>
				<p className={styles["text--sl"]}>Информация о резервуаре</p>
			</div>
			<div className={styles.content}>
				<Image
					src="/assets/svg/tank.svg"
					alt="Logo"
					width={200}
					height={200}
					style={{ width: "200px", height: "200px", background: "transparent" }}
				/>
				{reservoir && (
					<>
						<ReservoirInfo />
						<ControlPanel />
					</>
				)}
			</div>
		</div>
	);
};

export default CardReservoir;
