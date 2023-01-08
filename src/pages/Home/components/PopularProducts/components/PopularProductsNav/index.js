import React from 'react';
import styles from './index.module.css';

const PopularProductsNav = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.titleDiv}>
				<p className={styles.title}>Popular products</p>
			</div>
			<div className={styles.cotegorias}>
				<button className={styles.cotegoriasBtn}>All</button>
				<button className={styles.cotegoriasBtn}>Men</button>
				<button className={styles.cotegoriasBtn}>Women</button>
				<button className={styles.cotegoriasBtn}>Jewelery</button>
				<button className={styles.cotegoriasBtn}>Electronic</button>
			</div>
		</div>
	);
};

export default PopularProductsNav;
