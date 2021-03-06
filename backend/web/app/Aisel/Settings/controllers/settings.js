'use strict';

/**
 * This file is part of the Aisel package.
 *
 * (c) Ivan Proskuryakov
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @name            AiselSettings
 * @description     SettingsCtrl
 */

define(['app'], function (app) {
    app.controller('SettingsCtrl', ['$location', '$scope', '$routeParams', '$rootScope', 'settingsService',
        function ($location, $scope, $routeParams, $rootScope, settingsService) {

            settingsService.get().success(
                function (data, status) {
                    $scope.settings = data;
                }
            );
        }]);
});