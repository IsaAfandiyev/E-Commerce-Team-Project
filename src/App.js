import './app.css';
import PageRoutes from './Routes';
import PopularProducts from "./pages/Home/components/PopularProducts";

function App() {
	return (
		<>
			<PageRoutes />
			<PopularProducts/>
		</>
	);
}

export default App;
