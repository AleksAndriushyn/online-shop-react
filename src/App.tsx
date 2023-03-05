import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/pages/Footer';
import Main from './components/pages/Main';
import ProductPage from './components/pages/products/ProductPage';
import Products from './components/pages/products/Products';
import Profile from './components/pages/Profile';

function App() {
	return (
		<div className='App'>
			<Header />
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='/products' element={<Products />} />
				<Route path='/profile' element={<Profile />} />
				<Route path='/product/:productId' element={<ProductPage />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;

