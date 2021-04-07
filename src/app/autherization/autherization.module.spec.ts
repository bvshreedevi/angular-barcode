import { AutherizationModule } from './autherization.module';

describe('AutherizationModule', () => {
  let autherizationModule: AutherizationModule;

  beforeEach(() => {
    autherizationModule = new AutherizationModule();
  });

  it('should create an instance', () => {
    expect(autherizationModule).toBeTruthy();
  });
});
