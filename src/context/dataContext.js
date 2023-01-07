import { createContext, useState, useEffect } from 'react';
import { network, BASE_URL } from '../data/data';

export const dataContext = createContext(null);
export const ProductContext = ({ children }) => {
	const [data, setData] = useState([]);
	const [categoires, setCategories] = useState([]);

	useEffect(() => {
		network.getAll(BASE_URL).then((res) => setData(res));
	}, []);

	useEffect(() => {
		network.getCategories(BASE_URL, 'categories').then((res) => setCategories(res));
	}, []);

	console.log(categoires);

	const values = {
		data,
		setData,
		categoires,
		setCategories,
	};
	return <dataContext.Provider value={values}>{children}</dataContext.Provider>;
};
