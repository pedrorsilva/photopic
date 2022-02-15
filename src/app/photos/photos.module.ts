import { NgModule } from "@angular/core";
import { PhotoCoponent } from "./photo/photo.component";

@NgModule({
  declarations: [PhotoCoponent],
  exports: [PhotoCoponent],
})
export class PhotosModule {}
