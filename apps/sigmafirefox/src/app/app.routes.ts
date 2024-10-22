import { Route } from '@angular/router';
import { WidgetsComponent } from './widgets/widgets.component';
import { ComponentsComponent } from './components/components.component';
import { FormsComponent } from './forms/forms.component';
import { CompositionsComponent } from './compositions/compositions.component';
import { ModalsComponent } from './modals/modals.component';

export const appRoutes: Route[] = [
  { path: 'widgets', component: WidgetsComponent, title: 'SigmaFireFox | Widgets' },
  { path: 'components', component: ComponentsComponent, title: 'SigmaFireFox | Components' },
  { path: 'forms', component: FormsComponent, title: 'SigmaFireFox | Forms' },
  { path: 'compositions', component: CompositionsComponent, title: 'SigmaFireFox | Compositions' },
  { path: 'modals', component: ModalsComponent, title: 'SigmaFireFox | Modals' },
  { path: '', redirectTo: '/widgets', pathMatch: 'full'}
];

