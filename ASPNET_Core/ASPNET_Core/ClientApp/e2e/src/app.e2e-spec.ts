




import { AppPage } from './app.po';

describe('ASPNET App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display application title: ASPNET', () => {
    page.navigateTo();
    expect(page.getAppTitle()).toEqual('ASPNET');
  });
});
