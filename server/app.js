const fs = require('fs'); // Incluyo el modulo File System.

// CUIDADO AL EJECUTAR, SE SOBREESCRIBIRA EL ARCHIVO MICROFONOS.JSON //

function Microfono(modelo, clasificacion, nombre, descripcion, posiciones, urlSonidos, urlImagenes) {
    this.modelo = modelo; // Bajo o Guitarra.
    this.clasificacion = clasificacion; // Subclasificacion.
    this.nombre = nombre; // Nombre del Microfono.
    this.descripcion = descripcion; // Descripcion del microfono.
    this.posiciones = posiciones; // Arreglo con posiciones Mid, Bridge o Neck.
    this.urlSonidos = urlSonidos; // Arreglo Ulr's de los sonidos.
    this.urlImagenes = urlImagenes // Arreglo con url's de imagenes.
}

var mic1 = new Microfono("Bajo",
    "Bass Humbucker",
    "Humbucker Bass Set", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac tempus ex, non ultricies dolor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque a nulla consectetur, pulvinar nisl id, volutpat diam. Etiam non tortor tortor. Etiam lacinia condimentum ipsum, nec tristique lectus fringilla eu. Suspendisse potenti. Nulla facilisi. Vivamus volutpat, ex ut mollis viverra, ante odio sagittis justo, vitae egestas neque nibh eget metus. Ut nisl nisi, molestie eget arcu a, dapibus vulputate erat. Suspendisse eget elit at enim efficitur efficitur. Nulla vel dolor augue. Proin lacinia nisl odio, at pretium ex pharetra vel. Praesent egestas eros nisi, sed gravida odio posuere vel. Pellentesque vehicula interdum nisl volutpat ultrices. Fusce finibus ultrices arcu, at malesuada libero semper a. Interdum et malesuada fames ac ante ipsum primis in faucibus.", ["Mid", "Bridge", "Neck"], ["https://soundcloud.com/sonus-fx/super-bridge-2018-drive-neck", "https://soundcloud.com/sonus-fx/super-bridge-2018-drive-neck-mid"], ["asdasdasd"]);

let microfonos = [];

microfonos.push(mic1);
// microfonos.push(mic2);

fs.writeFile('microfonos.json', JSON.stringify(microfonos, null, 2), 'utf8', (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});

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