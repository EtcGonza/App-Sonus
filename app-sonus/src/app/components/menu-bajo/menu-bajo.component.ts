import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../services/api.service";

@Component({
  selector: 'app-menu-bajo',
  templateUrl: './menu-bajo.component.html',
  styleUrls: ['./menu-bajo.component.css']
})
export class MenuBajoComponent implements OnInit {

  bajoList = [];

  constructor(private API:ApiService) {}

  getbajoList(){
    this.API.getMicsBajos()
      .subscribe((data:any)=>{
        this.bajoList = data;
      })
  }

  ngOnInit() {
    this.getbajoList();
    console.log(this.bajoList);
  }

}
