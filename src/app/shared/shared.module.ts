import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightModule } from './highlight/highlight.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, HighlightModule],
  exports: [HighlightModule],
})
export class SharedModule {}
