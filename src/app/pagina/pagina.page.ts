import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.page.html',
  styleUrls: ['./pagina.page.scss'],
})
export class PaginaPage implements OnInit {

  constructor(private nav:NavController) { }

  ngOnInit() {
  }

  enviar_dato(){

    this.nav.navigateForward("pagina2")

  }

}
