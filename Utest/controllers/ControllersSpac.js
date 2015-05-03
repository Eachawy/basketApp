'use strict';


describe('ReviewCat controllers', function() {

  describe('ReviewsList', function(){
    var scope, ctrl, $httpBackend;

    // Load our app module definition before each test.
    beforeEach(module('Hotelcontrollers'));

    // The injector ignores leading and trailing underscores here (i.e. _$httpBackend_).
    // This allows us to inject a service but then attach it to a variable
    // with the same name as the service.
    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('assets/Data/Reviews.json').
          respond([{Cont1: 'Grand Hotel Kronenhof'}]);

      scope = $rootScope.$new();
      ctrl = $controller('ReviewsList', {$scope: scope});
    
    it('should create "Reviews" model with 2 Reviews fetched from xhr', function() {
      expect(scope.Reviews).toBeUndefined();
      $httpBackend.flush();

      expect(scope.Reviews).toEqual([{Cont1: 'Grand Hotel Kronenhof'}]);
    });


    }));

    
    //it('should set the default value of orderProp model', function() {
    //  expect(scope.orderProp).toBe('age');
    //});

    });
  });