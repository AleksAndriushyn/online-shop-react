import { Auth0Provider } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';

const Auth0ProviderWithHistory = ({ children }: { children: any }) => {
	const domain = process.env.REACT_APP_AUTH0_DOMAIN as string;
	const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID as string;
	const history = useNavigate();

	const onRedirectCallback = (appState: any) => {
		history(appState?.returnTo || window.location.pathname);
	};

	return (
		<Auth0Provider
			domain={domain}
			clientId={clientId}
			authorizationParams={{
				redirect_uri: window.location.origin,
			}}
			onRedirectCallback={onRedirectCallback}>
			{children}
		</Auth0Provider>
	);
};

export default Auth0ProviderWithHistory;
