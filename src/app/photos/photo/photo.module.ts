import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { PhotoCoponent } from './photo.component';

@NgModule({
  declarations: [PhotoCoponent],
  imports: [CommonModule, HttpClientModule],
  exports: [PhotoCoponent],
})
export class PhotoModule {}
