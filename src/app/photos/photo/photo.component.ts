import { Component, Input } from "@angular/core";

@Component({
  selector: "np-photo",
  templateUrl: "photo.component.html"
})
export class PhotoComponent {
  @Input() title = "";
  @Input() url = "";
}
