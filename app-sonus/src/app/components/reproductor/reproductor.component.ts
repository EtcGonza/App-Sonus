import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-reproductor',
  templateUrl: './reproductor.component.html',
  styleUrls: ['./reproductor.component.css']
})
export class ReproductorComponent implements OnInit {

  @Input()tituloPosicion:string;
  @Input()url:string;

  constructor() {}

  ngOnInit() {}

}
