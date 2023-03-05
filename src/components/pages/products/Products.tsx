import {
	Box,
	FormControl,
	InputLabel,
	List,
	ListItem,
	MenuItem,
	Select,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../../styles/pages/products-page/products.scss';
import { Product } from '../../../types';
import Layout from '../../Layout';
import { Loading } from '../../Loading';
import Menu from './Menu';
import ProductInfo from './ProductInfo';

const Products = () => {
	const [products, setProducts] = useState<Product[]>([]);
	const [activeProductId, setActiveProductId] = useState<any>(null);
	const [categories, setCategories] = useState<string[]>([]);
	const [category, setCategory] = useState<string>('');
	const [priceSort, setPriceSort] = useState<string>('');
	const [popularity, setPopularity] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	const navigate = useNavigate();

	useEffect(() => {
		setIsLoading(true);
		fetch(`https://fakestoreapi.com/products`)
			.then(async (response) => await response.json())
			.then((data) => {
				setProducts(data);
			});
		fetch(`https://fakestoreapi.com/products/categories`)
			.then(async (response) => await response.json())
			.then((data) => {
				setCategories(data);
				setIsLoading(false);
			});
	}, []);

	const filterProductsArrayByCategory = () => {
		const filteredProducts = products.filter(
			(product: Product) => product.category === category
		);
		return filteredProducts.length ? filteredProducts : products;
	};

	const sortProducts = (a: Product, b: Product) => {
		const sortOrder = priceSort === 'From lower to higher' ? 1 : -1;
		const priceSortOrder = !priceSort ? 0 : sortOrder * (a.price - b.price);
		const popularitySortOrder = popularity
			? b.rating.count - a.rating.count
			: a.id - b.id;
		return priceSortOrder || popularitySortOrder;
	};

	return (
		<Layout>
			<Box className='product-container'>
				<h1>Products</h1>
				{isLoading ? (
					<Loading spinnerColor='black' />
				) : (
					<Box className='product-content'>
						<Menu
							categories={categories}
							category={category}
							setCategory={setCategory}
							priceSort={priceSort}
							setPriceSort={setPriceSort}
							popularity={popularity}
							setPopularity={setPopularity}
						/>
						<Box>
							<Box className='price-block'>
								<FormControl className='price-form'>
									<InputLabel>Price</InputLabel>
									<Select
										label='Price'
										value={priceSort}
										onChange={(e) => setPriceSort(e.target.value)}>
										<MenuItem value={'From lower to higher'}>
											From lower to higher
										</MenuItem>
										<MenuItem value={'From higher to lower'}>
											From higher to lower
										</MenuItem>
									</Select>
								</FormControl>
							</Box>
							<List className='product-list'>
								{filterProductsArrayByCategory()
									.sort((a, b) => sortProducts(a, b))
									.map((product: Product) => (
										<ListItem
											onClick={() => navigate(`/product/${product.id}`)}
											onMouseOver={() => {
												setActiveProductId(product.id);
											}}
											onMouseLeave={() => setActiveProductId(null)}
											key={product.id}>
											<ProductInfo
												product={product}
												productId={activeProductId}
											/>
										</ListItem>
									))}
							</List>
						</Box>
					</Box>
				)}
			</Box>
		</Layout>
	);
};

export default Products;
