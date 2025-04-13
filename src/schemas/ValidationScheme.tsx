import * as z from "zod";

export const reservoirSchema = z.object({
	name: z.string().nonempty("Название резервуара обязательно"),
	capacity: z.number(),
	volume: z.number(),
	productId: z.string().nonempty("Выберите продукт"),
});

export type ReservoirFormData = z.infer<typeof reservoirSchema>;
