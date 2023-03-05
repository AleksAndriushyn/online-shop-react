import { Box, Divider, List, ListItem } from '@mui/material';
import { Link } from 'react-router-dom';
import { addItemToCart, clearCart, removeItemFromCart } from '../../redux/cart';
import { useCartDispatch } from '../../redux/hooks';
import { Product } from '../../types';
import CartContent from './CartContent';
import '../../styles/message.scss';

const Cart = ({ cart, onClose }: { cart: Product[]; onClose: Function }) => {
	const cartDispatch = useCartDispatch();

	const onSubmit = (e: any) => {
		e.preventDefault();
		cartDispatch(clearCart());
		onClose();
	};

	const removeItem = (item: Product) => {
		cartDispatch(removeItemFromCart(item));
	};

	const addItem = (item: Product) => {
		cartDispatch(addItemToCart(item));
	};

	return (
		<form id='cart-form' onSubmit={onSubmit}>
			{cart.length ? (
				<List>
					{cart
						.filter(
							(el, index, self) =>
								self.findIndex((findEl) => findEl.id === el.id) === index
						)
						.map((item: Product) => (
							<Box key={item.id}>
								<ListItem>
									<CartContent
										item={item}
										cart={cart}
										removeItem={removeItem}
										addItem={addItem}
									/>
								</ListItem>
								<Divider />
							</Box>
						))}
				</List>
			) : (
				<div className='message'>
					<p>No products were added</p>
					<Link to='/products' onClick={() => onClose()}>
						Search For Products
					</Link>
				</div>
			)}
		</form>
	);
};

export default Cart;
