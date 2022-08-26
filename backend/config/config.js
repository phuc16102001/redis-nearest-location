import 'dotenv/config'

const config = {
    REDIS_URL: process.env.REDIS_URL,
    PORT: process.env.PORT || 8080
}

export default config