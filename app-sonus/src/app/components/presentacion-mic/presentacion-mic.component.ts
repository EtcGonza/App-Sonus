import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-presentacion-mic',
  templateUrl: './presentacion-mic.component.html',
  styleUrls: ['./presentacion-mic.component.css']
})

export class PresentacionMicComponent implements OnInit {

  hola:any;

  constructor(private rutaActiva: ActivatedRoute){
    this.rutaActiva.params.subscribe( params => {
      this.hola = params['modelo']
    })
  }

  ngOnInit() {}

}
