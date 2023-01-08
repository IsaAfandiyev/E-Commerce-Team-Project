import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ProductContext } from './context/dataContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<ProductContext>
				<App />
			</ProductContext>
		</BrowserRouter>
	</React.StrictMode>
);
