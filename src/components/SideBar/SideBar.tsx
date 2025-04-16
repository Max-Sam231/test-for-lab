"use client";
import React, { useEffect } from "react";
import styles from "./SideBar.module.scss";
import { useState } from "react";
import Image from "next/image";
import { useReservoirStore } from "@/store/reservoirsStore";
import { Reservoir } from "@/types/types";
import Link from "next/link";
import CreateReservoir from "../CreateReservoir/CreateReservoir";

type Props = {
  isOpenMobile: boolean;
  setIsOpenMobile: () => void;
};

const SideBar: React.FC<Props> = ({ isOpenMobile, setIsOpenMobile }) => {
  const [isOpenCreate, setIsOpenCreate] = useState(false);
  const [active, setActive] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const [issearchActive, setIssearchActive] = useState(false);
  const { isLoading, reservoirs, setSelectedReservoir, selectedReservoir } = useReservoirStore();

  useEffect(() => {
    if (selectedReservoir) {
      setActive(selectedReservoir.id);
    }
  }, [selectedReservoir, reservoirs]);

  const closeSearch = () => {
    setIssearchActive(!issearchActive);
    setSearchValue("");
  };
  const menuOptionClick = (item: Reservoir) => {
    setActive(item.id);
    setSelectedReservoir(item);
    setIsOpenMobile();
  };
  return (
    <div
      className={
        isOpenMobile ? `${styles.sideBar} ${styles["sideBar--mobileActive"]}` : styles.sideBar
      }
    >
      {!isLoading && (
        <>
          <div
            className={`${styles.sideBar__search} ${issearchActive ? styles["sideBar__search--active"] : ""}`}
          >
            <span
              className={
                issearchActive ? `${styles.hide} ${styles["text--sl"]}` : styles["text--sl"]
              }
            >
              Список резервуаров
            </span>
            <div
              className={`${styles.sideBar__searchWrapper} ${issearchActive ? styles["sideBar__searchWrapper--active"] : ""}`}
            >
              <input
                className={
                  issearchActive ? styles["sideBar__input--active"] : styles.sideBar__input
                }
                value={searchValue}
                placeholder="Введите название резервуара"
                onChange={(event) => setSearchValue(event.target.value)}
                type="text"
              />
              <button
                className={`${styles.sideBar__button} ${issearchActive ? styles["sideBar__button--active"] : ""} `}
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
            </div>
            <div onClick={() => setIsOpenMobile()} className={styles.sideBar__cross}></div>
          </div>
          {isOpenMobile && (
            <button
              onClick={() => setIsOpenCreate(true)}
              className={`${styles.button} ${styles["text--sl"]}`}
            >
              Добавить резервуар
            </button>
          )}
          <CreateReservoir isOpen={isOpenCreate} setIsOpen={setIsOpenCreate} />
          <ul className={styles.sideBar__listReservoir}>
            {reservoirs
              .filter((item: Reservoir) =>
                item.name.toLowerCase().includes(searchValue.toLowerCase())
              )
              .map((item: Reservoir) => {
                return (
                  <Link key={item.id} href={`/reservoirs/${item.id}`}>
                    <li
                      className={
                        active === item.id
                          ? `${styles.sideBar__item} ${styles["sideBar__item--active"]}`
                          : styles.sideBar__item
                      }
                      onClick={() => menuOptionClick(item)}
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
                  </Link>
                );
              })}
          </ul>
        </>
      )}
    </div>
  );
};

export default SideBar;
