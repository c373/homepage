import { Component, Input } from '@angular/core';
import { FooterSectionComponent } from "./footer-section/footer-section.component";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  @Input() public sections?: Array<FooterSectionComponent>;
  constructor() {
  }
}
