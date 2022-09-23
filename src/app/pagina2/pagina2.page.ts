import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.page.html',
  styleUrls: ['./pagina2.page.scss'],
})
export class Pagina2Page implements OnInit {

  constructor(private NavC:NavController, private ro:ActivatedRoute) { }

  ngOnInit() {

    let id = this.ro.snapshot.paramMap.get('id');
    alert(id);
  }
  /*
  ir_pagina(){
    this.NavC.navigateForward("pagina");
  }
  */
  ir_home(){
    this.NavC.navigateForward("home");
  }

}
