import { render } from '@testing-library/react';

import { Card } from './Component';

describe('Card', () => {
  describe('Snapshots', () => {
    it('should match snapshot', () => {
      expect(
        render(
          <Card id="0" title="USD - American Dollar" type="USD" balance={25} />
        )
      ).toMatchSnapshot();
    });
  });

  it('the balance should contain currency symbol', () => {
    const { getByTestId } = render(
      <Card id="0" title="USD - American Dollar" type="USD" balance={25} />
    );
    const el = getByTestId('card-balance');

    expect(el).toHaveTextContent('$ 25');
  });

  it('the balance should contain title', () => {
    const title = 'USD - American Dollar';
    const { getByTestId } = render(
      <Card id="0" title={title} type="USD" balance={25} />
    );
    const el = getByTestId('card-title');

    expect(el).toHaveTextContent(title);
  });

  it('the balance should contain type', () => {
    const type = 'USD';
    const { getByTestId } = render(
      <Card id="0" title="USD - American Dollar" type="USD" balance={25} />
    );
    const el = getByTestId('card-title');

    expect(el).toHaveTextContent(type);
  });

  it('should unmount without errors', () => {
    const { unmount } = render(
      <Card id="0" title="USD - American Dollar" type="USD" balance={25} />
    );

    expect(unmount).not.toThrowError();
  });
});
