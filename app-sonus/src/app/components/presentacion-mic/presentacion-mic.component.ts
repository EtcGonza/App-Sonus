import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { ApiService } from '../../services/api.service';

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

  constructor(private rutaActiva: ActivatedRoute, private API:ApiService){
    this.rutaActiva.params.subscribe( params => {
      this.modelo = params['modelo'];
      this.clasificacion = params['clasificacion'];
      this.nombre = params['nombre'];
    });
  }

  solicitarMic(){
    this.API.solicitarMic(this.modelo,this.clasificacion,this.nombre)
        .subscribe((data:any) => {
          this.micSolicitado = data;
          console.log(this.micSolicitado);
        });
  }

  ngOnInit() {
    this.solicitarMic();
  }

}
