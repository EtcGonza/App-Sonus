import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-boton-desplegable',
  templateUrl: './boton-desplegable.component.html',
  styleUrls: ['./boton-desplegable.component.css']
})
export class BotonDesplegableComponent implements OnInit {

  @Input()nombreClasificacion:String;
  @Input()listaMicrofonos:any;
  @Input()id:any;
  @Input()tipo:any;

  constructor() { }

  ngOnInit() {
  }

}
