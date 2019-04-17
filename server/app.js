const fs = require('fs'); // Incluyo el modulo File System.

// function MicrofonoGuitarra(nombre, tipo, colores, posiciones, urlSonidos, urlImagenes) {
//     this.nombre = nombre; // Nombre del Microfono.
//     this.tipo = tipo; // Simple Bobina o otros.
//     // this.modelo = modelo; // Bajo o Guitarra.
//     this.colores = colores; // Arreglo Colores en que viene.
//     this.posiciones = posiciones; // Arreglo con posiciones Mid, Bridge o Neck.
//     this.urlSonidos = urlSonidos; // Arreglo Ulr's de los sonidos.
//     this.urlImagenes = urlImagenes // Arreglo con url's de imagenes.
// }

// function MicrofonoBajo(nombre, tipo, colores, posiciones, urlSonidos, urlImagenes) {
//     this.nombre = nombre; // Nombre del Microfono.
//     this.tipo = tipo; // Simple Bobina o otros.
//     this.modelo = modelo; // Bajo o Guitarra.
//     this.colores = colores; // Colores en que viene.
//     this.posiciones = posiciones; // Mid, Bridge, Neck.
//     this.urlSonidos = urlSonidos; // Ulr's de los sonidos.
//     this.urlImagenes = urlImagenes // Arreglo con url's de imagenes.
// }

function Microfono(modelo, nombre, tipo, colores, posiciones, urlSonidos, urlImagenes) {
    this.modelo = modelo; // Bajo o Guitarra.
    this.nombre = nombre; // Nombre del Microfono.
    this.tipo = tipo; // Simple Bobina o otros.
    this.colores = colores; // Arreglo Colores en que viene.
    this.posiciones = posiciones; // Arreglo con posiciones Mid, Bridge o Neck.
    this.urlSonidos = urlSonidos; // Arreglo Ulr's de los sonidos.
    this.urlImagenes = urlImagenes // Arreglo con url's de imagenes.
}

var mic1Guitarra = new Microfono("Guitarra", "SUPER BRIDGE Set x3", "Simple Bobina", ['Negro', 'Blanco'], ["Mid", "Bridge", "Neck"], ["https://soundcloud.com/sonus-fx/super-bridge-2018-drive-neck", "https://soundcloud.com/sonus-fx/super-bridge-2018-drive-neck-mid"], ["asdasdasd"]);
var mic1Bajo = new Microfono("Bajo", "Jazz Bass Classic - Neck", "Simple Bobina", ['Negro'], ["Mid", "Bridge", "Neck"], ["https://soundcloud.com/sonus-fx/super-bridge-2018-drive-neck", "https://soundcloud.com/sonus-fx/super-bridge-2018-drive-neck-mid"], ["asdasdasdasd"]);

let microfonos = [];

microfonos.push(mic1Bajo);
microfonos.push(mic1Guitarra);

fs.writeFile('microfonos.json', JSON.stringify(microfonos, null, 2), 'utf8', (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});