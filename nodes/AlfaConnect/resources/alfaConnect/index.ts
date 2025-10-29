import type { INodeProperties } from 'n8n-workflow';
import { getProviders } from './getProviders';


export const alfaConnectDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['alfaConnect'],
			},
		},
		options: [
			{
				name: 'Get Providers',
				value: 'getProviders',
				description: 'Get the list of providers',
				action: 'Get providers',
				routing: {
					request: {
						method: 'GET',
						url: '/v1/providers',
					},
				},
			},
		],
		default: 'getProviders',
	},
	...getProviders,
];

export { getProviders };