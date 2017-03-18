/* jshint -W117 */
describe('E2E: Dashboard', function () {
  beforeEach(function() {
    browser.get('/');
  });

  it('should have dashboard in its <title> tag.', function() {
    expect(browser.getTitle()).toContain('dashboard');
  });
});
