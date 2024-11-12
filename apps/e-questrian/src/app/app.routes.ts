import { Route } from '@angular/router';
import { PubicSiteModule } from './pubic-site/pubic-site.module';
import { PlatformModule } from './platform/platform.module';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () => PubicSiteModule,
    title: 'eQuestrian'
  },
  {
    path: 'platform',
    loadChildren: () => PlatformModule,
    title: 'eQuestrian'
  },
];
