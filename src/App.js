import Header from "./components/Header";
import './app.css';
import {
	BrowserRouter as Router,
	Switch,
	Routes,
	Route,
	Link, BrowserRouter
} from "react-router-dom";
import HomePage from "./pages/Home/index"

function App() {
	return <>
		<Routes>
			<Route path='/' element={<HomePage/>}/>
		</Routes>
	</>
		;
}

export default App;
