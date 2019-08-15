import { Component, OnInit, Input } from '@angular/core';
import { Microfono } from '../../models/microfonosInterfaces';
import { clasificacionMicrofonos } from '../../models/clasificacionMicrofonos';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-boton-desplegable',
  templateUrl: './boton-desplegable.component.html',
  styleUrls: ['./boton-desplegable.component.css']
})
export class BotonDesplegableComponent implements OnInit {

  @Input()id:any;
  @Input()listaMicrofono:clasificacionMicrofonos;
  mic:Microfono;

  constructor(private servicio:ApiService) {}

  ngOnInit() {}

  guardarMic (mic:Microfono) {
    this.mic = mic;
    this.servicio.setObjMic(this.mic);
    this.mic = this.servicio.getObjMic();
  }
}
