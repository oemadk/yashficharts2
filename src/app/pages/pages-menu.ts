import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [

  {
    title: 'ERDs Charts',
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
];
