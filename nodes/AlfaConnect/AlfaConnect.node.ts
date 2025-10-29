import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { nimbaSmsDescription } from './resources/nimbaSms';
import { alfaMailDescription } from './resources/alfaMail';
import { alfaConnectDescription } from './resources/alfaConnect';
import { djomyDescription } from './resources/djomy';

export class AlfaConnect implements INodeType {
    description: INodeTypeDescription = {
        displayName: 'AlfaConnect',
        name: 'alfaConnect',
        icon: { light: 'file:../../icons/alfa.svg', dark: 'file:../../icons/alfa.dark.svg' },
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
                        name: 'AlfaConnect',
                        value: 'alfaConnect',
                        description: 'API Platform and services',
                    },
                    {
                        name: 'AlfaMail',
                        value: 'alfaMail',
                        description: 'Email services',
                    },
                    {
                        name: 'Djomy',
                        value: 'djomy',
                        description: 'Payment services',
                    },
                    {
                        // eslint-disable-next-line n8n-nodes-base/node-param-resource-with-plural-option
                        name: 'NimbaSMS',
                        value: 'nimbaSms',
                        description: 'SMS services',
                    },
                ],
                default: 'nimbaSms',
            },
            ...nimbaSmsDescription,
            ...alfaMailDescription,
            ...alfaConnectDescription,
            ...djomyDescription,
        ],
    };
}