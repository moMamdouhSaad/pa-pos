import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { CardHeaderComponent } from './card-header.component';
import { CardBodyComponent } from './card-body.component';
import { CardTextComponent } from './card-text.component';
import { CardFooterComponent } from './card-footer.component';
import { CardTabsComponent } from './card-tabs/card-tabs.component';
import { CardTabComponent } from './card-tabs/card-tab.component';
import { CardImageComponent } from './card-image.component';

@NgModule({
  declarations: [
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    CardTextComponent,
    CardFooterComponent,
    CardTabsComponent,
    CardTabComponent,
    CardImageComponent,
  ],
  imports: [CommonModule],
  exports: [
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    CardTextComponent,
    CardFooterComponent,
    CardTabsComponent,
    CardTabComponent,
    CardImageComponent,
  ],
})
export class CardModule {}
