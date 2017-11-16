import { TabsmithAppPage } from './app.po';

describe('tabsmith-app App', () => {
  let page: TabsmithAppPage;

  beforeEach(() => {
    page = new TabsmithAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
