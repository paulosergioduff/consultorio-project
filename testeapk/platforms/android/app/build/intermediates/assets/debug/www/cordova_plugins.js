cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-clipboard.Clipboard",
    "file": "plugins/cordova-clipboard/www/clipboard.js",
    "pluginId": "cordova-clipboard",
    "clobbers": [
      "cordova.plugins.clipboard"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-whitelist": "1.3.4",
  "cordova-clipboard": "1.3.0"
};
// BOTTOM OF METADATA
});