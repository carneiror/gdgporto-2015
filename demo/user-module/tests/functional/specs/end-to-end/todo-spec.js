// Just an example, this demo will not run functional tests
describe('First test', function () {
    'use strict';

    beforeEach(function () {
        browser.get('');
    });

    it('should pass', function () {
        expect(true).toBeTruthy();
    });
});
