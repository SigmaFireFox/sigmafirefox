import { Route } from '@angular/router';
import { WidgetsComponent } from './widgets/widgets.component';
import { ComponentsComponent } from './components/components.component';

export const appRoutes: Route[] = [
  { path: 'widgets', component: WidgetsComponent, title: 'SigmaFireFox | Widgets' },
  { path: 'components', component: ComponentsComponent, title: 'SigmaFireFox | Components' },
];
