import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private API:ApiService) { }

  tipoBajo = 'Bajos';
  tipoGuitarra = 'Guitarras';

  ngOnInit() {}

}
