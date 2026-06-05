interface INavlinks {
  id: number;
  children: React.ReactNode;
  path: string;
}

const navLinks: INavlinks[] = [
  {
    id: 1,
    children: 'خانه',
    path: '/',
  },
  {
    id: 2,
    children: 'بلاگ ها',
    path: '/blogs',
  },
];

export default navLinks;
