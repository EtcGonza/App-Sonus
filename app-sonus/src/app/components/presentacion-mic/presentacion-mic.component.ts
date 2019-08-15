import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Microfono } from '../../models/microfonosInterfaces';

@Component({
  selector: 'app-presentacion-mic',
  templateUrl: './presentacion-mic.component.html',
  styleUrls: ['./presentacion-mic.component.css']
})

export class PresentacionMicComponent implements OnInit {
  microfono:Microfono;

  constructor(private API:ApiService){}

  ngOnInit() {
    this.microfono = this.API.getObjMic();
    this.microfono.posiciones = this.API.posicionesInyectadas(this.microfono.posiciones);
  }

}
