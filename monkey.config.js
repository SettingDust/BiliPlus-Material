let name = 'BiliPlus Material';
let version = '3.0.0';
let description = 'A theme to biliplus';

const config = {
    entry: './src/javascript/index.js'
};

const header = {
    name: name,
    version: version,
    description: description,
    author: 'SettingDust',
    include: ['http*://*.biliplus.com/*'],
    require: [
        'https://cdn.bootcss.com/jquery/3.3.1/jquery.js',
        'https://cdn.bootcss.com/photoswipe/4.1.3/photoswipe.js',
        'https://cdn.bootcss.com/photoswipe/4.1.3/photoswipe-ui-default.js',
        'https://cdn.bootcss.com/Ripple.js/1.2.1/ripple.min.js'
    ],
    grant: ['GM_addStyle', 'GM_getValue', 'GM_setValue', 'GM_listValues']
};
module.exports.config = config;
module.exports.header = header;
module.exports.buildedHeader = () => {
    let headerString = [];
    headerString.push('// ==UserScript==');
    for (let headerKey in header) {
        if (Array.isArray(header[headerKey])) {
            if (header[headerKey].length > 0) headerString.push('//');
            for (let p in header[headerKey]) {
                headerString.push(
                    '// @' + headerKey.padEnd(13) + header[headerKey][p]
                );
            }
        } else {
            headerString.push(
                '// @' + headerKey.padEnd(13) + header[headerKey]
            );
        }
    }
    headerString.push('// ==/UserScript==');
    headerString.push('');
    return headerString.join('\n');
};
