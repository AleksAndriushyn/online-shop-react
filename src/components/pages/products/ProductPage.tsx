import { useAuth0 } from '@auth0/auth0-react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Button, Divider, Rating, Typography } from '@mui/material';
import Box from '@mui/material/Box/Box';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { addItemToCart } from '../../../redux/cart';
import { useCartDispatch, useCartSelector } from '../../../redux/hooks';
import '../../../styles/pages/products-page/product-page.scss';
import { Product } from '../../../types';
import Layout from '../../Layout';
import { Loading } from '../../Loading';
import Notification from './Notification';

const ProductPage = () => {
	const { productId } = useParams();
	const [product, setProduct] = useState<Product | null>(null);
	const { isAuthenticated } = useAuth0();
	const dispatch = useCartDispatch();
	const cart = useCartSelector((state: any) => state.cart.cart);
	const isAlreadyInCart = cart.some((item: Product) => item.id === product?.id);
	const [isOpen, setIsOpen] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	const onClose = (data: boolean) => {
		setIsOpen(data);
	};

	useEffect(() => {
		setIsLoading(true);
		fetch(`https://fakestoreapi.com/products/${productId}`)
			.then(async (res) => await res.json())
			.then((data) => {
				setProduct(data);
				setIsLoading(false);
			});
	}, [productId]);

	const addToCart = () => {
		if (!isAuthenticated) {
			setIsOpen(true);
			return;
		}
		dispatch(addItemToCart(product as Product));
	};

	return (
		<Layout>
			<Box className='product-page'>
				<Box className='title'>
					<h2>{product?.title}</h2>
					<Box className='rate'>
						<Rating value={product?.rating?.rate ?? 0} />
						<Typography fontSize={'14px'}>
							({product?.rating?.count} votes)
						</Typography>
					</Box>
				</Box>
				<Divider />
				{isLoading ? (
					<div>
						<Loading spinnerColor='black' />
					</div>
				) : (
					<Box className='content'>
						<Box
							className='image'
							style={{
								backgroundImage: `url(${product?.image})`,
							}}
						/>
						<Box>
							<Box className='price'>
								<Typography>
									<b>{product?.price}$</b>
								</Typography>
								<Button
									startIcon={<ShoppingCartIcon />}
									variant='contained'
									color='success'
									disabled={isAlreadyInCart}
									onClick={addToCart}>
									{isAlreadyInCart ? 'Already In Cart' : 'Add To Cart'}
								</Button>
							</Box>
							<Box className='description-block'>
								<Typography>
									<b>Description:</b>
								</Typography>
								<Typography className='description'>
									{product?.description}
								</Typography>
							</Box>
						</Box>
					</Box>
				)}
				<Notification onClose={() => onClose(false)} open={isOpen} />
			</Box>
		</Layout>
	);
};

export default ProductPage;
