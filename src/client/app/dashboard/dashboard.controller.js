(function() {
  'use strict';

  angular
    .module('app.dashboard')
    .controller('DashboardController', DashboardController);

  DashboardController.$inject = ['$q', 'dataservice', 'logger','utilservice'];
  /* @ngInject */
  function DashboardController($q, dataservice, logger, utilservice) {
    var vm = this;
    vm.notifications = [];
    vm.title = 'Dashboard';
    vm.showDetails = showDetails;
    vm.pinPressed = pinPressed;
    vm.deletePressed = deletePressed;
    vm.formatTimeStamp = formatTimeStamp;
    vm.getStats = utilservice.getStats;
    activate();

    function activate() {
      var promises = [getNotifications()];
      return $q.all(promises).then(function() {
        logger.info('Activated Dashboard View');
      });
    }

    function getNotifications() {
      return dataservice.getNotifications().then(function(data) {
        vm.notifications = data;
        return vm.notifications;
      });
    }

    function showDetails (eve,notification,index) {
      utilservice.showDialog({params:notification,eve:eve});
    }

    function deletePressed (eve,notification,index) {
      eve.preventDefault();
      eve.stopPropagation();
      vm.notifications.splice(index,1);
    }

    function pinPressed (eve,notification,index) {
      eve.preventDefault();
      eve.stopPropagation();
      vm.notifications.splice(index, 1);
      vm.notifications.splice(0, 0, notification);
    }
    function formatTimeStamp (date) {
      return utilservice.customDataFormater(date);
    }
  }
})();
