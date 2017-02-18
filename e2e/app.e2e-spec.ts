import { Org.Company.Java.Demo.WebPage } from './app.po';

describe('org.company.java.demo.web App', () => {
  let page: Org.Company.Java.Demo.WebPage;

  beforeEach(() => {
    page = new Org.Company.Java.Demo.WebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
