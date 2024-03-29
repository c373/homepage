import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() public title!: string;
  @Input() public links!: Array<[string, string]>;

  constructor() {
  }

  test(): void {
    console.log('test');
  }
}
