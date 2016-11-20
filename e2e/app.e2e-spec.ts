import { AngularApplicationPage } from './app.po';

describe('angular-application App', function() {
  let page: AngularApplicationPage;

  beforeEach(() => {
    page = new AngularApplicationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Application Dashbeard Web');
  });
});
