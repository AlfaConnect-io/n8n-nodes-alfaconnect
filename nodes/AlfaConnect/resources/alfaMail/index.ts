import type { INodeProperties } from 'n8n-workflow';
import { alfaMailSendMailDescription } from './sendMail';

const showOnlyForAlfaMail = {
	resource: ['alfaMail'],
};

export const alfaMailDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForAlfaMail,
		},
		options: [
			{
				name: 'Send Mail',
				value: 'sendMail',
				action: 'Send an email',
				description: 'Send an email via AlfaMail',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/messages/alfamail/send',
					},
				},
			},
		],
		default: 'sendMail',
	},
	...alfaMailSendMailDescription,
];