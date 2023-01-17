import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/Home';
import PageLayout from '../components/PageLayout/index';
import CatalogPage from '../pages/Catalog';
import FavoritePage from '../pages/Favorite';

function PageRoutes() {
	return (
		<>
			<Routes>
				<Route path="/" element={<PageLayout />}>
					<Route index element={<HomePage />} />
					<Route path="/catalog" element={<CatalogPage />} />
					<Route path="/favorite" element={<FavoritePage />} />
				</Route>
			</Routes>
		</>
	);
}

export default PageRoutes;
