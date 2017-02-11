(function () {
  'use strict';

  angular
    .module('myComponent', [])
    .directive('myComponent', function () {
      return {
        'templateUrl': 'app/components/myComponent/myComponent.html'
      }
    })
    .controller('myComponentController', myComponentController);

  function myComponentController() {

  }
})();
