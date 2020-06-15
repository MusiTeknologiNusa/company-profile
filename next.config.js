const path = require('path');

module.exports = {
    webpack(config, option) {
        config.resolve.alias['~'] = path.join(__dirname, '.');
        return config;
    }
};