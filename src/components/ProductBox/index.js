import React, { useContext } from 'react';
import styles from './index.module.css';
import star from '../../assets/icons/star.svg';
import heart from '../../assets/icons/heart.svg';
import heartRed from '../../assets/icons/heartRed.svg';
import { dataContext } from '../../context/dataContext';

const ProductBox = ({ item }) => {
	let { addFavourite, setAddFavourite } = useContext(dataContext);

	const saveToLocalStorage = (items) => {
		localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
	};

	const handleAddFavourite = (item) => {
		const newFavouriteList = () => {
			if (addFavourite.includes(item)) {
				return addFavourite.filter((e) => e !== item);
			} else {
				return [...addFavourite, item];
			}
		};
		setAddFavourite(newFavouriteList);
		saveToLocalStorage(newFavouriteList);
	};

	return (
		<div key={item.id} className={styles.container}>
			<div className={styles.imgDiv}>
				<img className={styles.img} src={item?.image} alt="img" />
				<img
					onClick={() => handleAddFavourite(item)}
					className={styles.heart}
					src={addFavourite.includes(item) ? heartRed : heart}
					alt="heart"
				/>
			</div>
			<div className={styles.textDiv}>
				<div className={styles.title}>{item?.title.substring(0, 15)}...</div>
				<div className={styles.price}>${item?.price}</div>
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
