import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../types';

const cart = JSON.parse(localStorage.getItem('cart') ?? '[]');

const initialState = { cart };

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItemToCart: (state, action: PayloadAction<Product>) => {
			console.log(action.payload);
			state.cart.push(action.payload);
			localStorage.setItem('cart', JSON.stringify(state.cart));
		},
		removeItemFromCart: (state, action: PayloadAction<Product>) => {
			const indexOfPayload = state.cart.findIndex(
				(el: Product) => el.id === action.payload.id
			);

			state.cart = [
				...state.cart.slice(0, indexOfPayload),
				...state.cart.slice(indexOfPayload + 1),
			];
			localStorage.setItem('cart', JSON.stringify(state.cart));
		},
		clearCart: (state) => {
			state.cart = [];
			localStorage.removeItem('cart');
		},
	},
});

export const { addItemToCart, removeItemFromCart, clearCart } =
	cartSlice.actions;
export default cartSlice.reducer;
