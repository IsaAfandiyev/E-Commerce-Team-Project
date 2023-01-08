import BannerSlider from './components/BannerSlider';
import ItemsSlider from './components/ItemsSlider';
import PopularProducts from './components/PopularProducts';
import styles from './index.module.css';

function HomePage() {
	return (
		<div className={styles.wrapper}>
			<BannerSlider />
			<ItemsSlider />
			<PopularProducts />
		</div>
	);
}
export default HomePage;
