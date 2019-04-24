import { Component, OnInit, Input, Output } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-button-menu',
  templateUrl: './button-menu.component.html',
  styleUrls: ['./button-menu.component.css']
})
export class ButtonMenuComponent implements OnInit {

  @Input()Microfono:any;
  @Input()NombreClasificacion:any;
  @Input()Tipo:any;

  constructor(private router:Router) {}

  ngOnInit() {}

}
