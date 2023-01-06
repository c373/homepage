import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'First Last';
  public links: Map<string, string> = new Map([
    ["github", "https://github.com"],
    ["linkedin", "https://linkedin.com"],
    ["projects", "https://projects.projects"]
  ]);
}
