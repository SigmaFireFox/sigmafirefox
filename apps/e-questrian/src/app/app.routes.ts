import { Route } from '@angular/router';
import { PubicSiteModule } from './pubic-site/pubic-site.module';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () => PubicSiteModule,
  },
];
