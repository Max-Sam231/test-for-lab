"use client";
import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import styles from "../../app/page.module.scss";
import { useReservoirStore } from "@/store/reservoirsStore";

type Props = {
  children: React.ReactNode;
};
const MainLayout: React.FC<Props> = ({ children }) => {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
  const { reservoirs, isLoading, fetchReservoirs } = useReservoirStore();

  useEffect(() => {
    if (reservoirs.length === 0 && !isLoading) {
      fetchReservoirs();
    }
  }, [reservoirs, isLoading, fetchReservoirs]);

  return (
    <div className={styles.wrapper}>
      <Header setIsOpenMobile={() => setIsOpenMobileMenu((prev) => !prev)} />
      <div className={styles.container}>
        <SideBar
          isOpenMobile={isOpenMobileMenu}
          setIsOpenMobile={() => setIsOpenMobileMenu((prev) => !prev)}
        />
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
