import React, { useContext } from 'react';
import ProductBox from '../../../../../../components/ProductBox';
import { dataContext } from '../../../../../../context/dataContext';
import styles from './index.module.css';

const PopularProductsSlider = () => {
	let { data } = useContext(dataContext);
	return (
		<div className={styles.wrapper}>
			{data &&
				data.map((item) => (
					<div className={styles.wrapper}>
						<ProductBox item={item} />
					</div>
				))}
		</div>
	);
};

export default PopularProductsSlider;
