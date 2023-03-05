import { useAuth0 } from '@auth0/auth0-react';
import { Box, Typography } from '@mui/material';
import { useEffect } from 'react';
import '../../styles/pages/profile.scss';
import CustomButton from '../CustomButton';
import Layout from '../Layout';

const Profile = () => {
	const { isAuthenticated, user, loginWithRedirect, logout } = useAuth0();

	useEffect(() => {
		if (!isAuthenticated) {
			loginWithRedirect();
		}
	}, [isAuthenticated, loginWithRedirect]);

	console.log(user);

	return (
		<Layout>
			<h1>Profile Page</h1>
			<Box className='profile-page'>
				<Box
					className='profile-image'
					style={{
						backgroundImage: `url(${user?.picture})`,
					}}
				/>
				<Box className='profile-info'>
					<Typography>
						Name: <b>{user?.name}</b>
					</Typography>
					<Typography className='description'>
						Nickname: <b>{user?.nickname}</b>
					</Typography>
					<Typography className='description'>
						Email: <b>{user?.email}</b>
					</Typography>
					<CustomButton onClick={() => logout()} color='error'>
						Log Out
					</CustomButton>
				</Box>
			</Box>
		</Layout>
	);
};

export default Profile;
