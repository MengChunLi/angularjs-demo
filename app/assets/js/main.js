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


  $scope.items = [];

  //add
  $scope.addRow = () => {
    let isDuplicate = false;
    if($scope.items.length > 0){
      for (let i = 0; i < $scope.items.length; i++) {
        if($scope.items[i].gender.id === $scope.genderSelected.id){
          isDuplicate = true;
          $scope.items[i] = { 
            'gender' : $scope.genderSelected,
            'percentage' : $scope.percentageSelected
          };
        }
      };
    }
    if(!isDuplicate){
      $scope.items.push({ 
        'gender' : $scope.genderSelected,
        'percentage' : $scope.percentageSelected
      });
    }
  };

  //remove
  $scope.remove = (item) => { 
    let index = $scope.items.indexOf(item);
    $scope.items.splice(index, 1);     
  };
});

