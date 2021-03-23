export type Account = {
  id: string;
  title: string;
  type: string;
  balance: number;
}

export type Currencies = {
  [key: string]: number;
}