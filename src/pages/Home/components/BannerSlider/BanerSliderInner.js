import React from 'react';
import styles from './index.module.css';
import Camera from '../../../../assets/images/home/camerafromBannerSlider.png';

const BanerSliderInner = () => {
	return (
		<div className={styles.container}>
			<div className={styles.leftContainer}>
				<div className={styles.title}>Canon camera</div>
				<div className={styles.titleBtn}>
					<button className={styles.btn + ' ' + styles.btnshop}>Show now</button>
					<button className={styles.btn + ' ' + styles.btnmore}>View More</button>
				</div>
			</div>
			<div className={styles.rightContainer}>
				<img src={Camera} alt="camera" />
				<div className={styles.price}>
					<p className={styles.priceText}>
						only
						<br /> $89
					</p>
				</div>
			</div>
		</div>
	);
};

export default BanerSliderInner;
