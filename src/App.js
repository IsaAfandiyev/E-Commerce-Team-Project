import './app.css';
import { ProductContext } from './context/dataContext';
import BannerSlider from './pages/Home/components/BannerSlider';

function App() {
	return (
		<div className="App">
			<BannerSlider />
			<ProductContext />
		</div>
	);
}

export default App;
