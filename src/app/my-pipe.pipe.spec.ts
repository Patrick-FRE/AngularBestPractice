import { MyPipePipe } from './my-pipe.pipe';

describe('MyPipePipe', () => {
  // let myPipe;
  // beforeEach(() => {
  //   myPipe = new MyPipePipe();
  // });
  let myPipe = new MyPipePipe();

  it('should create', () => {
    expect(myPipe).toBeTruthy();
  });
  it('should return a value lower cased with postfix ...', () => {
    const mockInput = 'ABC';
    const expectData = 'abc...';

    expect(myPipe.transform(mockInput)).toBe(expectData);
  });

  it('should return the input value if the input is not a string', () => {
    const mockInput = 5;
    const expectData = 5;

    expect(myPipe.transform(mockInput)).toBe(expectData);
  });
});
