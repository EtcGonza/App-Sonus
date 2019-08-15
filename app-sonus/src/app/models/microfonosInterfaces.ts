import { Posiciones } from './posicionInterface';

export interface Microfono {
    nombre: string,
    descripcion: string,
    tipo: string,
    nombreClasificacion: string,
    posiciones: Posiciones[],
    urlImagenes: string[]
}