import { Checkbox } from '@mui/material';
import React from 'react';
import styles from './index.module.css';

const Categories = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.title}>Categories</div>
			<div className={styles.checbox}>
				<span>
					<Checkbox />
					All
				</span>
				<span className={styles.items}>10</span>
			</div>
			<div className={styles.checbox}>
				<span>
					<Checkbox />
					Men
				</span>
				<span className={styles.items}>10</span>
			</div>
			<div className={styles.checbox}>
				<span>
					<Checkbox />
					Women
				</span>
				<span className={styles.items}>10</span>
			</div>
			<div className={styles.checbox}>
				<span>
					<Checkbox />
					Jewelery
				</span>
				<span className={styles.items}>10</span>
			</div>
			<div className={styles.checbox}>
				<span>
					<Checkbox />
					Electronic
				</span>
				<span className={styles.items}>10</span>
			</div>
		</div>
	);
};

export default Categories;
