(function() {
  'use strict';

  angular
    .module('app.core')
    .factory('dataservice', dataservice);

  dataservice.$inject = ['$http', '$q', 'exception', 'logger', 'NOTIFICATIONS'];
  /* @ngInject */
  function dataservice($http, $q, exception, logger,NOTIFICATIONS) {
    var notificationCount = 0;
    var service = {
      getNotifications: getNotifications
    };

    return service;

    function getNotifications() {
      return $http.get(NOTIFICATIONS.API_ENDPOINT)
        .then(success)
        .catch(fail);

      function success(response) {
        notificationCount = response.data.length;
        if (response && response.data) {
          return response.data;
        }
        return null;
      }

      function fail(e) {
        return exception.catcher('XHR Failed for getNotifications')(e);
      }
    }
  }
})();
