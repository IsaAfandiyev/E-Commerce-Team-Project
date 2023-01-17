import React, { useContext } from 'react';
import ProductBox from '../../../../../../components/ProductBox';
import { dataContext } from '../../../../../../context/dataContext';
import styles from './index.module.css';

const PopularProductsSlider = ({ selectedCategory }) => {
	let { data } = useContext(dataContext);

	console.log(data);
	return (
		<div className={styles.wrapper}>
			{data &&
				data.map((item) =>
					selectedCategory ? (
						item.category === selectedCategory && (
							<div className={styles.wrapper}>
								<ProductBox key={item.id} item={item} />
							</div>
						)
					) : (
						<div className={styles.wrapper}>
							<ProductBox key={item.id} item={item} />
						</div>
					)
				)}
		</div>
	);
};

export default PopularProductsSlider;
