import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  changeArrow = true;
  constructor() { }

  ngOnInit(): void {
  }
  changeNavBar() {
    this.changeArrow = !this.changeArrow
  }
}
