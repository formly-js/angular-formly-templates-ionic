// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'formlyIonic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
     window.StatusBar.styleDefault();
    }
  });
})

.controller('MainCtrl', function($scope) {
  $scope.formFields = [{
    key: 'radioTest',
    type: 'radio',
    templateOptions: {
      options: [{
        value: 'a',
        text: 'A',
        icon: 'ion-home'
      }, {
        value: 'B',
        text: 'B',
      }, {
        value: 'C',
        text: 'C',
      }]
    }
  }];
});
