import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { videoList } from '../constant/videoData.constant';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  @Output() changeBG = new EventEmitter<string>();

  changeArrow = true;
  videoId=1;
  videoList = videoList;
  constructor() { }

  ngOnInit(): void {
  }
  changeBackGround(url) {
    this.changeBG.emit(url);
  }
  getID(id) {
    this.videoId = id;
  }
  changeNavBar() {
    this.changeArrow = !this.changeArrow
  }
}
