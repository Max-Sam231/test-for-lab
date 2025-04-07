"use client";
import Select from "@/components/Select/Select";
import styles from "./page.module.scss";
import Image from "next/image";
import Header from "@/components/Header/Header";
import SideBar from "@/components/SideBar/SideBar";
import Modal from "@/components/Modal/Modal";
import { useState } from "react";

export default function Home() {
	const [isOpen,setIsOpen] = useState(false);
	return (
		<div className={styles.wrapper}>
			<Header />
			<div className={styles.container}>
				<SideBar />
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
										defaultValue="Резервуар заблокирован"
										disabled
									/>
									<div className={styles.toggle}>
										<input
											type="checkbox"
											name="toggle"
											id="toggle-button"
											className={styles.toggle__button}
										/>
									</div>
								</div>

								<button type="button" onClick={()=>setIsOpen(!isOpen)} className={styles.button}>Удалить Резервуар</button>
							</div>
						</form>
					</div>
				</div>
			</div>
			
			<Modal isOpen={isOpen} setIsOpen={setIsOpen}>
				<p>Вы действительно хотите удалить резервуар?</p>
			</Modal>
		</div>
	);
}
