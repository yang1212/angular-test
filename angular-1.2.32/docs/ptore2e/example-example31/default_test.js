describe("", function() {
  var rootEl;
  beforeEach(function() {
    rootEl = browser.rootEl;
    browser.rootEl = '[ng-app]';
    browser.get("examples/example-example31/index1.html");
  });
  afterEach(function() { browser.rootEl = rootEl; });
  it('should add Hello to the name', function() {
    expect(element(by.binding("{{ 'World' | greet }}")).getText()).toEqual('Hello, World!');
  });
});