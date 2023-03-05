import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
} from '@mui/material';
import { Product } from '../../types';
import Cart from './Cart';

const CartModal = ({
	open,
	onClose,
	cart,
	isAuthenticated,
}: {
	open: boolean;
	onClose: Function;
	cart: Product[];
	isAuthenticated: boolean;
}) => {
	const countTotalPrice = () => {
		return cart
			.reduce((accumulator, object) => {
				return accumulator + object.price;
			}, 0)
			.toFixed(2);
	};

	return (
		<Dialog onClose={() => onClose()} open={open} fullWidth>
			<DialogTitle>Cart</DialogTitle>
			<DialogContent>
				{!isAuthenticated ? (
					'You need to authorize'
				) : (
					<Cart cart={cart} onClose={onClose} />
				)}
			</DialogContent>
			{cart.length !== 0 && isAuthenticated && (
				<DialogActions>
					<Button onClick={() => onClose()}>Close</Button>
					<Button
						color='success'
						variant='contained'
						form='cart-form'
						disabled={!isAuthenticated ?? !cart.length}
						type='submit'>
						Checkout {countTotalPrice()}$
					</Button>
				</DialogActions>
			)}
		</Dialog>
	);
};

export default CartModal;
