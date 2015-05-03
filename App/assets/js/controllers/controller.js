'use strict';

var Hotelcontrollers = angular.module('Hotelcontrollers', []);

Hotelcontrollers.filter('offset', function () {
    return function (input, start) {
        start = parseInt(start, 10);
        return input.slice(start);
    };
});


Hotelcontrollers.controller('ReviewsList', ['$scope', '$http',
  function ($scope, $http) {
    $scope.itemsPerPage = 6;
    $scope.currentPage = 0;
    $scope.Reviews = [];
    $http.get('assets/Data/Reviews.json').success(function(data) {
      $scope.Reviews = data;
    });
	//$scope.orderProp = '-score';
  //$scope.predicate = '-score';


  $scope.range = function () {
      var rangeSize = 2;
      var ret = [];
      var start;

      start = $scope.currentPage;
      if (start > $scope.pageCount() - rangeSize) {
          start = $scope.pageCount() - rangeSize + 1;
      }

      for (var i = start; i < start + rangeSize; i++) {
          ret.push(i);
      }
      return ret;
  };
  $scope.prevPage = function () {
      if ($scope.currentPage > 0) {
          $scope.currentPage--;
      }
  };

  $scope.prevPageDisabled = function () {
      return $scope.currentPage === 0 ? "disabled" : "";
  };

  $scope.pageCount = function () {
      return Math.ceil($scope.Reviews.length / $scope.itemsPerPage) - 1;
  };

  $scope.nextPage = function () {
      if ($scope.currentPage < $scope.pageCount()) {
          $scope.currentPage++;
      }
  };

  $scope.nextPageDisabled = function () {
      return $scope.currentPage === $scope.pageCount() ? "disabled" : "";
  };

  $scope.setPage = function (n) {
      $scope.currentPage = n;
  };


  }]);




Hotelcontrollers.controller('HotelDetailCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
    $http.get('assets/Data/' + $routeParams.ID + '.json').success(function(data) {
      $scope.Hotel = data;
    });
  }]);









  // Hotelcontrollers.controller('SimilarHotel', ['$scope', '$http',
  // function ($scope, $http) {
  //     $http.get('assets/Data/Similar.json').success(function (data) {
  //         $scope.Hotels = data;
  //     });

  // } ]);

  // Hotelcontrollers.controller('landmarks', ['$scope', '$http',
  // function ($scope, $http) {
  //     $http.get('assets/Data/landmarks.json').success(function (data) {
  //         $scope.landmarks = data;
  //     });

  // } ]);
  




















