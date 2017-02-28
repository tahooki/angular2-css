import { Angular2CssPage } from './app.po';

describe('angular2-css App', function() {
  let page: Angular2CssPage;

  beforeEach(() => {
    page = new Angular2CssPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
