import { defaultValue, LimitCharPipe } from './limit-char.pipe';

xdescribe('LimitCharPipe', () => {
  beforeEach(() => {});

  const limitCharPipe = new LimitCharPipe();

  it('should create', () => {
    expect(limitCharPipe).toBeTruthy();
  });

  // tslint:disable-next-line: max-line-length
  it(`should return the limit ${defaultValue.limitNum} Char string by default if the input has more than ${defaultValue.limitNum} char string`, () => {
    const input = 'Hello Patrick123213213123123213213123123213123';
    const expectOutput = input.slice(0, defaultValue.limitNum) + '...';
    expect(limitCharPipe.transform(input)).toBe(expectOutput);
  });

  it(`should return itself by default if the input has no more than ${defaultValue.limitNum} char string`, () => {
    const input = 'Hello Patrick';
    const expectOutput = input;
    expect(limitCharPipe.transform(input)).toBe(expectOutput);
  });
  it(`should show warning if the input is not a string `, () => {});
});
