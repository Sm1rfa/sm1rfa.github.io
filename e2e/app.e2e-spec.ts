import { Stoyan.PortfolioPage } from './app.po';

describe('stoyan.portfolio App', () => {
  let page: Stoyan.PortfolioPage;

  beforeEach(() => {
    page = new Stoyan.PortfolioPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
