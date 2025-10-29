import type { INodeProperties } from 'n8n-workflow';

export const genericGet: INodeProperties[] = [
	{
		displayName: 'Request Path',
		name: 'path',
		type: 'string',
		required: true,
		default: '',
		placeholder: '/v1/your-endpoint',
		description: 'The API endpoint path to request (e.g., /v1/users, /v1/status)',
		displayOptions: {
			show: {
				resource: ['alfaConnect'],
				operation: ['genericGet'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['alfaConnect'],
				operation: ['genericGet'],
			},
		},
		options: [
			{
				displayName: 'Limit',
				name: 'limit',
				type: 'number',
				default: 50,
				description: 'Max number of results to return',
				typeOptions: {
					minValue: 1,
					maxValue: 1000,
				},
			},
			{
				displayName: 'Offset',
				name: 'offset',
				type: 'number',
				default: 0,
				description: 'Number of results to skip',
				typeOptions: {
					minValue: 0,
				},
			},
		],
	},
];