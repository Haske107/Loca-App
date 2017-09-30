import { LocaAppPage } from './app.po';

describe('loca-app App', () => {
  let page: LocaAppPage;

  beforeEach(() => {
    page = new LocaAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
