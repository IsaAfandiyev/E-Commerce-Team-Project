import BannerSlider from './components/BannerSlider';
import ItemsSlider from './components/ItemsSlider';
import PopularProducts from './components/PopularProducts';
import RandomProducts from './components/RandomProducts';
import styles from './index.module.css';
import Specials from "./components/Specials";

function HomePage() {
	return (
		<div className={styles.wrapper}>
			<BannerSlider />
			<ItemsSlider />
			<PopularProducts />
			<RandomProducts />
			<Specials/>
		</div>
	);
}
export default HomePage;
