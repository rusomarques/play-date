import { setAge, setFree, setDate, searchEvents } from '../action-creators';

describe('action creators', () => {
  it('should return a valid setAge action', () => {
    const { type, payload } = setAge(3);
    expect(type).toEqual('SET_AGE');
    expect(payload).toEqual({ age: 3 });
  });

  describe('setFree action', () => {
    xit('should set the payload to true if value is 0', () => {
      const { type, payload } = setFree(0);
      expect(type).toEqual('SET_FREE');
      expect(payload).toEqual({ free: true });
    });

    xit('should set the payload to false otherwise', () => {
      const { type, payload } = setFree(5);
      expect(type).toEqual('SET_FREE');
      expect(payload).toEqual({ free: false });
    });
  });

  describe('setDate action', () => {
    it('sets a valid date', () => {
      const { type, payload } = setDate('2018-11-06');
      expect(type).toEqual('SET_DATE');
      expect(payload).toEqual({ date: '2018-11-06' });
    });
  });

  describe('searchEvents action', () => {
    it('sets a valid date', () => {
      const { type, payload } = searchEvents('some text');
      expect(type).toEqual('SEARCH_EVENTS');
      expect(payload).toEqual({ searchText: 'some text' });
    });
  });
});
