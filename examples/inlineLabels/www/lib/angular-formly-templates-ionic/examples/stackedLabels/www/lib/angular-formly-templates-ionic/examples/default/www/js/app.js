// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'formly', 'formlyIonic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.controller('MainCtrl', function($scope) {
  $scope.formData = {};
  $scope.formFields = [{
      //the key to be used in the model values {... "username": "johndoe" ... }
      key: 'username',
      type: 'input',
      templateOptions: {
        type: 'text',
        placeholder: 'johndoe'
      }
    }, {
      key: 'password',
      type: 'input',
      templateOptions: {
        type: 'password',
        placeholder: 'Password',
        icon: 'ion-lock-combination',
        iconPlaceholder: true
      }
    }, {
      key: 'myStory',
      type: 'textarea',
      templateOptions: {
        placeholder: 'My story',
        rows: 5
      }
    }, {
      key: 'remember',
      type: 'range',
      templateOptions: {
        //label: 'Password',
        rangeClass: 'calm',
        min: '0',
        max: '100',
        step: '5',
        value: '25',
        minIcon: 'ion-volume-low',
        maxIcon: 'ion-volume-high'
      }
    }

  ];

  $scope.onSubmit = function() {
    console.log('form submitted:', $scope.formData);
  };

});
