import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Box, Chip, IconButton, ListItemText } from '@mui/material';
import { Product } from '../../types';
import '../../styles/cart.scss';

const CartContent = ({
	item,
	cart,
	removeItem,
	addItem,
}: {
	item: Product;
	cart: Product[];
	removeItem: Function;
	addItem: Function;
}) => {
	const sameItems = (itemId: number) => {
		return cart.filter((el: Product) => el.id === itemId);
	};

	const sumPrices = (itemId: number) => {
		return sameItems(itemId)
			.reduce((accumulator: number, object: Product) => {
				return accumulator + object.price;
			}, 0)
			.toFixed(2);
	};

	return (
		<Box className='cart'>
			<Box
				className='cart-media'
				style={{
					background: `url(${item.image})`,
				}}
			/>
			<Box>
				<ListItemText className='title'>{item.title}</ListItemText>
				<IconButton onClick={() => removeItem(item)}>
					<RemoveIcon />
				</IconButton>
				<Chip label={sameItems(item.id).length} />
				<IconButton onClick={() => addItem(item)}>
					<AddIcon />
				</IconButton>
			</Box>
			<ListItemText className='price'>{sumPrices(item.id)}$</ListItemText>
		</Box>
	);
};

export default CartContent;
