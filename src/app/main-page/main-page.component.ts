import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  visibleList = new Array(6).fill(42);

  constructor() {
  }

  ngOnInit() {
  }

}
