import BannerSlider from './components/BannerSlider';
import ItemsSlider from './components/ItemsSlider';
import PopularProducts from './components/PopularProducts';
import RandomProducts from './components/RandomProducts';
import styles from './index.module.css';

function HomePage() {
	return (
		<div className={styles.wrapper}>
			<BannerSlider />
			<ItemsSlider />
			<PopularProducts />
			<RandomProducts />
		</div>
	);
}
export default HomePage;
