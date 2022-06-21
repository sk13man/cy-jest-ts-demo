describe('Jest demo', () => {
  afterEach((done) => {
    setTimeout(() => {
      console.log('Log from Hook!');
      done();
    }, 3000);
  });
  it('init test 1', () => {
    console.log('Log from test1');
    expect(true).toBe(true);
  });
  it('waiting test', () => {
    console.log('Log from test2');
    expect(true).toBe(true);
  });
});
