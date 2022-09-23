import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

 
  constructor(private nav: NavController) {}


  ngOnInit() {

  }

  ir_pagina() {

    this.nav.navigateForward("pagina/1192/ethan/sanchez/322");

  }


}
