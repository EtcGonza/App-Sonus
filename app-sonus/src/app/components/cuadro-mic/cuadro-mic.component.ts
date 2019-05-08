import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cuadro-mic',
  templateUrl: './cuadro-mic.component.html',
  styleUrls: ['./cuadro-mic.component.css']
})
export class CuadroMicComponent implements OnInit {

  @Input()tituloPosicion:any;

  constructor() { }

  ngOnInit() {
  }

}
