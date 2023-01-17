import React from 'react';
import styles from './index.module.css';
import MenuListComposition from './Menu';
import { Link } from 'react-router-dom';

const BottomHeader = () => {
	return (
		<div className={styles.container}>
			<div className={styles.left}>
				<MenuListComposition></MenuListComposition>
				<div className={styles.list}>
					<Link className={styles.a} to="/">
						Home
					</Link>
					<Link className={styles.a} to="/catalog">
						Catalog
					</Link>
					<Link className={styles.a} to="/favorite ">
						Favorite
					</Link>
					<p>Pages</p>
					<div style={{ width: '100px' }}>About us</div>
				</div>
			</div>
			<div className={styles.right}>
				<div>30 Days Free Return</div>
			</div>
		</div>
	);
};

export default BottomHeader;
