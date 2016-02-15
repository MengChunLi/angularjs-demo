describe('chooseGender', function () {

  beforeEach(angular.mock.module('demo2'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));

  describe('$scope.genderRequired', function () {
        it('should be active when genderSelected is null', function () {
            var $scope = {};
            var controller = $controller('chooseGender', { $scope: $scope });
            $scope.genderSelected = null;
            $scope.addRow();
            expect($scope.genderRequired).toEqual('active');

            $scope.genderSelected = 'F';
            $scope.addRow();
            expect($scope.genderRequired).toEqual('active');
        }); 
    });

  describe('$scope.genderRequired', function () {
        it('should be empty string when genderSelected is equal to $scope.genders', function () {
            var $scope = {};
            var controller = $controller('chooseGender', { $scope: $scope });

            $scope.genderSelected = $scope.genders[0];
            $scope.addRow();
            expect($scope.genderRequired).toEqual('');

            $scope.genderSelected = $scope.genders[1];
            $scope.addRow();
            expect($scope.genderRequired).toEqual('');
        }); 
    });

});