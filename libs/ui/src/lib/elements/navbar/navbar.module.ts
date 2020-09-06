import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarItemsComponent } from './navbar-items/navbar-items.component';
import { NavbarItemComponent } from './navbar-item/navbar-item.component';



@NgModule({
  declarations: [NavbarComponent, NavbarItemsComponent, NavbarItemComponent],
  imports: [
    CommonModule
  ],
  exports: [NavbarComponent, NavbarItemsComponent, NavbarItemComponent]
})
export class NavbarModule { }
