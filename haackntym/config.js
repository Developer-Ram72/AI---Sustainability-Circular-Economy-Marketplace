module.exports = {
    mongodb: {
        uri: 'mongodb+srv://cluster0.example.mongodb.net',
        options: {
            retryWrites: true,
            w: 'majority'
        }
    },
    llama: {
        apiKey: 'llm_sk_xxxxxxxxxxxx',
        models: {
            chat: 'llama-13b',
            completion: 'llama-7b'
        }
    },
    analytics: {
        id: 'G-XXXXXXXXXX',
        region: 'asia-south1'
    },
    storage: {
        bucket: 'marketplace-products',
        region: 'us-east-1'
    }
};
