const env = process.env.NODE_ENV || 'development'

if (env === 'development' || env === 'test') {
    const config = require('./config.json')
    const envConfig = config[env]
    Object.keys(envConfig).forEach(key => {
        process.env[key] = envConfig[key]
    })
} else {
    process.env.MONGODB_URI = 'mongodb://elvis:elvis@ds119258.mlab.com:19258/wallet-elvis'
}