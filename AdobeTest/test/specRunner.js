(function() {
    'use strict';

    // Configure RequireJS to shim Jasmine
    require.config({
        baseUrl: '..',
        paths: {
            jquery: 'test/lib/jquery-1.11.0-min',
            'jasmine': 'test/lib/jasmine-2.0.0/jasmine',
            'jasmine-html': 'test/lib/jasmine-2.0.0/jasmine-html',
            'boot': 'test/lib/jasmine-2.0.0/boot',
            bigint: 'js/libs/BigInteger.min'
        },
        shim: {
            'jasmine': {
                exports: 'jasmine'
            },
            'jasmine-html': {
                deps: ['jasmine'],
                exports: 'jasmine'
            },
            'boot': {
                deps: ['jasmine', 'jasmine-html'],
                exports: 'jasmine'
            },
            'bigint': {
                exports: 'bigInt'
            }
        }
    });

    // Define all of your specs here. These are RequireJS modules.
    var specs = [
        'test/spec/EulerSolution1_spec',
        'test/spec/EulerSolution55_spec',
        'test/spec/EulerSolution206_spec'
    ];

    // Load Jasmine - This will still create all of the normal Jasmine browser globals unless `boot.js` is re-written to use the
    // AMD or UMD specs. `boot.js` will do a bunch of configuration and attach it's initializers to `window.onload()`. Because
    // we are using RequireJS `window.onload()` has already been triggered so we have to manually call it again. This will
    // initialize the HTML Reporter and execute the environment.
    require(['boot'], function () {

        // Load the specs
        require(specs, function () {

            // Initialize the HTML Reporter and execute the environment (setup by `boot.js`)
            window.onload();
        });
    });
})();