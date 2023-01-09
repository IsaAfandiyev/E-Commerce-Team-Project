import BannerSlider from './components/BannerSlider';
import ItemsSlider from './components/ItemsSlider';
import PopularProducts from './components/PopularProducts';
import RandomProducts from './components/RandomProducts';
import styles from './index.module.css';
import Specials from "./components/Specials";
import Sponsors from "./components/Sponsors";
import AboutUs from "./components/AboutUs";
import LatestNews from "./components/LatestNews";

function HomePage() {
	return (
		<div className={styles.wrapper}>
			<BannerSlider />
			<ItemsSlider />
			<PopularProducts />
			<RandomProducts />
			<Specials/>
			<Sponsors/>
			<AboutUs/>
			<LatestNews/>
		</div>
	);
}
export default HomePage;
