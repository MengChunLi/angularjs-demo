'use strict';

module.exports = angular.module('app', [])
.controller('chooseGender', ($scope) => {
  $scope.genderSelected = null;
  $scope.genders = [
    {id: 'F', text: 'Female'},
    {id: 'M', text: 'Male'}
  ];

  $scope.percentageSelected = null;
  $scope.percentages = [
    {id: 0, text: '0%'},
    {id: 1, text: '10%'},
    {id: 2, text: '20%'},
    {id: 3, text: '30%'},
    {id: 4, text: '40%'},
    {id: 5, text: '50%'},
    {id: 6, text: '60%'},
    {id: 7, text: '70%'},
    {id: 8, text: '80%'},
    {id: 9, text: '90%'},
    {id: 10, text: '100%'}
  ];


  // $scope.items = [{ 
  //     'gender' : $scope.genders[1].text,
  //     'percentage' : $scope.percentages[6].text
  //   }];
  $scope.female = null;
  $scope.male = null;
  $scope.addRow = () => {
    if($scope.genderSelected){

   
    if($scope.genderSelected.id === 'F'){
       $scope.female = {
        'gender': $scope.genderSelected.text,
        'percent': $scope.percentageSelected.text
       };
    }else if($scope.genderSelected.id === 'M'){
      $scope.male = {
        'gender': $scope.genderSelected.text,
        'percent': $scope.percentageSelected.text
       };
    }
    }
    
    // $scope.items.push({ 
    //   'gender' : $scope.genderSelected.text,
    //   'percentage' : $scope.percentageSelected.text
    // });
  };
});

