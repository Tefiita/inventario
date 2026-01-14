class Producto {
  constructor(nombre, precio, stock) {
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
  }
  
  // Método para vender una cantidad específica del producto
  vender(cantidad) {
    if (cantidad <= this.stock) {
      this.stock -= cantidad;
      return `Venta realizada: ${cantidad} unidad(es) de ${this.nombre}. Stock
restante: ${this.stock}`;
    } else {
      return `No hay suficiente stock de ${this.nombre} para realizar la venta.`;
    }
  }

  // Método para reponer el stock del producto
  reponer(cantidad) {
    this.stock += cantidad;
    return `Stock de ${this.nombre} aumentado a ${this.stock}.`;
  }

  // Getter para obtener la información del producto
  get informacion() {
    return `Producto: ${this.nombre} | Precio: $${this.precio} | Stock:
${this.stock}`;
  }
  static compararPrecio(prodA, prodB) {
    return prodA.precio > prodB.precio ? prodA.nombre : prodB.nombre;
  }
}

const prod1 = new Producto("Teclado", 25000, 10);
const prod2 = new Producto("Mouse", 12000, 5);

console.log(prod1.informacion); // Información inicial
console.log(prod1.vender(3)); // Simula venta
console.log(prod1.reponer(5)); // Repone stock
console.log(prod1.informacion); // Nuevo stock
console.log(
  `El producto más caro es: ${Producto.compararPrecio(prod1, prod2)}`
);

const listaProductos = [prod1, prod2, new Producto("Monitor", 55000, 2)];
const productosBajoStock = listaProductos.filter((prod) => prod.stock < 5);
console.log(productosBajoStock.map((prod) => prod.informacion));
