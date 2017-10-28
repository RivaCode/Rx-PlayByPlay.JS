import { LiveDemoPage } from './app.po';

describe('live-demo App', () => {
  let page: LiveDemoPage;

  beforeEach(() => {
    page = new LiveDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
