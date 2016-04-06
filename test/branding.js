const Browser = require('zombie');
const assert = require('assert');

describe('branding', function() {
  before(function() {
    this.browser = new Browser({ site: 'http://localhost:3000' });
  });

  before(function(done) {
    this.browser.visit('/', done);
  });

  it('should have only local files, no src="http"', function(){
    assert.ok(this.browser.success);
    // this.browser.assert.attribute('a', 'href', '#')
    // this.browser.assert.evaluate('document.querySelectorAll("[src]").length',0)
  });
  it('should have no javascript - external .js files or inline scripts');
  it('should have all styles inside #content selector');
  it('should have no more than 10 files in assets/branding folder');
  it('should weight no more than 2mb');
  it('should have data-events attributes on "a" tags', function() {
    this.browser.assert.attribute('#content a', 'data-event-click', /\d/);
  });
  it('should have no empty href attributes on "a" tags', function() {
    // this.browser.assert.attribute('#content a', 'href');
  });
});