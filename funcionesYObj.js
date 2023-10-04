function Carpa(nombre, color, capacidad, precio){
    this.nombre = nombre;
    this.color = color;
    this.capacidad = capacidad;
    this.precio = precio;
}
function Linterna(nombre, lumenes, carga, precio){
    this.nombre = nombre;
    this.lumenes = lumenes;
    this.carga = carga;
    this.precio = precio;
}
function Anafe(nombre, fuenteEnergia, cantHornallas, precio){
    this.nombre = nombre;
    this.fuenteEnergia = fuenteEnergia;
    this.cantHornallas = cantHornallas;
    this.precio = precio;
}


/**********************************************************************/


function mostrarCarpa(carpa){
    alert(` Nombre: ${carpa.nombre} 
            Color: ${carpa.color} 
            Capacidad de personas: ${carpa.capacidad}    
            Precio: ${carpa.precio}`)
}
function mostrarLinterna(linterna){
    alert(` Nombre: ${linterna.nombre} 
            Lumenes: ${linterna.lumenes} 
            Carga: ${linterna.carga}    
            Precio: ${linterna.precio}`)
}
function mostrarAnafe(anafe){
    alert(` Nombre: ${anafe.nombre} 
            Fuente de Energia: ${anafe.fuenteEnergia} 
            Cantidad de Hornallas: ${anafe.cantHornallas}    
            Precio: ${anafe.precio}`)
}


/**********************************************************************/


const listaDeCarpa = [
    new Carpa('Carpa Kabú Pro', 'Azul marino', '6 personas', 166.399),
    new Carpa('Carpa Atenas Pro', 'Naranja', '2 personas', 32.799),
    new Carpa('Carpa Aguila', 'Celeste', '4 personas', 95.299)
];

const listaDeLinterna = [
    new Linterna('Linterna de mano', '600','Pilas', 21.199),
    new Linterna('Linterna minera de cabeza', '600','Pilas', 15.399),
    new Linterna('Linterna minera recargable', '600','Pilas', 13.199)
];
const listaDeAnafe = [
    new Anafe('Anafe Gas natural Pro', 'Gas Natural', '2 hornallas', 59.999),
    new Anafe('Anafe a Gas natural', 'Gas Natural', '2 hornallas', 36.999),
    new Anafe('Anafe Gas envasado Pro', 'Gas Envasado', '2 hornallas', 59.999),
    new Anafe('Anafe a Gas envasado', 'Gas Envasado', '1 hornalla', 36.999),
    new Anafe('Anafe eléctrico 2 Pro', 'Electrico', '2 hornallas', 31.399)
];

function agregarAlCarrito(producto) {
    miCarrito.push(producto);
    alert('Producto agregado al carrito.');
  }

const listaTotal = listaDeCarpa.concat(listaDeLinterna, listaDeAnafe);

const miCarrito = [];