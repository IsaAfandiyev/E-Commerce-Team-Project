import React from 'react';
import styles from './index.module.css';

const PriceFilter = () => {
	return (
		<div className={styles.wrapper}>
			<h2>Price</h2>
			<div className="card-body">
				<form id="price-range-form">
					<span id="min-price-txt">$0</span>
					<input type="range" className="form-range" min="0" max="99" id="min-price" step="1" value="0" />
					<label for="max-price" className="form-label"></label>
					<span id="max-price-txt">$999</span>
				</form>
			</div>
		</div>
	);
};

export default PriceFilter;
