import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicDataComponent } from './basic-data/basic-data.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TabsModule } from '@pa-pos/ui';
import { BasicDataDataAccessModule } from '@pa-pos/basic-data/data-access';
@NgModule({
  imports: [
    CommonModule,
    BasicDataDataAccessModule,
    RouterModule.forChild([
      {
        component: BasicDataComponent,
        path: '',
        children: [
          {
            path: '',
            redirectTo: '/basic-data/items',
            pathMatch: 'full',
          },
          {
            path: 'items',
            loadChildren: () =>
              import('./items/items.module').then((m) => m.ItemsModule),
          },
          {
            path: 'categories',
            loadChildren: () =>
              import('./categories/categories.module').then(
                (m) => m.CategoriesModule
              ),
          },
          {
            path: 'suppliers',
            loadChildren: () =>
              import('./suppliers/suppliers.module').then(
                (m) => m.SuppliersModule
              ),
          },
        ],
      },
    ]),
    FlexLayoutModule,
    TabsModule,
  ],
  declarations: [BasicDataComponent],
  providers: [],
})
export class BasicDataFeatureModule {}
