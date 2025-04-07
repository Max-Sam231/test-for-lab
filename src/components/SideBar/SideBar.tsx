import React from "react";
import styles from "./SideBar.module.scss";
import { useState } from "react";
import Image from "next/image";
type Reservoir = {
	name: string;
	capacity: number;
	volume: number;
	productId: number;
	isLocked: boolean;
	id: number;
	product: {
		name: string;
		id: number;
	};
};

const mokiData: Reservoir[] = [
	{
		name: "DDD1",
		capacity: 100,
		volume: 10,
		productId: 10,
		isLocked: false,
		id: 1000,
		product: {
			name: "DDD1",
			id: 1000,
		},
	},
	{
		name: "DDD2",
		capacity: 100,
		volume: 1,
		productId: 10,
		isLocked: false,
		id: 1001,
		product: {
			name: "DDD2",
			id: 1001,
		},
	},
	{
		name: "DDD3",
		capacity: 100,
		volume: 55,
		productId: 10,
		isLocked: false,
		id: 1002,
		product: {
			name: "DDD3",
			id: 1002,
		},
	},
	{
		name: "DDD4",
		capacity: 100,
		volume: 100,
		productId: 10,
		isLocked: true,
		id: 1003,
		product: {
			name: "DDD4",
			id: 1003,
		},
	},
	{
		name: "DDD5",
		capacity: 100,
		volume: 0,
		productId: 10,
		isLocked: false,
		id: 1004,
		product: {
			name: "DDD5",
			id: 1004,
		},
	},
];

const SideBar: React.FC = () => {
	const [active, setActive] = useState(mokiData[0].id);
	const [searchValue, setSearchValue] = useState("");
	const [issearchActive, setIssearchActive] = useState(false);
	const closeSearch = ()=>{
		setIssearchActive(!issearchActive);
		setSearchValue("");
	}
	return (
		<div className={styles.sideBar}>
			<div className={styles.sideBar__search}>
				<span className={issearchActive ? styles.hide : styles["text--sl"]}>
					Список резервуаров
				</span>
				<div className={styles.sideBar__searchWrapper}>
					<button
						className={styles.sideBar__button}
						onClick={closeSearch}
					>
						<Image
							src="/assets/svg/search-white.svg"
							alt="Logo"
							width={100}
							height={100}
							style={{ width: "auto", height: "auto", background: "transparent" }}
						/>
					</button>
					<input
						className={issearchActive ? styles["sideBar__input--active"] : styles.sideBar__input}
						value={searchValue}
						onChange={(event) => setSearchValue(event.target.value)}
						type="text"
					/>
					<div
						onClick={closeSearch}
						className={
							issearchActive
								? `${styles.sideBar__cross} ${styles["sideBar__cross--active"]}`
								: styles.sideBar__cross
						}
					>
						⨯
					</div>
				</div>
			</div>
			<ul className={styles.sideBar__listReservoir}>
				{mokiData
					.filter((item: Reservoir) => item.name.toLowerCase().includes(searchValue.toLowerCase()))
					.map((item: Reservoir) => {
						return (
							<li
								className={
									active === item.id
										? `${styles.sideBar__item} ${styles["sideBar__item--active"]}`
										: styles.sideBar__item
								}
								onClick={() => setActive(item.id)}
								key={item.id}
							>
								<p className="text">{item.name}</p>
								{item.isLocked ? (
									<span className={styles.icon}>
										<Image
											src="/assets/svg/lock-white.svg"
											alt="Logo"
											width={100}
											height={100}
											style={{ width: "auto", height: "auto", background: "transparent" }}
										/>
									</span>
								) : (
									""
								)}
							</li>
						);
					})}
			</ul>
		</div>
	);
};

export default SideBar;
