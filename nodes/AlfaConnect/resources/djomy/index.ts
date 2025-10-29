import type { INodeProperties } from 'n8n-workflow';
import { getPayments } from './getPayments';

export const djomyDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['djomy'],
			},
		},
		options: [
			{
				name: 'Get Payments',
				value: 'getPayments',
				description: 'Get the list of payments',
				action: 'Get payments',
				routing: {
					request: {
						method: 'GET',
						url: '/v1/payments/djomy/links',
					},
				},
			},
		],
		default: 'getPayments',
	},
	...getPayments,
];

export { getPayments };