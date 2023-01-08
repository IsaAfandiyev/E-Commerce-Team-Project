import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/Home';
import PageLayout from '../components/PageLayout/index';

function PageRoutes() {
	return (
		<>
			<Routes>
				<Route path="/" element={<PageLayout />}>
					<Route index element={<HomePage />} />
				</Route>
			</Routes>
		</>
	);
}

export default PageRoutes;
