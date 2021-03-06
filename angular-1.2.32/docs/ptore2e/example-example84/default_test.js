describe("", function() {
  var rootEl;
  beforeEach(function() {
    rootEl = browser.rootEl;
    browser.get("examples/example-example84/index1.html");
  });
  
   it('should have transcluded', function() {
     var titleElement = element(by.model('title'));
     titleElement.clear();
     titleElement.sendKeys('TITLE');
     var textElement = element(by.model('text'));
     textElement.clear();
     textElement.sendKeys('TEXT');
     expect(element(by.binding('title')).getText()).toEqual('TITLE');
     expect(element(by.binding('text')).getText()).toEqual('TEXT');
   });
});