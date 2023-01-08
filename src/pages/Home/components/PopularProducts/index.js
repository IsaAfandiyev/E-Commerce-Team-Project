import React, { useContext, useState } from 'react';
import { dataContext } from '../../../../context/dataContext';
import PopularProductsNav from './components/PopularProductsNav';
import PopularProductsSlider from './components/PopularProductsSlider';

const PopularProducts = () => {
	let { categories } = useContext(dataContext);
	const [selectedCategory, setSelectedCategory] = useState('');
	return (
		<div>
			<PopularProductsNav
				selectedCategory={selectedCategory}
				setSelectedCategory={setSelectedCategory}
				categories={categories}
			/>
			<PopularProductsSlider setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} />
		</div>
	);
};

export default PopularProducts;
