import './Router.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../pages/home/Home';
import Maze from '../pages/mazes/Maze';
import More from '../pages/more/More';
import Rules from '../pages/rules/Rules'
import Settings from '../pages/settings/Settings';

export default function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={null}>
					<Route index element={<Home />} />
					<Route path="maze" element={<Maze />} />
					<Route path="more" element={<More />} />
					<Route path="rules" element={<Rules />} />
					<Route path="settings" element={<Settings />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}