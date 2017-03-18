/* jshint -W079 */
var mockData = (function() {
  return {
    getMockNotificataions: getMockNotificataions
  };

  function getMockNotificataions() {
    return [
    {
      'type': 'image',
      'name': 'Purry',
      'href': 'http://placekitten.com/150/300',
      'timestamp': '2016-12-02 7:30:00'
    },
    {
      'type': 'link',
      'title': 'Step 0',
      'href': 'https://docs.angularjs.org/tutorial/step_00',
      'description': 'First step of the tutorial.',
      'timestamp': '2016-12-02 8:00:00'
    }];
  }
})();
