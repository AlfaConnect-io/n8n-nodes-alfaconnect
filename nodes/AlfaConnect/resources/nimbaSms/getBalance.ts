import type { INodeProperties } from 'n8n-workflow';

const showOnlyForNimbaSmsGetBalance = {
	operation: ['getBalance'],
	resource: ['nimbaSms'],
};

export const nimbaSmsGetBalanceDescription: INodeProperties[] = [
	{
		displayName: 'Options',
		name: 'options',
		type: 'collection',
		placeholder: 'Add Option',
		default: {},
		displayOptions: {
			show: showOnlyForNimbaSmsGetBalance,
		},
		options: [
			{
				displayName: 'Include Details',
				name: 'includeDetails',
				type: 'boolean',
				default: false,
				description: 'Whether to include detailed balance information',
			},
		],
	},
];