const dotenv = require('dotenv');

// to configure the enviorment variabe
dotenv.config();

// export the PORT for accessing throughout the project  
module.exports ={
    PORT : process.env.PORT,
    // SYNC_DB: process.env.SYNC_DB,
}