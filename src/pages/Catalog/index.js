import React, { useState } from 'react';
import styles from './index.module.css';
import Categories from './components/Categories';
import CatalogProducts from './components/CatalogProducts';
import PriceFilter from './components/PriceFilter';

const CatalogPage = () => {
	const [selectedCategory] = useState('');
	return (
		<div className={styles.wrapper}>
			<div className={styles.sidebar}>
				<Categories />
				<PriceFilter />
			</div>
			<div className={styles.mainContent}>
				<CatalogProducts selectedCategory={selectedCategory} />
			</div>
		</div>
	);
};

export default CatalogPage;
