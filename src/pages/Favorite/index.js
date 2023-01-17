import React, { useContext } from 'react';
import ProductBox from '../../components/ProductBox';
import { dataContext } from '../../context/dataContext';
import styles from './index.module.css';

const FavoritePage = () => {
	let { addFavourite, setAddFavourite, showFavourite } = useContext(dataContext);

	console.log(showFavourite);

	return (
		<>
			<div className={styles.btnDiv}>
				<button className={styles.btn} onClick={() => setAddFavourite([])}>
					clear all favorites
				</button>
			</div>

			<div className={styles.wrapper}>
				{addFavourite?.map((item) => (
					<div key={item.id} className={styles.wrapper}>
						<ProductBox key={item.id} item={item} />
					</div>
				))}
			</div>
		</>
	);
};

export default FavoritePage;
