export class MyGoodAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('my-good-app-app h1')).getText();
  }
}
