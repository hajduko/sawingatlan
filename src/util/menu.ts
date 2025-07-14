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
    name: 'Főoldal',
    url: '/',
    available: true,
    external: false,
  },
  {
    name: 'Ingatlanosoknak',
    url: '/realestate',
    available: true,
    external: false,
  },
];
