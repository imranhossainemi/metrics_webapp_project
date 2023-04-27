import reducer from '../redux/stockDetails/stockDetailsSlice';

describe('Stock list reducer', () => {
  it('should handle initial state', () => {
    expect(reducer(undefined, { type: undefined })).toEqual(
      {
        stockDetails: [], isError: false, isLoading: false, fetched: false,
      },
    );
  });
});
