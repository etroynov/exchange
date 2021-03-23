import { FC, ChangeEvent } from 'react';
import styles from './index.module.css';

type Props = {
  name: string;
  type?: string;
  value?: string | number;
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const Input: FC<Props> = ({ name, type = 'text', placeholder, value, onChange }) => {
  return (
    <input
      name={name}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className={styles.component}
    />
  );
};
