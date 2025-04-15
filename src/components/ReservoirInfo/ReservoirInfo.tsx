"use client";
import React, { useEffect, useState } from "react";
import Input from "../Input/Input";
import Select from "../Select/Select";
import styles from "./ReservoirInfo.module.scss";
import { useReservoirStore } from "@/store/reservoirsStore";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { ReservoirFormData, reservoirSchema } from "@/schemas/ValidationScheme";
import { zodResolver } from "@hookform/resolvers/zod";
import { updateReservoir } from "@/api/reservoirs";

const ReservoirInfo: React.FC = () => {
  const { selectedReservoir, setSelectedReservoir, fetchReservoirs } = useReservoirStore();
  const methods = useForm<ReservoirFormData>({
    resolver: zodResolver(reservoirSchema),
    defaultValues: {
      name: selectedReservoir?.name || "",
      capacity: selectedReservoir?.capacity || 0,
      volume: selectedReservoir?.volume || 0,
      productId: selectedReservoir?.productId || 1,
    },
    mode: "onChange",
  });

  const { reset, handleSubmit } = methods;

  const measures: string[] = ["ТОННЫ", "%"];
  const [activeMeasure, setActiveMeasure] = useState(measures[0]);

  useEffect(() => {
    if (selectedReservoir) {
      reset({
        name: selectedReservoir.name,
        capacity: selectedReservoir.capacity,
        volume: selectedReservoir.volume,
        productId: selectedReservoir.productId,
      });
    }
  }, [selectedReservoir, reset]);

  const handleSuccess = (name: keyof ReservoirFormData) => {
    const currentValue = methods.getValues(name);
    setSelectedReservoir({
      ...selectedReservoir!,
      [name]: name === "capacity" || name === "volume" ? Number(currentValue) : currentValue,
    });
    methods.setValue(name, currentValue, { shouldDirty: false });
  };

  const onSubmit: SubmitHandler<ReservoirFormData> = async (data) => {
    if (methods.formState.isDirty === true || methods.formState.isValid === false) {
      return;
    }
    console.log("Form submitted:", data);
    const updatedReservoir = await updateReservoir(selectedReservoir?.id, data);
    await fetchReservoirs();
    setSelectedReservoir(updatedReservoir);
  };

  return (
    <FormProvider {...methods}>
      <form className={styles.reservoirInfo} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.reservoirInfo__container}>
          <Input
            icon="tank-icon"
            name="name"
            error={methods.formState.errors.name?.message}
            onCancel={(name) => methods.resetField(name)}
            onSuccess={(name) => handleSuccess(name)}
            defaultValue={selectedReservoir?.name || ""}
          />
          <Select name="productId" control={methods.control} placeholder="Выберите продукт" />
          <Input
            icon="capacity-full"
            name="capacity"
            type="number"
            error={methods.formState.errors.capacity?.message}
            onCancel={(name) => methods.resetField(name)}
            onSuccess={(name) => handleSuccess(name)}
            defaultValue={selectedReservoir?.capacity || 0}
          />

          <div>
            {measures.map((item, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActiveMeasure(item)}
                className={`${styles.button} ${
                  activeMeasure === item ? styles["button--active"] : ""
                } ${styles.reservoirInfo__buttonSwitch}`}
              >
                {item}
              </button>
            ))}
            <Input
              icon="capacity"
              name="volume"
              type="number"
              error={methods.formState.errors.volume?.message}
              onCancel={(name) => methods.resetField(name)}
              onSuccess={(name) => handleSuccess(name)}
              defaultValue={selectedReservoir?.volume || 0}
            />
          </div>
          <div className={styles.submitContainer}>
            <button type="submit" className={`${styles.button} ${styles["button--active"]}`}>
              Сохранить
            </button>
            <button
              type="button"
              className={`${styles.button} ${styles["button--disable"]}`}
              onClick={() => methods.reset()}
            >
              Отменить
            </button>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default ReservoirInfo;
