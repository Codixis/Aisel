'use strict';

/**
 * This file is part of the Aisel package.
 *
 * (c) Ivan Proskuryakov
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @name            Aisel
 * @description     Protractor tests
 */

exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: [
        'modules/auth.js',
        'modules/dashboard.js',
        'modules/addressing.js',
        'modules/backendUser.js',
        'modules/frontendUser.js',
        'modules/orders.js',
        'modules/products.js',
        'modules/page.js',
    ]
}
