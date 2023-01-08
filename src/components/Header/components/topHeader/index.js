import React from 'react';
import styles from './index.module.css';
import locationLogo from '../../../../assets/icons/header/location.svg';
import trackLogo from '../../../../assets/icons/header/group.svg';
const TopHeader = () => {
	return (
		<div className={styles.container}>
			<div>Need help? Call us: (+98) 0234 456 789</div>
			<div className={styles.right}>
				<div className={styles.store}>
					<img src={locationLogo} alt="" />
					<p>Our Store</p>
				</div>
				<div className={styles.track}>
					<img src={trackLogo} alt="" />
					<p>Track your order</p>
				</div>
			</div>
		</div>
	);
};

export default TopHeader;
