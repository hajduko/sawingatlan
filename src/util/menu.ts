export interface IMenuItem {
  name: string;
  url: string;
  external: boolean;
  available: boolean;
  target?: string;
  children?: IMenuItem[];
}

export const menu: IMenuItem[] = [
  {
    name: 'Eladóknak',
    url: '/',
    available: true,
    external: false,
  },
  {
    name: 'Ingatlanosoknak',
    url: '/foragents',
    available: true,
    external: false,
  },
];
