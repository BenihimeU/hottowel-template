(function() {
  'use strict';

  angular
    .module('app.layout')
    .directive('textCard', textCard);

  /* @ngInject */
  function textCard() {
    var directive = {
      scope: {
        'text': '=',
      },
      template: '<div class="text-card-content"><div>{{::text.body }}</div></div>',
      restrict: 'E'
    };
    return directive;
  }
})();
