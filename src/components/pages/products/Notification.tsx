import { useAuth0 } from '@auth0/auth0-react';
import { Dialog, DialogContent, DialogTitle, Link } from '@mui/material';

const Notification = ({
	open,
	onClose,
}: {
	open: boolean;
	onClose: Function;
}) => {
    const {loginWithRedirect} = useAuth0()
	return (
		<Dialog onClose={() => onClose()} open={open} fullWidth>
			<DialogTitle>Notification</DialogTitle>
			<DialogContent>
				To add an item to your cart, you need to{' '}
				<Link style={{cursor:'pointer'}} onClick={() => loginWithRedirect()}>authorize</Link>
			</DialogContent>
		</Dialog>
	);
};

export default Notification;
