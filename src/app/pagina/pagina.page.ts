import { Component, OnInit } from '@angular/core';
import{ActivatedRoute}  from "@angular/router";
@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.page.html',
  styleUrls: ['./pagina.page.scss'],
})
export class PaginaPage implements OnInit {

  public id: number;
  public Apellido: string;
  public Nombre: string ;
  public tel: number;
  
  constructor(private ru:ActivatedRoute) { }

  ngOnInit() {

     this.id = Number(this.ru.snapshot.paramMap.get('id'));
    this.Apellido = this.ru.snapshot.paramMap.get('apellido');
    this.Nombre = this.ru.snapshot.paramMap.get('nombre');
    this.tel = Number(this.ru.snapshot.paramMap.get('tel'));

  }
  /*
  enviar_dato(){

    this.nav.navigateForward("pagina2/34")

  }
  */

}
