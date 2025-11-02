// Datos de los productos
const productos = [
  {
    nombre: "Balde de Pollo",
    descripcion: "Ongos deliciosos para tu disfrute.",
    imagen: "/img/pollo1.jpg",
    precio: 10000.0,
  },
  {
    nombre: "El Hongo",
    descripcion: "El hongo de temporada, fresco y natural.",
    imagen: "/img/pollo2.jpg",
    precio: 10000.0,
  },
  {
    nombre: "Escafandra",
    descripcion: "Escafandra, un sabor único para tus recetas.",
    imagen: "/img/pollo3.jpg",
    precio: 13000.0,
  },
  {
    nombre: "Mufin",
    descripcion: "Un delicioso mufin para cada ocasión.",
    imagen: "/img/pollo4.jpg",
    precio: 12000.0,
  },
  {
    nombre: "Navidad",
    descripcion: "Navidad en cada bocado.",
    imagen: "/img/pollo5.jpg",
    precio: 15000.0,
  },
  {
    nombre: "El Coco",
    descripcion: "El coco, el toque tropical para tus postres.",
    imagen: "/img/pollo6.jpg",
    precio: 15000.0,
  }
];

// Elementos HTML
const contenedorProductos = document.getElementById("productos-container");
const listaCarrito = document.querySelector("#carrito ul");
const totalCarrito = document.querySelector("#carrito p");
const botonBorrar = document.getElementById("btn_borrar");
const botonPagar = document.getElementById("btn_pagar");
const mensajePagarCarrito = document.getElementById("mensajeCarrito");

let totalAPagar = 0;

// Crear las cards de los productos
function crearCards() {
  let productosHTML = "";
  productos.forEach((producto, indice) => {
    productosHTML += `
      <div class="card">
        <img src="${producto.imagen}" alt="${producto.nombre}" class="zoom-image">
        <h3>${producto.nombre}</h3>
        <p>${producto.descripcion}</p>
        <p class="price">$${producto.precio}</p>
        <!-- <button class="add-to-cart" data-index="${indice}">Agregar al carrito</button> -->
      </div>
      
    `;
  });
  contenedorProductos.innerHTML = productosHTML;

  // Agregar listeners a los botones
  const botonesAgregar = document.querySelectorAll(".add-to-cart");
  botonesAgregar.forEach((boton) =>
    boton.addEventListener("click", agregarAlCarrito)
  );
}

// Agregar producto al carrito
function agregarAlCarrito(event) {
  const indice = event.target.getAttribute("data-index");
  const producto = productos[indice];

  const elementoLi = document.createElement("li");
  elementoLi.textContent = `${producto.nombre} - $${producto.precio}`;
  listaCarrito.appendChild(elementoLi);

  totalAPagar += producto.precio;
  totalCarrito.textContent = `Total a Pagar: $${totalAPagar}`;
  mensajePagarCarrito.textContent = "";
}

// Vaciar el carrito
function vaciarCarrito() {
  listaCarrito.innerHTML = "";
  totalAPagar = 0;
  totalCarrito.textContent = "Total a Pagar: $0";
  mensajePagarCarrito.textContent = "";
}

// Ir a pagar
function irAPagar() {
  if (listaCarrito.innerHTML === "") {
    mensajePagarCarrito.textContent = "No has seleccionado ningún producto";
  } else {
    window.location.href = "./pagos.html";
  }
}

// Inicializar funcionalidades
crearCards();
botonBorrar.addEventListener("click", vaciarCarrito);
botonPagar.addEventListener("click", irAPagar);
