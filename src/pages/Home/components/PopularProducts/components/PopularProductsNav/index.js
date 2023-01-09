import React from 'react';
import styles from './index.module.css';

const PopularProductsNav = ({ setSelectedCategory }) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.titleDiv}>
				<p className={styles.title}>Popular products</p>
			</div>
			<div className={styles.cotegorias}>
				<button onClick={() => setSelectedCategory()} className={styles.cotegoriasBtn}>
					All
				</button>
				<button onClick={() => setSelectedCategory("men's clothing")} className={styles.cotegoriasBtn}>
					Men
				</button>
				<button onClick={() => setSelectedCategory("women's clothing")} className={styles.cotegoriasBtn}>
					Women
				</button>
				<button onClick={() => setSelectedCategory('jewelery')} className={styles.cotegoriasBtn}>
					Jewelery
				</button>
				<button onClick={() => setSelectedCategory('electronics')} className={styles.cotegoriasBtn}>
					Electronic
				</button>
			</div>
		</div>
	);
};

export default PopularProductsNav;
