export const idGenerator = () => {
	//return Date.now() + "" + Math.round(Math.random() * 16);   //ako je number i number, onda zbraja, inače konkatenira
	return String(Date.now()) + Math.round(Math.random() * 16 * 1000000); //ili ovako
};

export const addToStorage = (key, data) => {
	try {
		const storageData = JSON.parse(localStorage.getItem(key)) ?? []; //ako je storage prazan s nuliš operatorom stavi prazan array
		storageData.unshift(data); //push stavlja na kraj polja, unshift na početak polja
		localStorage.setItem(key, JSON.stringify(storageData));
	} catch (error) {
		throw error;
	}
};

export const deleteFromStorage = (key, data) => {
	try {
		const storageData = JSON.parse(localStorage.getItem(key)) ?? []; //ako je storage prazan s nuliš operatorom stavi prazan array
		const newStorageData = storageData.filter(
			(value) => value.id !== data.id
		);
		localStorage.setItem(key, JSON.stringify(newStorageData));
	} catch (error) {
		throw error;
	}
};
