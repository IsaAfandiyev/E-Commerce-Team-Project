import React, { useContext } from 'react';
import { ProductContext } from '../../../../context/dataContext';
import styles from './index.module.css';

const ItemsSlider = () => {
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
