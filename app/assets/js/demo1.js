'use strict';

module.exports = angular.module('demo1', [])
.controller('findPharmacy', ($scope, $http) => {

  $scope.isLoading = true;
  $scope.myData = [];

  let responsePromise = $http.get("https://data.gov.uk/data/api/service/health/pharmacies/partial_postcode?partial_postcode=TW8");

  let setAddress = () => {
    $scope.address = [
        $scope.pharmacy.address1,
        $scope.pharmacy.address2,
        $scope.pharmacy.address3,
        $scope.pharmacy.city,
        $scope.pharmacy.postcode
      ];
  };
  //success
  responsePromise.success((data, status, headers, config) => {
      $scope.myData = data.result;
      $scope.pharmacy = $scope.myData[0];
      setAddress();
      $scope.isLoading = false;
  });
  //failed
  responsePromise.error((data, status, headers, config) => {
      alert("AJAX failed!");
  });

  $scope.changePharmacy = () => {
    setAddress();
  };

});

