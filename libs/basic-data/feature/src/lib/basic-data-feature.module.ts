import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicDataComponent } from './basic-data/basic-data.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TabsModule } from '@pa-pos/ui';

@NgModule({
  imports: [
    CommonModule,
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
        ],
      },
    ]),
    FlexLayoutModule,
    TabsModule,
  ],
  declarations: [BasicDataComponent],
})
export class BasicDataFeatureModule {}
