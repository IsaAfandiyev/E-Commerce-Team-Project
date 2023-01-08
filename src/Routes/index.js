import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/Home';
import PageLayout from '../components/PageLayout/index';
import CatalogPage from '../pages/Catalog';

function PageRoutes() {
	return (
		<>
			<Routes>
				<Route path="/" element={<PageLayout />}>
					<Route index element={<HomePage />} />
					<Route path="/catalog" element={<CatalogPage />} />
				</Route>
			</Routes>
		</>
	);
}

export default PageRoutes;
