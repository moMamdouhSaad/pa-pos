import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LevelComponent } from './level/level.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [LevelComponent],
  imports: [CommonModule, FlexLayoutModule],
  exports: [LevelComponent],
})
export class LevelModule {}
