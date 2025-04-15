"use client";
import React, { useEffect, useState } from "react";
import styles from "./Select.module.scss";
import Image from "next/image";
import { Control, useController } from "react-hook-form";
import { getAllProduts } from "@/api/reservoirs";
import { ReservoirFormData } from "@/schemas/ValidationScheme";

type Props = {
  name: keyof ReservoirFormData;
  control: Control<ReservoirFormData>;
  placeholder?: string;
};

const Select: React.FC<Props> = ({ name, control, placeholder = "Выберите продукт" }) => {
  const { field } = useController({ name, control });
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [options, setOptions] = useState<{ id: number; name: string }[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<{ id: number; name: string } | null>(null);
  useEffect(() => {
    if (options.length == 0) {
      const fetchProducts = async () => {
        const data = await getAllProduts();
        setOptions(data);
      };
      fetchProducts();
    }
    if (field.value) {
      const product = options.find((opt) => opt.id === field.value);
      setSelectedProduct(product || null);
    }
  }, [field.value, options]);

  const OptionClick = (option: { id: number; name: string }) => {
    field.onChange(option.id);
    setSelectedProduct(option);
    setIsSelectOpen(false);
  };

  return (
    <div className={styles.Container} onClick={() => setIsSelectOpen(!isSelectOpen)}>
      <span className={styles.icon}>
        <Image
          src="/assets/svg/drop.svg"
          alt="Logo"
          width={100}
          height={100}
          style={{ width: "auto", height: "auto", background: "transparent" }}
        />
      </span>
      <div
        className={isSelectOpen ? `${styles.select} ${styles["select--active"]}` : styles.select}
      >
        {selectedProduct?.name || placeholder}
      </div>
      <span
        className={isSelectOpen ? `${styles.arrow} ${styles["arrow--up"]} ` : styles.arrow}
      ></span>
      <div
        className={
          isSelectOpen
            ? `${styles.select__menu} ${styles["select__menu--open"]} `
            : styles.select__menu
        }
      >
        <ul>
          {options.map((option) => (
            <li
              key={option.id}
              className={option.id === selectedProduct?.id ? styles.active : ""}
              onClick={() => OptionClick(option)}
            >
              {option.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Select;
