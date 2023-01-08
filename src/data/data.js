import axios from 'axios';

export const BASE_URL = 'https://fakestoreapi.com/products';

const axiosInstance = axios.create({
	baseURL: BASE_URL,
	timeout: 1000,
});

export const network = {
	getAll: async (url) => {
		let responseData = [];
		await axiosInstance
			.get(`${url}`)
			.then((res) => {
				responseData = res.data;
			})
			.catch((err) => {
				console.log('Error', err);
				throw err;
			});

		return responseData;
	},
	getCategories: async (url, category) => {
		let responseData = [];
		await axiosInstance
			.get(`${url}/${category}`)
			.then((res) => {
				responseData = res.data;
			})
			.catch((err) => {
				console.log('Error', err);
				throw err;
			});

		return responseData;
	},
	getById: async (url, id) => {
		let response = {};
		await axiosInstance.get(`${url}/${id}`).then((res) => {
			response = res.data;
		});

		return response;
	},
};
