"use client";
import styles from "./page.module.scss";

export default function Home() {
	return (
		<div className={styles.wrapper}>
			<div className={styles.header}>
				<div className={styles.left}>
					<div className={styles.logo}>
						<span className={styles.icon}></span>
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
						<button className={styles.sideBar__button}></button>
					</div>
					<ul className={styles.sideBar__listReservoir}>
						<li className={`${styles.sideBar__item} ${styles["sideBar__item--active"]}`}>
							<p className="text">Резервуар 501</p>
							<span className={styles.icon}></span>
						</li>
						<li className={styles.sideBar__item}>
							<p className="text">Резервуар 501</p>
							<span className={styles.icon}></span>
						</li>
						<li className={styles.sideBar__item}>
							<p className="text">Резервуар 501</p>
							<span className={styles.icon}></span>
						</li>
					</ul>
				</div>

				<div className={styles.cardReservoir}>
					<div className={styles.cardReservoir__title}>
						<p className={styles["text--sl"]}>Информация о резервуаре</p>
					</div>
					{/* <Image /> */}
					<form className={styles.reservoirInfo}>
						<div className={styles.reservoirInfo__container}>
							<div className={styles.inputContainer}>
								<span className={`${styles.icon} ${styles.inputContainer__icon}`}></span>
								<input
									className={styles.inputContainer__input}
									type="text"
									name=""
									id=""
									defaultValue="Резервуар 501"
								/>
							</div>

							<div className={styles.inputContainer}>
								<span className={`${styles.icon} ${styles.inputContainer__icon}`}></span>
								<input
									className={styles.inputContainer__input}
									type="text"
									name=""
									id=""
									defaultValue="ЗДЕСЬ СЕЛЕКТ"
								/>
							</div>

							<div className={styles.inputContainer}>
								<span className={`${styles.icon} ${styles.inputContainer__icon}`}></span>
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
									<span className={`${styles.icon} ${styles.inputContainer__icon}`}></span>
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
								<button className={`${styles.button} ${styles["button--active"]}`}>
									Сохранить
								</button>
								<button className={`${styles.button} ${styles["button--disable"]}`}>
									Отменить
								</button>
							</div>
						</div>
						<div className={styles.controlPanel}>
							<div className={styles.inputContainer}>
								<span className={`${styles.icon} ${styles.inputContainer__icon}`}></span>
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
