import type { INodeProperties } from 'n8n-workflow';

const showOnlyForAlfaMailSendMail = {
	operation: ['sendMail'],
	resource: ['alfaMail'],
};

export const alfaMailSendMailDescription: INodeProperties[] = [
	{
		displayName: 'To',
		name: 'to',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForAlfaMailSendMail,
		},
		default: '',
		placeholder: 'recipient@example.com',
		description: 'Email address of the recipient. Can be a single email or comma-separated emails.',
		routing: {
			send: {
				type: 'body',
				property: 'to',
			},
		},
	},
	{
		displayName: 'Subject',
		name: 'subject',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForAlfaMailSendMail,
		},
		default: '',
		placeholder: 'Email Subject',
		description: 'Subject line of the email',
		routing: {
			send: {
				type: 'body',
				property: 'subject',
			},
		},
	},
	{
		displayName: 'HTML Body',
		name: 'html_body',
		type: 'string',
		typeOptions: {
			rows: 5,
		},
		required: true,
		displayOptions: {
			show: showOnlyForAlfaMailSendMail,
		},
		default: '',
		placeholder: '<h1>Hello!</h1><p>Your HTML content here...</p>',
		description: 'HTML content of the email',
		routing: {
			send: {
				type: 'body',
				property: 'html_body',
			},
		},
	},
	{
		displayName: 'Options',
		name: 'options',
		type: 'collection',
		placeholder: 'Add Option',
		default: {},
		displayOptions: {
			show: showOnlyForAlfaMailSendMail,
		},
/*
		options: [
			{
				displayName: 'From Name',
				name: 'fromName',
				type: 'string',
				default: '',
				description: 'Name to appear in the "From" field',
				routing: {
					send: {
						type: 'body',
						property: 'from_name',
					},
				},
			},
			{
				displayName: 'Reply To',
				name: 'replyTo',
				type: 'string',
				default: '',
				placeholder: 'noreply@example.com',
				description: 'Email address for replies',
				routing: {
					send: {
						type: 'body',
						property: 'reply_to',
					},
				},
			},
		],
        */
	},
];