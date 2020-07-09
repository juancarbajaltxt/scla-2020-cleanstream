import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  showText() {
    document.getElementById("boom").style.display = 'block'  ;

  }

  Thumb() { 
    document.getElementById("tup").style.display = 'block'  ;
  }

  showText3() { 
    document.getElementById("tdown").style.display = 'block'  ;
  }
}