import reducer from '../redux/stocksList/stocksListSlice';

describe('Stock list reducer', () => {
  it('should handle initial state', () => {
    expect(reducer(undefined, { type: undefined })).toEqual(
      { stocksList: [], isError: false, isLoading: false },
    );
  });
});
