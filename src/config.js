let config = {};

config.authInstanceId = "59f2d865e4b0edcca340a06d";
config.objectSorageInstanceId = "59f2d865e4b03ffa033021e2";
config.integratedMasterKey = "067990229bf747beb0105319";
config.clientKey = "59f2d865e4b0416729e79331";
config.cloudCode = "59f2d866e4b03ffa033021e7";
config.cdnInstanceId = "59f2d865e4b03ffa033021e2";

config.baseUrl = "http://storage.backtory.com/thefilm";


config.lambdaHeaders =
    {
        'x-backtory-authentication-id': config.authInstanceId,
        'x-backtory-cache-mode': "No-Cache"
    };
module.exports = config;