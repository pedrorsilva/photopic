import { Component, Input } from "@angular/core";

@Component({
  selector: "sp-photo",
  templateUrl: "./photo.component.html",
})
export class PhotoCoponent {
  @Input() description: string = "";
  @Input() url: string = "";
}
