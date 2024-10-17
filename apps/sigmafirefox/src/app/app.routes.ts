import { Route } from '@angular/router';
import { WidgetsComponent } from './widgets/widgets.component';
import { ComponentsComponent } from './components/components.component';
import { FormsComponent } from './forms/forms.component';

export const appRoutes: Route[] = [
  { path: 'widgets', component: WidgetsComponent, title: 'SigmaFireFox | Widgets' },
  { path: 'components', component: ComponentsComponent, title: 'SigmaFireFox | Components' },
  { path: 'forms', component: FormsComponent, title: 'SigmaFireFox | Forms' },
];
