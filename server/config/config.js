const TABLE_NAME = 'all-for-you';
const config = {
    PORT: process.env.PORT || 5000,
    //DB_CONNECTION: `mongodb://localhost/${TABLE_NAME}`,
    DB_CONNECTION: `mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false`,
    SECRET: 'badumts',
    SALT: 10,
    COOKIE_NAME: 'USER_SESSION',
    CLOUDINARY_NAME: 'dkerzk7jl',
    CLOUDINARY_API_KEY: 768386671451244,
    CLOUDINARY_API_SECRET: '5jOKTuAqwf0jT5jvzXe_Ul_Kero',
    CLOUDINARY_STORAGE: 'dkerzk7jl'
}

module.exports = config;