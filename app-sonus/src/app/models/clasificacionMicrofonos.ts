import { Microfono } from './microfonosInterfaces';

export interface clasificacionMicrofonos {
    nombreClasificacion:string,
    modelo:string,
    id?:number,
    microfonos:Microfono[]
}