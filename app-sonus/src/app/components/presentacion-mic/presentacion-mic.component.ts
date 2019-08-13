import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { ApiService } from '../../services/api.service';
import {WaveSurfer} from "wavesurfer.js";

@Component({
  selector: 'app-presentacion-mic',
  templateUrl: './presentacion-mic.component.html',
  styleUrls: ['./presentacion-mic.component.css']
})

export class PresentacionMicComponent implements OnInit {

  modelo:string;
  clasificacion:string;
  nombre:string;
  micSolicitado:any;
  micPosiciones:any;
  playing:boolean = false;

  constructor(private rutaActiva: ActivatedRoute, private API:ApiService){
    this.rutaActiva.params.subscribe( params => {
      this.modelo = params['modelo'];
      this.clasificacion = params['clasificacion'];
      this.nombre = params['nombre'];
      // console.log(this.modelo);
    });
  }

  playMusic(idAudio:string){
    let x = <HTMLAudioElement> document.getElementById(idAudio); 
    if (this.playing == false) {
      x.play();
      this.playing = true;
      // console.log("Reproduciendo: " + idAudio);
    } else {
      x.pause();
      this.playing = false;
      // console.log("Detengo: " + idAudio);
    }
  }

  solicitarMic(){
    this.API.solicitarMic(this.modelo,this.clasificacion,this.nombre)
        .subscribe((data:any) => {
          this.micSolicitado = data;
          // console.log(this.micSolicitado.posiciones);
        });
  }

  ngOnInit() {
    this.solicitarMic();
  }

}
