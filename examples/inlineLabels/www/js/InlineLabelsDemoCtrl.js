(function (angular) {
    'use strict';

    angular.module('starter')
        .controller('InlineLabelsDemoCtrl', ['$window', function ($window) {
            var vm = this;

            vm.user = {};

            vm.userFields = [
                {
                    key: 'username',
                    type: 'inline-input',
                    templateOptions: {
                        type: 'text',
                        label: 'Username'
                    }
                }, {
                    key: 'password',
                    type: 'inline-input',
                    templateOptions: {
                        type: 'password',
                        label: 'Password'
                    }
                }
            ];

            vm.login = submitLoginForm;

            function submitLoginForm() {
                $window.alert('Thanks for submitting the form');
            }
        }]);

})(window.angular);