/* jshint -W117, -W030 */
/* jshint multistr:true */
describe('htSidebar directive: ', function() {
  var el;
  var innerElement;
  var scope;

  beforeEach(module('app.layout'));

  beforeEach(inject(function($compile, $rootScope) {
    el = angular.element('<image-card image=''></image-card>');
    scope = $rootScope;
    $compile(el)(scope);

    // tell angular to look at the scope values right now
    scope.$digest();
  }));

  /// tests ///
  describe('image-card should have,', function() {
    it('timestamp ', function() {
      
    });
    describe('image data should exist,', function() {
      it('image data should have timestamp ', function() {
        
      });
      it('image data should have img src ', function() {
        
      });
    });
  });

});
