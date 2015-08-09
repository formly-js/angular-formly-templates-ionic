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
      StatusBar.styleDefault();
    }
  });
})

.controller('MainCtrl', function($scope) {
  $scope.formFields = [{
    "key": "marvel1",
    "type": "select",
    "templateOptions": {
      "label": "Normal Select",
      "options": [{
        "name": "Iron Man",
        "value": "iron_man"
      }, {
        "name": "Captain America",
        "value": "captain_america"
      }, {
        "name": "Black Widow",
        "value": "black_widow"
      }, {
        "name": "Hulk",
        "value": "hulk"
      }, {
        "name": "Captain Marvel",
        "value": "captain_marvel"
      }]
    }
  }, {
    "key": "marvel2",
    "type": "select",
    "templateOptions": {
      "label": "Grouped Select",
      "options": [{
        "name": "Iron Man",
        "value": "iron_man",
        "group": "Male"
      }, {
        "name": "Captain America",
        "value": "captain_america",
        "group": "Male"
      }, {
        "name": "Black Widow",
        "value": "black_widow",
        "group": "Female"
      }, {
        "name": "Hulk",
        "value": "hulk",
        "group": "Male"
      }, {
        "name": "Captain Marvel",
        "value": "captain_marvel",
        "group": "Female"
      }]
    }
  }, {
    key: 'marvel3',
    type: 'select',
    templateOptions: {
      label: 'Select with custom name/value/group',
      options: [{
        label: 'Iron Man',
        id: 'iron_man',
        gender: 'Male'
      }, {
        label: 'Captain America',
        id: 'captain_america',
        gender: 'Male'
      }, {
        label: 'Black Widow',
        id: 'black_widow',
        gender: 'Female'
      }, {
        label: 'Hulk',
        id: 'hulk',
        gender: 'Male'
      }, {
        label: 'Captain Marvel',
        id: 'captain_marvel',
        gender: 'Female'
      }],
      groupProp: 'gender',
      valueProp: 'id',
      labelProp: 'label'
    }
  }]

})
