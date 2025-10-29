import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { nimbaSmsDescription } from './resources/nimbaSms';
import { alfaMailDescription } from './resources/alfaMail';

export class AlfaConnect implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'AlfaConnect',
		name: 'alfaConnect',
		icon: { light: 'file:../../icons/github.svg', dark: 'file:../../icons/github.dark.svg' },
		group: ['input'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Interact with AlfaConnect services (NimbaSMS, AlfaMail)',
		defaults: {
			name: 'AlfaConnect',
		},
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'alfaConnectApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: 'https://api.alfaconnect.io',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Nimba',
						value: 'nimbaSms',
						description: 'SMS services',
					},
					{
						name: 'AlfaMail',
						value: 'alfaMail',
						description: 'Email services',
					},
				],
				default: 'nimbaSms',
			},
			...nimbaSmsDescription,
			...alfaMailDescription,
		],
	};
}