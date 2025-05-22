import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from './components/layout/main.layout';
import { MainSwiperProvider } from './contexts/main.swiper.context';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					index
					element={
						<MainSwiperProvider>
							<MainLayout />
						</MainSwiperProvider>
					}
				></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
