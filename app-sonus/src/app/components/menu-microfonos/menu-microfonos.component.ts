import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu-microfonos',
  templateUrl: './menu-microfonos.component.html',
  styleUrls: ['./menu-microfonos.component.css']
})
export class MenuMicrofonosComponent implements OnInit {

  tipo:string;
  MicrofonosList:any;

  constructor(private API:ApiService, private rutaActiva: ActivatedRoute) {
    this.rutaActiva.params.subscribe( params => {
      this.tipo = params['tipo'];
      console.log("El tipo elegido fue: " + this.tipo);
    });
  }

  solicitarMicrofonos(){
    this.API.getMicsList(this.tipo)
            .subscribe((data:any) => {
              this.MicrofonosList = data;
              console.log(data);
            });
  }

  ngOnInit() {
    this.solicitarMicrofonos();
  }

}
