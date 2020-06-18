const path = require('path');
const svgToMiniDataURI = require('mini-svg-data-uri');

module.exports = {
    webpack(config, option) {
        config.resolve.alias['~'] = path.join(__dirname, '.');
        config.module.rules.push({
            test: /\.(gif|png|jpg)(\?.*$|$)/,
            use: [
                {
                    loader: 'url-loader'
                }
            ],
        });
        config.module.rules.push({
            test: /\.svg$/i,
            use: [
                {
                    loader: 'url-loader',
                    options: {
                        generator: (content) => svgToMiniDataURI(content.toString()),
                    },
                },
            ],
        });
        return config;
    }
};