import { Component, OnInit } from '@angular/core';
// import {NavController} from 'ionic-angular';
import {AreaPage} from '../area/area.page';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  constructor(private nav : NavController) { }

  //pushPage() {
    //this.navCtrl.push(AreaPage)
  //}
  ngOnInit() {
  }

}
