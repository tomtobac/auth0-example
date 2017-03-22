import { Auth0ExamplePage } from './app.po';

describe('auth0-example App', () => {
  let page: Auth0ExamplePage;

  beforeEach(() => {
    page = new Auth0ExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
