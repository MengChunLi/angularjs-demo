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
    {value: 0, text: '0%', isDisable: false},
    {value: 10, text: '10%', isDisable: false},
    {value: 20, text: '20%', isDisable: false},
    {value: 30, text: '30%', isDisable: false},
    {value: 40, text: '40%', isDisable: false},
    {value: 50, text: '50%', isDisable: false},
    {value: 60, text: '60%', isDisable: false},
    {value: 70, text: '70%', isDisable: false},
    {value: 80, text: '80%', isDisable: false},
    {value: 90, text: '90%', isDisable: false},
    {value: 100, text: '100%', isDisable: false}
  ];

  // results
  $scope.items = [];

  //add item
  $scope.addRow = () => {
    let isDuplicate = false;
    if($scope.items.length > 0){
      // check if added item is duplicate, if so replace original
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
    // if not duplicate, add new one
    if(!isDuplicate){
      $scope.items.push({ 
        'gender' : $scope.genderSelected,
        'percentage' : $scope.percentageSelected
      });
      
    }
  };

  //remove item
  $scope.remove = (item) => { 
    let index = $scope.items.indexOf(item);
    $scope.items.splice(index, 1);
    // when the opposite gender was removed, update every options to be availabled
    if(item.gender.id != $scope.genderSelected.id){
      for (let j = $scope.percentages.length - 1; j >= 0; j--) {
        $scope.percentages[j].isDisable = false;
      }
    }
  };

  //when select gender, update percentage options
  $scope.updateOptions = () => {
    // only check when existed
    if($scope.items.length > 0){
      for (let i = 0; i < $scope.items.length; i++) {
        // if female, check male percentage and vice versa
        if($scope.genderSelected.id != $scope.items[i].gender.id){
          // count max percentage value
          let maxValue = 100 - $scope.items[i].percentage.value;
          // set options isDisable status 
          for (let j = $scope.percentages.length - 1; j >= 0; j--) {
            if($scope.percentages[j].value > maxValue){
              $scope.percentages[j].isDisable = true;
            }else{
              $scope.percentages[j].isDisable = false;
            }
          };
        }

      };
    }
  };
});

