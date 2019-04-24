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
    return this.http.get(url);
  }

  // FUNCIONALIDADES API//
  getMicsBajos() {
    return this.getQueryApi(`getBajos`);
  }
  getMicsGuitarras() {
    return this.getQueryApi(`getGuitarras`);
  }
}
