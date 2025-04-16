import React, { useEffect } from "react";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ReservoirFormData, reservoirSchema } from "@/schemas/ValidationScheme";
import { CreateReservoirType } from "@/types/types";
import { createReservoir } from "@/api/reservoirs";
import Input from "../Input/Input";
import Select from "../Select/Select";
import styles from "../CreateReservoir/CreateReservoir.module.scss";
import { useReservoirStore } from "@/store/reservoirsStore";

type Props = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
};

const CreateReservoir: React.FC<Props> = ({ isOpen, setIsOpen }) => {
  const [defaultValues, setDefaultValues] = React.useState<ReservoirFormData>({
    name: "Без названия",
    capacity: 1,
    volume: 0,
    productId: 1,
  });
  const methods = useForm<ReservoirFormData>({
    resolver: zodResolver(reservoirSchema),
    defaultValues: {
      name: defaultValues.name,
      capacity: defaultValues.capacity,
      volume: defaultValues.volume,
      productId: defaultValues.productId,
    },
    mode: "onChange",
  });
  useEffect(() => {
    methods.reset(defaultValues);
  }, [defaultValues, methods]);

  const { fetchReservoirs } = useReservoirStore();
  const onSuccess = (name: keyof ReservoirFormData) => {
    const currentValue = methods.getValues(name);
    setDefaultValues((prev) => ({
      ...prev,
      [name]: currentValue,
    }));
  };

  const onSubmit: SubmitHandler<ReservoirFormData> = async (data) => {
    const CreateData: CreateReservoirType = { ...data, isLocked: false };
    if (methods.formState.isDirty === true || methods.formState.isValid === false) {
      return;
    }
    await createReservoir(CreateData);
    await fetchReservoirs();
    setDefaultValues(data);
    methods.reset(data);
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className={styles.modal}>
          <div className={styles.modal__container}>
            <div className={styles.modal__header}>
              <p>Создать резервуар</p>
            </div>
            <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit(onSubmit)}>
                <div className={styles.modal__content}>
                  <div className={styles.reservoirInfo__container}>
                    <Input
                      icon="tank-icon"
                      name="name"
                      error={methods.formState.errors.name?.message}
                      onCancel={(name) => methods.resetField(name)}
                      onSuccess={(name) => onSuccess(name)}
                      defaultValue={defaultValues.name}
                    />
                    <Select
                      name="productId"
                      control={methods.control}
                      placeholder="Выберите продукт"
                    />
                    <Input
                      icon="capacity-full"
                      name="capacity"
                      type="number"
                      error={methods.formState.errors.capacity?.message}
                      onCancel={(name) => methods.resetField(name)}
                      onSuccess={(name) => onSuccess(name)}
                      defaultValue={defaultValues.capacity}
                    />
                    <div>
                      <Input
                        icon="capacity"
                        name="volume"
                        type="number"
                        error={methods.formState.errors.volume?.message}
                        onCancel={(name) => methods.resetField(name)}
                        onSuccess={(name) => onSuccess(name)}
                        defaultValue={defaultValues.volume}
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.modal__footer}>
                  <button type="submit" className={`${styles.button} ${styles["button--active"]}`}>
                    Создать
                  </button>
                  <button
                    type="button"
                    className={styles.button}
                    onClick={() => {
                      methods.reset();
                      setIsOpen(false);
                    }}
                  >
                    Отменить
                  </button>
                </div>
              </form>
            </FormProvider>
          </div>
          <div onClick={() => setIsOpen(false)} className={styles.modal__wrapper}></div>
        </div>
      )}
    </>
  );
};

export default CreateReservoir;
