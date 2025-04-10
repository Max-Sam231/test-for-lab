export const getAllReservoir = async () => {
	try {
		const response = await fetch("API_URL/reservoirs/", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				"Access-Control-Allow-Origin": "*",
			},
		});
		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}
		const data = await response.json();
		console.log(data);
		return data;
	} catch (error) {
		console.error("Ошибка:", error);
		throw error;
	}
};

export const getReservoirById = async (reservoirId: number) => {
	try {
		const response = await fetch(`API_URL/reservoirs/${reservoirId}`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				"Access-Control-Allow-Origin": "*",
			},
		});

		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}
		const data = await response.json();
		console.log(data);
		return data;
	} catch (error) {
		console.error("Ошибка:", error);
		throw error;
	}
};

export const createReservoir = async (reservoir:string) => {
	try {
		const response = await fetch("API_URL/reservoirs/", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Access-Control-Allow-Origin": "*",
			},
			body: JSON.stringify(reservoir),
		});

		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		const data = await response.json();
		console.log(data);
		return data;
	} catch (error) {
		console.error("Ошибка:", error);
		throw error;
	}
};

export const updateReservoir = async (reservoirId: string, updatedReservoir: string) => {
	try {
		const response = await fetch(`API_URL/reservoirs/${reservoirId}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
				"Access-Control-Allow-Origin": "*",
			},
			body: JSON.stringify(updatedReservoir),
		});

		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}
		const data = await response.json();
		console.log(data);
		return data;
	} catch (error) {
		console.error("Ошибка:", error);
		throw error;
	}
};

export const deleteReservoir = async (reservoirId: string) => {
	try {
		const response = await fetch(`https://reservoir-api.caravanlabs.ru/reservoirs/${reservoirId}`, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
				"Access-Control-Allow-Origin": "*",
			},
		});

		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}
		console.log(`Резервуар ${reservoirId} успешно удален`);
		return true;
	} catch (error) {
		console.error("Ошибка:", error);
		throw error;
	}
};
