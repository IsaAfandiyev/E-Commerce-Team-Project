import React from 'react';
import styles from './index.module.css';

const ItemsSliderInner = ({ item }) => {
	return (
		<div className={styles.container}>
			<div className={styles.box}>
				<div className={styles.left}>
					<img className={styles.img} src={item.image} alt="" />
				</div>
				<div className={styles.right}>
					<div className={styles.title}>{item.title.substring(0, 20)}...</div>
					<div className={styles.price}>price: {item.price}</div>
				</div>
			</div>
		</div>
	);
};

export default ItemsSliderInner;
