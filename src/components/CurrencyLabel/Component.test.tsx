import { render } from '@testing-library/react';

import { CurrencyLabel } from './Component';

describe('Card', () => {
  describe('Snapshots', () => {
    it('should match snapshot', () => {
      expect(
        render(
          <CurrencyLabel text="25" type="USD" />
        )
      ).toMatchSnapshot();
    });
  });

  it('the currency label should contain currency symbol', () => {
    const { getByTestId } = render(
      <CurrencyLabel text="25" type="USD" />
    );
    const el = getByTestId('currency-label');

    expect(el).toHaveTextContent('25 $');
  });

  it('should unmount without errors', () => {
    const { unmount } = render(
      <CurrencyLabel text="25" type="USD" />
    );

    expect(unmount).not.toThrowError();
  });
});
