import { Component } from "@angular/core";
import { HttpClient, HttpHandler } from "@angular/common/http";
import { PhotoService } from "./photos/photo.service";
import { Photo } from "./photos/photo/photo";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "app";

  photos: Photo[] = [];

  constructor(photoService: PhotoService) {
    photoService.listFromUser("flavio").subscribe(
      (photos) => (this.photos = photos),
      (error) => console.log(error)
    );
  }
}
