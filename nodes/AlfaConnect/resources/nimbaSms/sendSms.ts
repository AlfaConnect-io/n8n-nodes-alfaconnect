import type { INodeProperties } from 'n8n-workflow';

const showOnlyForNimbaSendSms = {
	operation: ['sendSms'],
	resource: ['nimbaSms'],
};

export const nimbaSendSmsDescription: INodeProperties[] = [
	{
		displayName: 'Sender Name',
		name: 'sendername',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForNimbaSendSms,
		},
		default: '',
		placeholder: 'AlfaConnect',
		description: 'The name that will appear as the sender of the SMS',
		routing: {
			send: {
				type: 'body',
				property: 'sender_name',
			},
		},
	},
	{
		displayName: 'Message',
		name: 'message',
		type: 'string',
		typeOptions: {
			rows: 3,
		},
		required: true,
		displayOptions: {
			show: showOnlyForNimbaSendSms,
		},
		default: '',
		placeholder: 'Your SMS message here...',
		description: 'The SMS message to send',
		routing: {
			send: {
				type: 'body',
				property: 'message',
			},
		},
	},
	{
		displayName: 'Phone Numbers',
		name: 'to',
		type: 'fixedCollection',
		required: true,
		displayOptions: {
			show: showOnlyForNimbaSendSms,
		},
		default: { numbers: [{ number: '' }] },
		typeOptions: {
			multipleValues: true,
			multipleValueButtonText: 'Add Phone Number',
		},
		options: [
			{
				displayName: 'Phone Numbers',
				name: 'numbers',
				values: [
					{
						displayName: 'Phone Number',
						name: 'number',
						type: 'string',
						default: '',
						placeholder: '+224XXXXXXXXX',
						description: 'Phone number in international format (e.g., +224XXXXXXXXX)',
					},
				],
			},
		],
		routing: {
			send: {
				type: 'body',
				property: 'to',
				value: '={{$value.numbers.map(item => item.number)}}',
			},
		},
	},
    /**
     * Options for sending SMS
     */
    /*
	{
		displayName: 'Options',
		name: 'options',
		type: 'collection',
		placeholder: 'Add Option',
		default: {},
		displayOptions: {
			show: showOnlyForNimbaSendSms,
		},
		options: [
			{
				displayName: 'Schedule Send',
				name: 'scheduledAt',
				type: 'dateTime',
				default: '',
				description: 'Schedule the SMS to be sent at a specific time',
				routing: {
					send: {
						type: 'body',
						property: 'scheduled_at',
					},
				},
			},
			{
				displayName: 'Priority',
				name: 'priority',
				type: 'options',
				options: [
					{
						name: 'Low',
						value: 'low',
					},
					{
						name: 'Normal',
						value: 'normal',
					},
					{
						name: 'High',
						value: 'high',
					},
				],
				default: 'normal',
				description: 'Priority level for the SMS',
				routing: {
					send: {
						type: 'body',
						property: 'priority',
					},
				},
			},
		],
	},
    */

];