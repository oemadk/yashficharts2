import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Home',
    icon: 'shopping-cart-outline',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'Second Dashboard',
    icon: 'home-outline',
    link: '/pages/iot-dashboard',
  },
  {
    title: 'ERDs Charts,
    icon: 'pie-chart-outline',
    children: [
      {
        title: 'Classification 1',
        link: '/pages/charts/echarts',
      },
      {
        title: 'Classification 2',
        link: '/pages/charts/chartjs',
      },
      {
        title: 'Classification 3',
        link: '/pages/charts/d3',
      },
    ],
  },
  {
    title: 'Tables & Data',
    icon: 'grid-outline',
    children: [
      {
        title: 'Smart Table',
        link: '/pages/tables/smart-table',
      },
      {
        title: 'Tree Grid',
        link: '/pages/tables/tree-grid',
      },
    ],
  },
];
