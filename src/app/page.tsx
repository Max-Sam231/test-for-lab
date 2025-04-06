"use client";
import Select from "@/components/Select/Select";
import styles from "./page.module.scss";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
	const [active, setActive] = useState(0);

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

	return (
		<div className={styles.wrapper}>
			<div className={styles.header}>
				<div className={styles.left}>
					<div className={styles.logo}>
						<span className={styles.icon}>
							<Image
								src="/assets/svg/settings.svg"
								alt="Logo"
								width={100}
								height={100}
								style={{ width: "auto", height: "auto" }}
							/>
						</span>
						<p className={styles["text--sl"]}>Панель администрирования резервуаров</p>
					</div>
					<button className={`${styles.button} ${styles["text--sl"]}`}>Добавить резервуар</button>
				</div>
				<div className={styles.right}>
					<button className={`${styles.button} ${styles["text--sl"]}`}>Экран резервуаров</button>
				</div>
			</div>

			<div className={styles.container}>
				<div className={styles.sideBar}>
					<div className={styles.sideBar__search}>
						<p className={styles["text--sl"]}>Список резервуаров</p>
						<input className={styles.hide} type="text" name="" id="" />
						<button className={styles.sideBar__button}>
							<Image
								src="/assets/svg/search-white.svg"
								alt="Logo"
								width={100}
								height={100}
								style={{ width: "auto", height: "auto", background: "transparent" }}
							/>
						</button>
					</div>
					<ul className={styles.sideBar__listReservoir}>
						{mokiData.map((item: Reservoir) => {
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
						style={{ width: "200px", height: "200px", background: "transparent"}}
					/>
					<form className={styles.reservoirInfo} onSubmit={() => console.log("DDD")}>
						<div className={styles.reservoirInfo__container}>
							<div className={styles.inputContainer}>
								<span className={`${styles.icon} ${styles.inputContainer__icon}`}>
									<Image
										src="/assets/svg/tank-icon.svg"
										alt="Logo"
										width={100}
										height={100}
										style={{ width: "auto", height: "auto", background: "transparent" }}
									/>
								</span>
								<input
									className={styles.inputContainer__input}
									type="text"
									name=""
									id=""
									defaultValue="Резервуар 501"
								/>
							</div>
							<Select />
							<div className={styles.inputContainer}>
								<span className={`${styles.icon} ${styles.inputContainer__icon}`}>
									<Image
										src="/assets/svg/capacity-full.svg"
										alt="Logo"
										width={100}
										height={100}
										style={{ width: "auto", height: "auto" }}
									/>
								</span>
								<input
									className={styles.inputContainer__input}
									type="text"
									name=""
									id=""
									defaultValue="15 000"
								/>
							</div>

							<div className="buttons">
								<button className={`${styles.button} ${styles.reservoirInfo__buttonSwitch}`}>
									ТОННЫ
								</button>
								<button className={`${styles.button} ${styles.reservoirInfo__buttonSwitch}`}>
									%
								</button>

								<div className={styles.inputContainer}>
									<span className={`${styles.icon} ${styles.inputContainer__icon}`}>
										<Image
											src="/assets/svg/capacity.svg"
											alt="Logo"
											width={100}
											height={100}
											style={{ width: "auto", height: "auto", background: "transparent" }}
										/>
									</span>
									<input
										className={styles.inputContainer__input}
										type="text"
										name=""
										id=""
										defaultValue="6 800"
									/>
								</div>
							</div>
							<div className={styles.submitContainer}>
								<button type="submit" className={`${styles.button} ${styles["button--active"]}`}>
									Сохранить
								</button>
								<button className={`${styles.button} ${styles["button--disable"]}`}>
									Отменить
								</button>
							</div>
						</div>
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
									name=""
									id=""
									defaultValue="Резервуар не заблокирован"
									disabled
								/>
								<span className={styles.toggle}></span>
							</div>

							<button className={styles.button}>Удалить Резервуар</button>
						</div>
					</form>
					</div>
					
				</div>
			</div>

			<div className={styles.hide}>
				<div className="modal">
					<div className="header">
						<span className="icon"></span>
						<p className="text"></p>
					</div>
					<div className="content">
						<p className="text"></p>
					</div>
					<div>
						<button className="button"></button>
						<button className="button"></button>
					</div>
				</div>
			</div>
		</div>
	);
}
