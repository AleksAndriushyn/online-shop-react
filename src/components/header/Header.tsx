import { useAuth0 } from '@auth0/auth0-react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge, Box, Toolbar } from '@mui/material';
import { useState } from 'react';
import { useCartSelector } from '../../redux/hooks';
import '../../styles/header.scss';
import { AuthenticatedUser } from '../AuthenticatedUser';
import CartModal from '../cart/CartModal';
import { Loading } from '../Loading';
import { UnauthenticatedUser } from '../UnauthenticatedUser';
import Navbar from './Navbar';

function Header() {
	const { isLoading, user, logout, loginWithRedirect, isAuthenticated } =
		useAuth0();
	const cart = useCartSelector((state: any) => state?.cart?.cart);
	const [open, setOpen] = useState(false);

	const openCartModal = (data: boolean) => {
		setOpen(data);
	};

	return (
		<Box className='header'>
			<Toolbar>
				<Navbar />
				<Box className='user-block'>
					<Badge color='success' badgeContent={cart?.length ?? 0}>
						<ShoppingCartIcon
							className='cart-icon'
							onClick={() => openCartModal(true)}
						/>
					</Badge>
					{isLoading ? (
						<Loading />
					) : isAuthenticated ? (
						<AuthenticatedUser user={user} logout={logout} />
					) : (
						<UnauthenticatedUser loginWithRedirect={loginWithRedirect} />
					)}
				</Box>
			</Toolbar>
			<CartModal
				isAuthenticated={isAuthenticated}
				cart={cart}
				open={open}
				onClose={() => openCartModal(false)}
			/>
		</Box>
	);
}

export default Header;
