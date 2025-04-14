import * as z from "zod";

export const reservoirSchema = z
	.object({
		name: z.string().nonempty("Название резервуара обязательно"),
		capacity: z.number().positive("Вместимость должна быть положительным числом"),
		volume: z.number().min(0, "Объем должен быть больше или равен 0"),
		productId: z.number().positive("Выберите продукт"),
	})
	.superRefine(({ capacity, volume }, ctx) => {
		if (volume > capacity) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message: "Объем не может превышать вместимость",
				path: ["volume"],
			});
		}
	});

export type ReservoirFormData = z.infer<typeof reservoirSchema>;
