import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },

  {
    path: 'dashboard',
    loadChildren: () =>
      import('@pa-pos/dashboard/feature').then((m) => m.DashboardFeatureModule),
  },
  {
    path: 'sales',
    loadChildren: () =>
      import('@pa-pos/sales/feature').then((m) => m.SalesFeatureModule),
  },

  // Fallback when no prior routes is matched
  { path: '**', redirectTo: '/auth/login', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { initialNavigation: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
