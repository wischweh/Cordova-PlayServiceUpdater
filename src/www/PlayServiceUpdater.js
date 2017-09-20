var PlayServiceUpdater = function() {};
var exec = require('cordova/exec');

/**
 * Gets the version of the installed Play Services as semantic versioning string
 *
 * @param String color                 The color to set (like #FFDB4437)
 * @param {Function} successCallback   The function to call when everything went OK. (OPTIONAL)
 * @param {Function} failureCallback   The function to call when there is an error. (OPTIONAL)
 */

PlayServiceUpdater.prototype.getVersion = function(successCallback, failureCallback) {
  exec(successCallback, failureCallback, 'PlayServiceUpdater','getInstalledPlayServiceVersion',[]);
};

/**
 * Tries to ensure the given Version for Google Play Services
 * @param minVersion
 * @param successCallback if called the requirement is met
 * @param failureCallback if called the User choose not to have the required Play Service Version or something else went
 * wrong
 */
PlayServiceUpdater.prototype.forcePlayServiceVersion = function(minVersion, successCallback, failureCallback) {
  exec(successCallback, failureCallback, 'PlayServiceUpdater','ensurePlayServiceVersion',[minVersion]);
};

var playservice_updater = new PlayServiceUpdater();
module.exports = playservice_updater;
