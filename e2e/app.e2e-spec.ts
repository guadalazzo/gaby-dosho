import { GabyDoshoPage } from './app.po';

describe('gaby-dosho App', () => {
  let page: GabyDoshoPage;

  beforeEach(() => {
    page = new GabyDoshoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
