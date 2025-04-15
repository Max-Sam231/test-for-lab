import React from "react";
import styles from "./Modal.module.scss";
import Image from "next/image";

type Props = {
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  successFunc: () => void;
};

const Modal: React.FC<Props> = ({ setIsOpen, isOpen, children, successFunc }) => {
  return (
    <>
      {isOpen ? (
        <div className={styles.modal}>
          <div className={styles.modal__container}>
            <div className={styles.modal__header}>
              <span className={styles.icon}>
                <Image
                  src="/assets/svg/warning.svg"
                  alt="Logo"
                  width={100}
                  height={100}
                  style={{ width: "auto", height: "auto", background: "transparent" }}
                />
              </span>
              <p className={styles["text--sl"]}>Обратите внимание</p>
            </div>
            <div className={styles.modal__content}>{children}</div>
            <div className={styles.modal__footer}>
              <button
                className={`${styles.button} ${styles["button--active"]}`}
                onClick={() => successFunc()}
              >
                Подтвердить
              </button>
              <button onClick={() => setIsOpen(!isOpen)} className={styles.button}>
                Отменить
              </button>
            </div>
          </div>
          <div onClick={() => setIsOpen(!isOpen)} className={styles.modal__wrapper}></div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
export default Modal;
