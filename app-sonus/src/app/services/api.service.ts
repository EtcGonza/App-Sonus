import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Microfono } from '../models/microfonosInterfaces';
import { Posiciones } from '../models/posicionInterface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

  // QUERY API PROPIA
  getQueryApi(query: string) {
    // const url = `http://localhost:3000/${query}`;
    const url = `https://sonusbackend.herokuapp.com/${query}`;
    return this.http.get(url);
  }

  // Injeccion SoundCloud
  getSoundCloudUrl (url: string) {
    const soundCloudUrl = `https://w.soundcloud.com/player/?url=${url}`;
    return soundCloudUrl;
  }

  ObjMic:Microfono;

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

// Funciones para pasar un microfono desde el componente lista-microfono Component y el presentacion-mic Component.

  getObjMic () {
    return this.ObjMic;
  }
  setObjMic (microfono:Microfono) {
    this.ObjMic = microfono;
  }

  // Funciones que toman el arreglo de posiciones desde el backEnd que contiene los url de SoundCloud y se las inyecta en el SoundCloudUrl para poder reproducirlo en el componente presentacion-mic Component

  inyectarUrlSoundCloud (url:string){
    return this.getSoundCloudUrl(url);
  }

  posicionesInyectadas (urls:Posiciones[]){

    let inyectados:Posiciones[];
    inyectados = urls;

    inyectados.forEach((item, index) => {
      inyectados[index].urlSonido = this.inyectarUrlSoundCloud(urls[index].urlSonido);
    });

    return inyectados;
  }
}