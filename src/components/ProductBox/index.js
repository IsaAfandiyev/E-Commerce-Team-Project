import React from 'react';
import styles from './index.module.css';
import star from '../../assets/icons/star.svg';
import heart from '../../assets/icons/heart.svg';

const ProductBox = ({ item }) => {
	return (
		<div className={styles.container}>
			<div className={styles.imgDiv}>
				<img className={styles.img} src={item.image} alt="img" />
				<img className={styles.heart} src={heart} alt="heart" />
			</div>
			<div className={styles.textDiv}>
				<div className={styles.title}>{item.title.substring(0, 15)}...</div>
				<div className={styles.price}>${item.price}</div>
				<div className={styles.stars}>
					<img src={star} alt="star" />
					<img src={star} alt="star" />
					<img src={star} alt="star" />
					<img src={star} alt="star" />
					<img src={star} alt="star" />
				</div>
			</div>
		</div>
	);
};

export default ProductBox;
