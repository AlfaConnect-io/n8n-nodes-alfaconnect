import type { INodeProperties } from 'n8n-workflow';
import { nimbaSmsGetBalanceDescription } from './getBalance';

const showOnlyForNimbaSms = {
	resource: ['nimbaSms'],
};

export const nimbaSmsDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForNimbaSms,
		},
		options: [
			{
				name: 'Get Balance',
				value: 'getBalance',
				action: 'Get SMS balance',
				description: 'Get your current SMS balance',
				routing: {
					request: {
						method: 'GET',
						url: '/v1/nimba-sms/balance',
					},
				},
			},
		],
		default: 'getBalance',
	},
	...nimbaSmsGetBalanceDescription,
];