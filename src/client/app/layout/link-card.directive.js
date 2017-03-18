(function() {
  'use strict';

  angular
    .module('app.layout')
    .directive('linkCard', linkCard);

  /* @ngInject */
  function linkCard() {
    var directive = {
      scope: {
        'linkData': '=',
      },
      template: '<div class="link-card-content"><div>{{::linkData.description }}</div><a ng-href="{{::linkData.href }}">{{::linkData.title }}</a></div>',
      restrict: 'E'
    };
    return directive;
  }
})();
