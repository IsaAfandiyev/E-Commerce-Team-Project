import React, { useContext } from 'react';
import { ProductContext } from '../../../../context/dataContext';
import styles from './index.module.css';

const ItemsSlider = () => {
	let { data } = useContext(ProductContext);
	console.log(data);
	return (
		<>
			<div className={styles.box}>
				<div className={styles.left}>
					<img src="" alt="" />
				</div>
				<div>
					<div className="title"></div>
				</div>
			</div>
		</>
	);
};

export default ItemsSlider;
