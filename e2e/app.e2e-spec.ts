import { AngularApplicationPage } from './app.po';

describe('angular-application App', function() {
  let page: AngularApplicationPage;

  beforeEach(() => {
    page = new AngularApplicationPage();
  });

  it('should display message saying Dashbeard Web', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Dashbeard Web');
  });
});
