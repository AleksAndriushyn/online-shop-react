import { AppState, RedirectLoginOptions } from '@auth0/auth0-react';
import CustomButton from './CustomButton';

export function UnauthenticatedUser({
	loginWithRedirect,
}: {
	loginWithRedirect: (
		options?: RedirectLoginOptions<AppState> | undefined
	) => Promise<void>;
}) {
	return <CustomButton onClick={() => loginWithRedirect()}>Login</CustomButton>;
}
