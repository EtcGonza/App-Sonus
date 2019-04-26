import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { map, tap, concat } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

  // QUERY API PROPIA
  getQueryApi(query: string) {
    const url = `http://localhost:3000/${query}`;
    // const url = `/api/${query}`;
    console.log(`http://localhost:3000/${query}`);
    return this.http.get(url);
  }

  // FUNCIONALIDADES API//
  getMicsBajos() {
    return this.getQueryApi(`getBajos`);
  }
  getMicsGuitarras() {
    return this.getQueryApi(`getGuitarras`);
  }

  getMicsList(tipo:string) {
    return this.getQueryApi(`get${tipo}`);
  }

  solicitarMic (modelo, clasificacion, nombre) {
    console.log("Enviando "+modelo,clasificacion,nombre);
    return this.getQueryApi(`getMicrofono/${modelo}/${clasificacion}/${nombre}`);
  }
}
