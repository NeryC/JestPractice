import reducers from '../../reducers';
import ProductMock from '../../__mocks__/ProductMock';

describe('Reducers', () => {
  test('return initialState', () => {
    expect(reducers({}, '')).toEqual({});
  });
  test('addToCard', () => {
    const initialState = {
      cart: [],
    };
    const payload = ProductMock;
    const action = {
      type: 'ADD_TO_CART',
      payload,
    };

    const expected = {
      cart: [ProductMock],
    };
    expect(reducers(initialState, action)).toEqual(expected);
  });
});
