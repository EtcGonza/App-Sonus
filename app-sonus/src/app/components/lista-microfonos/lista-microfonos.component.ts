import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { clasificacionMicrofonos } from '../../models/clasificacionMicrofonos';

@Component({
  selector: 'app-lista-microfonos',
  templateUrl: './lista-microfonos.component.html',
  styleUrls: ['./lista-microfonos.component.css']
})
export class ListaMicrofonosComponent implements OnInit {

  tipo:string;
  MicrofonosList:clasificacionMicrofonos[];
  loading:boolean = true;

  constructor(private API:ApiService, private rutaActiva: ActivatedRoute) {
    this.rutaActiva.params.subscribe( params => {
      this.tipo = params['tipo'];
    });
  }

  solicitarMicrofonos(){
    this.loading = true;
    this.API.getMicsList(this.tipo)
            .subscribe((data:clasificacionMicrofonos[]) => {
              this.loading = false;
              this.MicrofonosList = data;
            });
  }

  ngOnInit() {
    this.solicitarMicrofonos();

  }

}
