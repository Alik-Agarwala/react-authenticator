import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Auth0Provider
		domain='dev-mv3d3mfm1z64w6bx.us.auth0.com'
		clientId='hLGK6KRz5F55c66ol2O6Fpp9hznflHPE'
		redirectUri={window.location.origin}>
		<App />
	</Auth0Provider>
);
