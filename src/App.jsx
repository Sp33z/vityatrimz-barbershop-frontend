import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from './components/layout/main.layout';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" index element={<MainLayout />}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
