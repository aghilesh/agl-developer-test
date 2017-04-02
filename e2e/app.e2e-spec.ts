import { AglDevTestPage } from './app.po';

describe('agl-dev-test App', () => {
  let page: AglDevTestPage;

  beforeEach(() => {
    page = new AglDevTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
