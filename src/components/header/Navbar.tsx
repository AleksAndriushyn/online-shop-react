import { List, ListItem } from '@mui/material';
import { Link } from 'react-router-dom';
import '../../styles/navbar.scss';

const Navbar = () => {
	const menus = [
		{ name: 'Main', link: '/' },
		{ name: 'Products', link: '/products' },
		{ name: 'Profile', link: '/profile' },
	];

	return (
		<List className='nav-list'>
			{menus.map((menu) => (
				<ListItem key={menu.name}>
					<Link className='link' to={menu.link}>
						{menu.name}
					</Link>
				</ListItem>
			))}
		</List>
	);
};

export default Navbar;
