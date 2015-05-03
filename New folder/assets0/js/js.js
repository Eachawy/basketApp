// you can enter your JS here!

var HotelApp = angular.module('HotelApp', []);

HotelApp.filter('offset', function () {
    return function (input, start) {
        start = parseInt(start, 10);
        return input.slice(start);
    };
});





HotelApp.controller('ReviewsList', ['$scope', '$http',
  function ($scope, $http) {
    $scope.itemsPerPage = 5;
    $scope.currentPage = 0;
    $scope.Reviews = [];
    $http.get('assets/Data/Reviews.json').success(function(data) {
      $scope.Reviews = data;
    });
	$scope.orderProp = '-score';
  //$scope.predicate = '-score';


  $scope.range = function () {
      var rangeSize = 5;
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



  HotelApp.controller('RoomsList', ['$scope', '$http',
  function ($scope, $http) {
      $http.get('assets/Data/Rooms.json').success(function (data) {
          $scope.Rooms = data;
      });
      $scope.predicate = '-room_price';

  } ]);

  HotelApp.controller('SimilarHotel', ['$scope', '$http',
  function ($scope, $http) {
      $http.get('assets/Data/Similar.json').success(function (data) {
          $scope.Hotels = data;
      });

  } ]);

  HotelApp.controller('landmarks', ['$scope', '$http',
  function ($scope, $http) {
      $http.get('assets/Data/landmarks.json').success(function (data) {
          $scope.landmarks = data;
      });

  } ]);
  




















