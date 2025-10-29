import type { INodeProperties } from 'n8n-workflow';
import { getProviders } from './getProviders';
import { genericGet } from './genericGet';
import { genericPost } from './genericPost';


export const alfaConnectDescription: INodeProperties[] = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: ['alfaConnect'],
            },
        },
        options: [
            {
                name: 'Get Providers',
                value: 'getProviders',
                description: 'Get the list of providers',
                action: 'Get providers',
                routing: {
                    request: {
                        method: 'GET',
                        url: '/v1/providers',
                    },
                },
            },
            {
                name: 'Generic Get',
                value: 'genericGet',
                description: 'Make a custom GET request to AlfaConnect',
                action: 'Generic get request',
                routing: {
                    request: {
                        method: 'GET',
                        url: '={{$parameter["path"]}}',
                    },
                },
            },
            {
                name: 'Generic Post',
                value: 'genericPost',
                description: 'Make a custom POST request to AlfaConnect',
                action: 'Generic post request',
                routing: {
                    request: {
                        method: 'POST',
                        url: '={{$parameter["path"]}}',
                        body: '={{JSON.parse($parameter["body"])}}',
                        headers: {
                            'Content-Type': '={{$parameter["additionalFields"]["contentType"] || "application/json"}}',
                        },
                    },
                },
            },
        ],
        default: 'getProviders',
    },
    ...getProviders,
    ...genericGet,
    ...genericPost,
];

export { getProviders, genericGet, genericPost };