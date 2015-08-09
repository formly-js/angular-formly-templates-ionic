(function (angular) {
    'use strict';

    angular.module('starter')

        .controller('FloatingLabelDemoCtrl', ['$window', function ($window) {
            var vm = this;

            vm.user = {};

            vm.userFields = [
                {
                    key: 'fname',
                    type: 'floating-input',
                    templateOptions: {
                        type: 'text',
                        label: 'First Name',
                        placeholder: 'First Name'
                    }
                }, {
                    key: 'lname',
                    type: 'floating-input',
                    templateOptions: {
                        type: 'text',
                        label: 'Last Name',
                        placeholder: 'Last Name'
                    }
                }, {
                    key: 'email',
                    type: 'floating-input',
                    templateOptions: {
                        type: 'email',
                        label: 'Email',
                        placeholder: 'Email'
                    }
                }
            ];

            vm.submitUserForm = submitUserForm;

            function submitUserForm() {
                $window.alert('Thanks for submitting the form');
            }
        }]);

})(window.angular);