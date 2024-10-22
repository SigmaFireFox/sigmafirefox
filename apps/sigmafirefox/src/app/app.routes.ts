import { Route } from '@angular/router';
import { WidgetsComponent } from './widgets/widgets.component';
import { ComponentsComponent } from './components/components.component';
import { FormsComponent } from './forms/forms.component';
import { CompositionsComponent } from './compositions/compositions.component';

export const appRoutes: Route[] = [
  { path: 'widgets', component: WidgetsComponent, title: 'SigmaFireFox | Widgets' },
  { path: 'components', component: ComponentsComponent, title: 'SigmaFireFox | Components' },
  { path: 'compositions', component: CompositionsComponent, title: 'SigmaFireFox | Compositions' },
  { path: 'forms', component: FormsComponent, title: 'SigmaFireFox | Forms' },
  { path: '', redirectTo: '/widgets', pathMatch: 'full'}
];