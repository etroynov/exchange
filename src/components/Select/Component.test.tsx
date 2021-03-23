import { fireEvent, render } from '@testing-library/react';

import { Select } from './Component';

const options = [
  {
    name: 'USD - American Dollar 1',
    value: 25,
  },
  {
    name: 'USD - American Dollar 2',
    value: 30,
  },
  {
    name: 'USD - American Dollar 3',
    value: 35,
  },
];

describe('Card', () => {
  describe('Snapshots', () => {
    it('should match snapshot', () => {
      expect(render(<Select name="test" options={options} />)).toMatchSnapshot();
    });
  });

  it('select should contain 3 option', () => {
    const { getAllByTestId } = render(<Select name="test" options={options} />);
    const els = getAllByTestId('select-option');

    expect(els.length).toBe(3);
  });

  it('select option should contain correct value', () => {
    const { getByTestId } = render(<Select name="test" options={options} />);
    const el = getByTestId('select');

    fireEvent.change(el, { target: { value: 30 }})

    expect(el).toHaveValue('30');
  });

  it('should unmount without errors', () => {
    const { unmount } = render(<Select name="test" options={options} />);

    expect(unmount).not.toThrowError();
  });
});
