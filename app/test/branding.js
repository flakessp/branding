describe('branding', function() {
  it('should have only local files, no src="http"');
  it('should have no javascript - external .js files or inline scripts');
  it('should have all styles inside #content selector');
  it('should have no more than 10 files in assets/branding folder');
  it('should weight no more than 2mb');
  it('should should have data-events attributes on "a" tags');
  it('should should have no empty href attributes on "a" tags');
});