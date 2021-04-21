module.exports = require('./package.json').docusaurus; 
// quick hack to make relative file paths work correctly for plugins
module.exports.plugins[0][1].openapiPath = require.resolve(module.exports.plugins[0][1].openapiPath); 