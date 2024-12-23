import {
  NavbarConfig,
  NavigationMenuItemConfig,
} from '@sigmafirefox/components';
import { RouteRelationshipType } from '@sigmafirefox/services';
import { HeaderFontSize } from '@sigmafirefox/widgets';

export const navbarConfig: NavbarConfig = {
  logo: {
    logo: {
      paths: [
        'M21.2,72.04c4.63,1.68,11.49-2.09,22-14.74c3.98,1.47,7.1,4.73,8.46,11.72c2.58,13.31-1.52,21.83-7.22,33.54 c-1.06,2.17-2.12,4.32-3.15,6.48h81.29l-0.25-0.2c5.55-39.24-31.98-58.51-4.56-46.4c-11.78-28.52-48.09-37.8-22.47-34.84 C82.12,15.55,65.5,8.89,41.87,13.1C36.85,5.77,24.84-9.86,28.52,8.86L22.5,3.49l-0.33,18.89C15.01,27.84,11.1,46.03,5.56,57.86 c-4.74,4.7-6.56,10.32-5.05,19.06C7.89,86.43,19.54,84.07,21.2,72.04L21.2,72.04z',
      ],
    },
    text: {
      size: HeaderFontSize.Medium,
      content: 'eQuestrian',
    },
  },
  navlinks: [],
  profileCard: {
    firstName: 'Dude',
    lastName: 'McGee',
    userDetails: ['dude@mcgee.com'],
    clickRoute: {
      relationship: RouteRelationshipType.Absolute,
      route: 'platform/profile',
    },
  },
};

export const modulesMenuConfig: NavigationMenuItemConfig[] = [
  { icon: 'dashboard', description: 'Dashboard', route: 'platform' },
  {
    icon: 'event',
    description: 'Appointments',
    route: 'platform/appointments',
  },
  { icon: 'people', description: 'Clients', route: 'platform/clients' },
  {
    icon: 'account_balance',
    description: 'Finance',
    route: 'platform/finance',
    children: [
      {
        icon: 'visibility',
        description: 'Overview',
        route: 'platform/finance/overview',
      },
      {
        icon: 'trending_up',
        description: 'Sales and Debtors',
        route: 'platform/finance/sales',
      },
      {
        icon: 'trending_down',
        description: 'Expenses and Creditors',
        route: 'platform/finance/expenses',
      },
      {
        icon: 'payment',
        description: 'Payments and Receipts',
        route: 'platform/finance/cash-book',
      },
      {
        icon: 'insert_chart',
        description: 'Reports',
        route: 'platform/finance/reports',
      },
    ],
  },
  { icon: 'hotel', description: 'Liveries', route: 'platform/liveries' },
  { icon: 'pets', description: 'Livestock', route: 'platform/livestock' },
  { icon: 'group', description: 'Staff', route: 'platform/staff' },
];

export const userMenuConfig: NavigationMenuItemConfig[] = [
  {
    icon: 'account_circle',
    description: 'Profile',
    route: 'platform/user/profile',
  },
  {
    icon: 'settings',
    description: 'Settings',
    route: 'platform/user/settings',
  },
  {
    icon: 'exit_to_app',
    description: 'Sign out',
    route: 'platform/user/log-out',
  },
];
