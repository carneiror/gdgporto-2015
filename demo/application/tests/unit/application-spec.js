describe('Application', function () {
    'use strict';
    var environment = {
        analytics: {
            international: 'testInternational',
            spain: 'testSpain'
        }
    };

    describe('when we have a user context', function () {
        var bfUser;
        var bfAnalytics;
        var mockUserContext = {
            dummyArg: 'dummyArg'
        };

        beforeEach(function () {
            bfUser = jasmine.createSpyObj('BF.User', ['setUserContext', 'getJurisdiction']);
            bfUser.setUserContext.and.callThrough();
            bfUser.getJurisdiction.and.returnValue('spain');
            bfAnalytics = jasmine.createSpyObj('BF.Analytics', ['create']);

            module(function ($provide) {
                $provide.constant('USER_CONTEXT_RESPONSE', angular.copy(mockUserContext));
                $provide.constant('TRANSLATIONS_RESPONSE', {});
            });

            module('SBS', function ($provide) {
                $provide.value('BF.User', bfUser);
                $provide.value('BF.Analytics', bfAnalytics);
            });

            module('betfair.environment', function ($provide) {
                $provide.constant('ENVIRONMENT', environment);
            });
        });

        beforeEach(inject(function () {
            /**
             * Don't delete this block! Explanation here:
             * http://sravi-kiran.blogspot.pt/2014/09/UnitTestingConfigAndRunBlocksInAngularJs.html
             */
        }));

        it('should call #setUserContext', function () {
            expect(bfUser.setUserContext).toHaveBeenCalledWith(mockUserContext);
        });

        it('should call #initializeGoogleAnalytics and ' +
            'should load Google Analytics for user jurisdiction', function () {
            expect(bfAnalytics.create).toHaveBeenCalledWith(environment.analytics.spain);
        });
    });

    describe('when we don\'t have a user context', function () {
        var bfUser;
        var bfAnalytics;

        beforeEach(function () {
            bfUser = jasmine.createSpyObj('BF.User', ['setUserContext', 'getJurisdiction']);
            bfUser.getJurisdiction.and.returnValue();
            bfAnalytics = jasmine.createSpyObj('BF.Analytics', ['create']);

            module(function ($provide) {
                $provide.constant('USER_CONTEXT_RESPONSE', null);
                $provide.constant('TRANSLATIONS_RESPONSE', {});
            });

            module('SBS', function ($provide) {
                $provide.value('BF.User', bfUser);
                $provide.value('BF.Analytics', bfAnalytics);
                $provide.value('ENVIRONMENT', environment);
            });

            module('betfair.environment', function ($provide) {
                $provide.constant('ENVIRONMENT', environment);
            });
        });

        beforeEach(inject(function () {
            /**
             * Don't delete this block! Explanation here:
             * http://sravi-kiran.blogspot.pt/2014/09/UnitTestingConfigAndRunBlocksInAngularJs.html
             */
        }));

        it('and the function #setUserContext is not called', function () {
            expect(bfUser.setUserContext).not.toHaveBeenCalled();
        });

        it('should call #initializeGoogleAnalytics and ' +
            'should load Google Analytics with international account', function () {
            expect(bfAnalytics.create).toHaveBeenCalledWith(environment.analytics.international);
        });
    });
});
