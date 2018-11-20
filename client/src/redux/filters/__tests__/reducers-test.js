import { reducer } from '../reducer';
import { setAge, setFree, setDate, searchEvents } from '../action-creators';

describe('reducers', () => {
  it('should return the default state if no action matches', () => {
    const result = reducer(undefined, {});

    expect(result.age).toEqual('');
    expect(result.free).toBe(false);
    expect(result.searchText).toEqual('');
    expect(result.date).toBe(null);
  });

  it('should reduce the age action', () => {
    const result = reducer(undefined, setAge(1));
    expect(result.age).toEqual(1);
  });

  it('should reduce the free action', () => {
    const result = reducer(undefined, setFree(true));
    expect(result.free).toEqual(true);
  });

  it('should reduce the date action', () => {
    const result = reducer(undefined, setDate('2016-11-05'));
    expect(result.date).toEqual('2016-11-05');
  });

  it('should reduce the search events action', () => {
    const result = reducer(undefined, searchEvents('something'));
    expect(result.searchText).toEqual('something');
  });
});
