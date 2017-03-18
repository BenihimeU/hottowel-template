/* global toastr:false, moment:false */
(function() {
  'use strict';

  angular
    .module('app.core')
    .constant('toastr', toastr)
    .constant('moment', moment)
    .constant('NOTIFICATIONS',{
      API_ENDPOINT: 'http://challenge.hexiacloud.com/api/challenge1/list.json'
    });
})();
