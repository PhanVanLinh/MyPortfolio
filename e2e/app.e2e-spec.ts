import { ProjecthihiPage } from './app.po';

describe('projecthihi App', () => {
  let page: ProjecthihiPage;

  beforeEach(() => {
    page = new ProjecthihiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
