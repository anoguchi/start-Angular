import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "Fadas";

  photos = [
    {
      url: 'https://pbs.twimg.com/media/EIKRkzNX0AAnaWe.jpg',
      title: 'Pokimane'
    },
    {
      url: 'https://i.pinimg.com/originals/e8/78/94/e87894bacd7394dbd1a38ca53c5ef7bc.jpg',
      title: 'WonderWoman'
    }
  ]

}
