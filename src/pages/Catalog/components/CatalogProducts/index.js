import React, { useContext } from 'react';
import ProductBox from '../../../../components/ProductBox';
import { dataContext } from '../../../../context/dataContext';
import styles from './index.module.css';

const CatalogProducts = ({ selectedCategory }) => {
	let { data } = useContext(dataContext);
	console.log(data);
	return (
		<div className={styles.wrapper}>
			{data &&
				data.map((item) =>
					selectedCategory ? (
						item.category === selectedCategory && (
							<div key={item.id} className={styles.wrapper}>
								<ProductBox key={item.id} item={item} />
							</div>
						)
					) : (
						<div key={item.id} className={styles.wrapper}>
							<ProductBox key={item.id} item={item} />
						</div>
					)
				)}
		</div>
	);
};

export default CatalogProducts;
