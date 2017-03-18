(function() {
  'use strict';

  angular
    .module('app.core')
    .factory('utilservice', utilservice);

  utilservice.$inject = ['$uibModal', '$filter'];
  /* @ngInject */
  function utilservice($uibModal, $filter) {
    var modalInstance,defaultDateFormat = 'MM.dd.yyyy HH.mm';
    var service = {
      showDialog: showDialog,
      customDataFormater: customDataFormater,
      getStats: getStats
    };
    return service;

    function showDialog(options) {
      var congig = {
        templateUrl : options.templateUrl || 'app/core/custom-modal.html',
        appendTo : angular.element('body'),
        backdrop : false,
        bindToController : true,
        controller: DialogController,
        controllerAs :'vm',
        size: 'lg',
        keyboard : true,
        animation : true,
        resolve: {
          notification: function () {
            return options.params;
          }
        }
      };
      if (modalInstance) {
        modalInstance.dismiss();
      }
      modalInstance = $uibModal.open(congig);

      DialogController.$inject = ['notification'];

      function DialogController (notification) {
        var vm = this;
        vm.notification = notification;

        vm.cancel = cancel;

        function cancel() {
          modalInstance.dismiss();
        }
      }
    }

    function disMissDialog (reason) {
      modalInstance.dismiss();
    }

    function customDataFormater (date,fomrat) {
      return $filter('date')(new Date(date),defaultDateFormat);
    }

    function getStats() {
      
    }
  }
})();
