import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../services/api.service";

@Component({
  selector: 'app-menu-guitarra',
  templateUrl: './menu-guitarra.component.html',
  styleUrls: ['./menu-guitarra.component.css']
})
export class MenuGuitarraComponent implements OnInit {

  dataMics = [];

  constructor(private API:ApiService) { }

  // getDataMicsGuitarras(){
  //   this.API.getMicsGuitarras()
  //     .subscribe((data:any)=>{
  //       this.dataMics = data;
  //       console.log(this.dataMics);
  //     })
  // }

  ngOnInit() {
    
  }

}
