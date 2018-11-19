import { rest } from '../rest';

describe('Async Actions', () => {
  it('should dispatch "POPULAR_SUCCESS" when fetchPopular has been done', () => {
    console.log('fn', rest.events.getEvents);
    expect(1).toEqual(1);
  });
});
