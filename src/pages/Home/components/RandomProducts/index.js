import RandomProductSlider from './components/RandomProductSlider';
import RandomProductBox from './components/RandomProductBox';
import styles from './index.module.css';

function RandomProducts() {
	return (
		<section className={styles.wrapper}>
			<RandomProductSlider />
			<RandomProductBox />
		</section>
	);
}
export default RandomProducts;
