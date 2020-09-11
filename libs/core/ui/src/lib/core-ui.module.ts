import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './side-nav/side-nav.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ImageModule, IconModule } from '@pa-pos/ui';
import { SideNavItemComponent } from './side-nav/side-nav-item/side-nav-item.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [CommonModule, ImageModule, IconModule, FlexLayoutModule],
  declarations: [SideNavComponent, TopBarComponent, SideNavItemComponent],
  exports: [SideNavComponent, TopBarComponent, SideNavItemComponent],
})
export class CoreUiModule {}
