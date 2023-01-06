import { Component } from '@angular/core';
import { FooterSectionComponent } from "./footer/footer-section/footer-section.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public placeholder?: string[];
  public title: string = 'First Last';
  public links: Array<[string, string]> = [
    ["link", "link"],
    ["kinl", "link"],
    ["iknl", "link"],
    ["ilkn", "link"]
  ];

  public footerSections: FooterSectionComponent[] = [
    {
      heading: "Contact",
      links: [
        ["link", "link"],
        ["kinl", "link"],
        ["iknl", "link"],
        ["ilkn", "link"]
      ],
      subheading: "Subheading"
    },

    {
      heading: "Projects",
      links: [
        ["link", "link"],
        ["kinl", "link"],
        ["iknl", "link"],
        ["ilkn", "link"]
      ],
      subheading: "Subheading"
    },

    {
      heading: "About",
      links: [
        ["link", "link"],
        ["kinl", "link"],
        ["iknl", "link"],
        ["ilkn", "link"]
      ],
      subheading: "Subheading"
    }
  ];
}
