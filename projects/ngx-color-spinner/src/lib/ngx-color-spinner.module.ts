import { NgModule } from '@angular/core';
import { NgxColorSpinnerComponent } from './ngx-color-spinner.component';
import { MatProgressSpinnerModule } from '@angular/material'

@NgModule({
  imports: [
    MatProgressSpinnerModule
  ],
  declarations: [NgxColorSpinnerComponent],
  exports: [NgxColorSpinnerComponent]
})
export class NgxColorSpinnerModule { }
