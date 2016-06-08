import { MyGoodAppPage } from './app.po';

describe('my-good-app App', function() {
  let page: MyGoodAppPage;

  beforeEach(() => {
    page = new MyGoodAppPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('my-good-app works!');
  });
});
