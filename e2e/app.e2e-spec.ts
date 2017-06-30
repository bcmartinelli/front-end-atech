import { FrontEndAtechPage } from './app.po';

describe('front-end-atech App', () => {
  let page: FrontEndAtechPage;

  beforeEach(() => {
    page = new FrontEndAtechPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
