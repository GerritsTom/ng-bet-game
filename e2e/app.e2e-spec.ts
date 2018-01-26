import { NgBetGamePage } from './app.po';

describe('ng-bet-game App', () => {
  let page: NgBetGamePage;

  beforeEach(() => {
    page = new NgBetGamePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
