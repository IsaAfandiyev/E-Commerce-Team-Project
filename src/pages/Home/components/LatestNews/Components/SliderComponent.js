import styles from './index.module.css';
function SliderComponent({ img }) {
	return (
		<>
			<div className={styles.container}>
				<div className={styles.left}>
					<img src={img} alt="" className={styles.img} />
				</div>
				<div className={styles.right}>
					<div className={styles.date}>22,oct,2021</div>
					<div className={styles.title}>Who avoids a pain that produces?</div>
					<div className={styles.text}>
						Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus
						tristique aenean at lorem sed scelerisque.
					</div>
					<div className={styles.footer}>By spacing tech</div>
				</div>
			</div>
		</>
	);
}
export default SliderComponent;
