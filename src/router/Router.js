import './Router.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../pages/home/Home';
import Maze from '../pages/mazes/Maze';
import More from '../pages/more/More';

export default function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={null}>
					<Route index element={<Home />} />
					<Route path="maze" element={<Maze />} />
					<Route path="more" element={<More />} >
						<Route path="rules" element={null} />
						<Route path="settings" element={null} />
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}