(function() {
  'use strict';

  angular
    .module('app.layout')
    .directive('imageCard', imageCard);

  /* @ngInject */
  function imageCard() {
    var directive = {
      scope: {
        'image': '='
      },
      template: '<div class="image-card-content"><div class="image-display-constainer"><img ng-src="{{::image.href }}" alt="{{::image.name }}" /></div></div>',
      restrict: 'E'
    };
    return directive;
  }
})();
