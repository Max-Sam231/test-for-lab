import React, { useState } from "react";
import styles from "./Header.module.scss";
import Image from "next/image";
import CreateReservoir from "../CreateReservoir/CreateReservoir";

type Props = {
  setIsOpenMobile: () => void;
};

const Header: React.FC<Props> = ({ setIsOpenMobile }) => {
  const [isOpenCreate, setIsOpenCreate] = useState(false);
  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <div className={styles.logo}>
          <span className={styles.icon}>
            <Image src="/assets/svg/settings.svg" alt="Logo" width={25} height={25} />
          </span>
          <p className={styles["text--sl"]}>Панель администрирования резервуаров</p>
        </div>
        <button
          onClick={() => setIsOpenCreate(true)}
          className={`${styles.button} ${styles["text--sl"]}`}
        >
          Добавить резервуар
        </button>
        <CreateReservoir isOpen={isOpenCreate} setIsOpen={setIsOpenCreate} />
      </div>
      <div className={styles.right}>
        <button className={`${styles.button} ${styles["text--sl"]}`}>Экран резервуаров</button>
        <button className={styles.mobileMenu} onClick={() => setIsOpenMobile()}>
          <Image src="/assets/svg/mobile-icon.svg" alt="Logo" width={24} height={24} />
        </button>
      </div>
    </div>
  );
};
export default Header;
