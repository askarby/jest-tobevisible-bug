import {AppComponent} from './app.component';
import {createComponentFactory, Spectator} from '@ngneat/spectator/jest';

describe('AppComponent', () => {
  const createComponent = createComponentFactory({
    component: AppComponent,
  });

  let spectator: Spectator<AppComponent>;

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create the app', () => {
    expect(spectator.element).toBeTruthy();
  });

  it(`should have as title 'jest-tobevisible-bug'`, () => {
    expect(spectator.component.title).toEqual('jest-tobevisible-bug');
  });

  it('should render title', () => {
    expect('.content span').toContainText('jest-tobevisible-bug app is running!');
    expect('.content span').toBeVisible();
  });
});
