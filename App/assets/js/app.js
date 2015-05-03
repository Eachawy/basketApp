'use strict';

angular.module('HotelApp', ['ngRoute','Hotelcontrollers'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'assets/views/Hotels.html',
        controller: 'ReviewsList'
      })
      .when('/:ID', {
        templateUrl: 'assets/views/HotelsDetails.html',
        controller: 'HotelDetailCtrl'
      })
      //.when('/mashprofile', {
      //  templateUrl: 'views/mashprofile.html',
      //  controller: 'MashprofileCtrl'
      //})
      //.when('/probe-settings', {
      //  templateUrl: 'views/probe-settings.html',
      //  controller: 'ProbeSettingsCtrl'
      //})
      //.when('/pid-settings', {
      //  templateUrl: 'views/pid-settings.html',
      //  controller: 'PidSettingsCtrl'
      //})
      .otherwise({
        redirectTo: '/'
      });
  });
