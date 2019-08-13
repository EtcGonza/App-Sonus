import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-boton-redondo',
  templateUrl: './boton-redondo.component.html',
  styleUrls: ['./boton-redondo.component.css']
})
export class BotonRedondoComponent implements OnInit {

  @Input()direccion:string;

  constructor() { 
    console.log(this.direccion);
  }

  ngOnInit() {
    console.log(this.direccion);
  }

}
