import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'First Last';
  public links: Array<[string, string]> = [
    ["link", "link"],
    ["kinl", "link"],
    ["iknl", "link"],
    ["ilkn", "link"]
  ];
}
