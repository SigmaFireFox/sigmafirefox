import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './components/overview/overview.component';
import { SalesComponent } from './components/sales/sales.component';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { CashBookComponent } from './components/cash-book/cash-book.component';
import { ReportsComponent } from './components/reports/reports.component';

const routes: Routes = [
  {
    path: '',
    component: OverviewComponent,
    title: 'e-Questrian | Finance | Overview',
  },
  {
    path: 'sales',
    component: SalesComponent,
    title: 'e-Questrian | Finance | Sales',
  },
  {
    path: 'expenses',
    component: ExpensesComponent,
    title: 'e-Questrian | Finance | Expenses',
  },
  {
    path: 'cash-book',
    component: CashBookComponent,
    title: 'e-Questrian | Finance | Cash Book',
  },
  {
    path: 'reports',
    component: ReportsComponent,
    title: 'e-Questrian | Finance | Reports',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinanceManagementRoutingModule { }
