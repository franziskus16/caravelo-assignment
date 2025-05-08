export default class SubscriptionService {
    static getSubscriptionInfo() { 
        return Promise.resolve({
            walletId: 'wallet-id-123',
            commitment: {
                period: {
                    "lockPeriod": "P11M",
                    "renewPeriod": null,
                    "renewable": true,
                    "resetOnPlanChange": false
                },
                startDate: '2023-07-17',
                effectiveDate: '2024-06-17',
                endDate: null
            },
            plan: {
                name: 'Plan A',
                price: 9.99,
                currency: 'USD',
                addons: [
                    {name: 'Addon 1', price: 9.99, currency: 'USD'},
                    {name: 'Addon 2', price: 9.99, currency: 'USD'},
                ]
            }
        });
    }
}