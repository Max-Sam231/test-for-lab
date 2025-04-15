"use client";
import React from "react";
import Image from "next/image";
import styles from "./Input.module.scss";
import { useFormContext } from "react-hook-form";
import { ReservoirFormData } from "@/schemas/ValidationScheme";

type Props = {
  icon: string;
  type?: string;
  name: keyof ReservoirFormData;
  error?: string;
  onCancel: (name: keyof ReservoirFormData) => void;
  onSuccess: (name: keyof ReservoirFormData) => void;
  defaultValue: string | number;
};

const Input: React.FC<Props> = ({
  icon,
  name,
  error,
  onCancel,
  onSuccess,
  defaultValue,
  type = "text",
}) => {
  const { register, formState, setValue } = useFormContext<ReservoirFormData>();
  const isDirty = formState.dirtyFields[name];

  const handleCancel = () => {
    setValue(name, defaultValue);
    onCancel(name);
  };

  const handleSuccess = () => {
    onSuccess(name);
  };

  return (
    <div className={`${styles.inputContainer} ${error ? styles["inputContainer--error"] : ""}`}>
      <span className={`${styles.icon} ${styles.inputContainer__icon}`}>
        <Image src={`/assets/svg/${icon}.svg`} alt="icon" width={30} height={30} />
      </span>
      <input
        type={type}
        {...register(name, {
          setValueAs: type === "number" ? (value) => Number(value) : (value) => value,
        })}
        className={`${styles.inputContainer__input} ${
          isDirty ? `${styles["inputContainer__input--active"]}` : ""
        } ${error ? styles["inputContainer__input--error"] : ""}`}
        autoComplete="off"
      />
      <>
        <button
          type="button"
          onClick={handleSuccess}
          className={
            isDirty
              ? `${styles.button} ${styles["button--save"]} ${styles["button--active"]}`
              : styles.button
          }
        >
          <Image
            src="/assets/svg/tick.svg"
            alt="Сохранить"
            width={14}
            height={14}
            style={{ width: "auto", height: "auto" }}
          />
        </button>
        <button
          type="button"
          onClick={handleCancel}
          className={
            isDirty
              ? `${styles.button} ${styles["button--cancel"]} ${styles["button--active"]}`
              : styles.button
          }
        >
          <Image
            src="/assets/svg/cancel-input.svg"
            alt="Отменить"
            width={14}
            height={14}
            style={{ width: "auto", height: "auto" }}
          />
        </button>
      </>

      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default Input;
