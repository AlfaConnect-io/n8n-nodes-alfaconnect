import type { INodeProperties } from 'n8n-workflow';

export const genericPost: INodeProperties[] = [
	{
		displayName: 'Request Path',
		name: 'path',
		type: 'string',
		required: true,
		default: '',
		placeholder: '/v1/your-endpoint',
		description: 'The API endpoint path to request (e.g., /v1/users, /v1/create)',
		displayOptions: {
			show: {
				resource: ['alfaConnect'],
				operation: ['genericPost'],
			},
		},
	},
	{
		displayName: 'Request Body (JSON)',
		name: 'body',
		type: 'json',
		default: '{}',
		description: 'JSON payload to send in the request body',
		displayOptions: {
			show: {
				resource: ['alfaConnect'],
				operation: ['genericPost'],
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
				operation: ['genericPost'],
			},
		},
		options: [
			{
				displayName: 'Content Type',
				name: 'contentType',
				type: 'options',
				default: 'application/json',
				description: 'Content type of the request',
				options: [
					{
						name: 'Application/JSON',
						value: 'application/json',
					},
					{
						name: 'Application/X-WWW-Form-Urlencoded',
						value: 'application/x-www-form-urlencoded',
					},
				],
			},
		],
	},
];