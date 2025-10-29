import type { INodeProperties } from 'n8n-workflow';
import { nimbaSmsGetBalanceDescription } from './getBalance';
import { nimbaSendSmsDescription } from './sendSms';

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
						url: '/v1/messages/nimbasms/balance',
					},
				},
			},
			{
				name: 'Send SMS',
				value: 'sendSms',
				action: 'Send an SMS',
				description: 'Send an SMS message',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/messages/nimbasms/messages',
					},
				},
			},
		],
		default: 'getBalance',
	},
	...nimbaSmsGetBalanceDescription,
	...nimbaSendSmsDescription,
];