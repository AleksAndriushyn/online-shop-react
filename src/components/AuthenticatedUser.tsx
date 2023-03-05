import { LogoutOptions, User } from '@auth0/auth0-react';
import { Avatar } from '@mui/material';
import CustomButton from './CustomButton';

export function AuthenticatedUser({
	user,
	logout,
}: {
	user: User | undefined;
	logout: (options?: LogoutOptions | undefined) => void;
}) {
	return (
		<>
			<Avatar src={user?.picture} />
			<p>{user?.nickname}</p>
			<CustomButton color='error' onClick={() => logout()}>
				Log out
			</CustomButton>
		</>
	);
}
