import type {
	IAuthenticateGeneric,
	Icon,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class AlfaConnectApi implements ICredentialType {
	name = 'alfaConnectApi';

	displayName = 'AlfaConnect API';

	icon: Icon = { light: 'file:../icons/alfaconnect.svg', dark: 'file:../icons/alfaconnect.dark.svg' };

	documentationUrl = 'https://alfaconnect.io/docs/api';

	properties: INodeProperties[] = [
		{
			displayName: 'Client ID',
			name: 'clientId',
			type: 'string',
			default: '',
			required: true,
			description: 'Your AlfaConnect Client ID',
		},
		{
			displayName: 'Secret ID',
			name: 'secretId',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			required: true,
			description: 'Your AlfaConnect Secret ID',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				'x-alfa-client-id': '={{$credentials?.clientId}}',
				'x-alfa-secret-id': '={{$credentials?.secretId}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://api.alfaconnect.io',
			url: '/v1/auth/test',
			method: 'GET',
		},
	};
}