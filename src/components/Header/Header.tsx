import React from "react";
import styles from "./Header.module.scss";
import Image from "next/image";

const Header: React.FC = () => {
	return (
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
	);
};
export default Header;
