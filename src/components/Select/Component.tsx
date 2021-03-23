import { FC, ChangeEvent } from 'react';

import styles from './index.module.css';

type Props = {
  name: string;
  options: any[];
  selected?: string;
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
};

export const Select: FC<Props> = ({ name, selected, options, onChange }) => {
  return (
    <select
      value={selected}
      name={name}
      className={styles.component}
      onChange={onChange}
      data-testid="select"
    >
      {options.map(({ name, value }) => (
        <option key={name} value={value} data-testid="select-option">
          {name}
        </option>
      ))}
    </select>
  );
};
