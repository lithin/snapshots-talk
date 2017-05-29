import reducer from './reducer';

describe('reducer', () => {
  it('returns default state', () => {
    expect(reducer(undefined, {})).toMatchSnapshot();
  });

  it('returns number one for action ADD', () => {
    expect(reducer(undefined, {
      type: 'ADD'
    })).toMatchSnapshot();
  });
});
