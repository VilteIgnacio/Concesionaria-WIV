const autos = [
  { modelo: 'Porsche 911 amarillo', stock: 3 },
  { modelo: 'Ferrari rojo 458 Italia', stock: 5 },
  { modelo: 'Camaro 6', stock: 2 }
];


const elementosStock = [
  document.getElementById('stock1'),
  document.getElementById('stock2'),
  document.getElementById('stock3')
];

const elementosCarrito = [
  document.getElementById('auto1'),
  document.getElementById('auto2'),
  document.getElementById('auto3')
];

//DOM 
function actualizarStock() {
  autos.forEach((auto, index) => {
    elementosStock[index].textContent = auto.stock;
    if (auto.stock === 0) {
      elementosCarrito[index].classList.add('sin-stock');
    } else {
      elementosCarrito[index].classList.remove('sin-stock');
    }
  });
}

// Agregar 
function agregarAlCarrito(index) {
  const auto = autos[index];
  if (auto.stock > 0) {
    auto.stock--;
    actualizarStock();
    agregarAlLocalStorage(auto.modelo);
  }
}

//Comprar 
function comprar(index) {
  const auto = autos[index];
  if (auto.stock > 0) {
    auto.stock--;
    actualizarStock();
    agregarAlLocalStorage(auto.modelo);
    alert(`¡Has comprado el ${auto.modelo}!`);
  } else {
    alert(`El ${auto.modelo} está agotado.`);
  }
}

// Guardar lcalStorage
function agregarAlLocalStorage(modelo) {
  const itemsCarrito = JSON.parse(localStorage.getItem('itemsCarrito')) || [];
  itemsCarrito.push(modelo);
  localStorage.setItem('itemsCarrito', JSON.stringify(itemsCarrito));
}

// localStorage
function cargarDesdeLocalStorage() {
  const itemsCarrito = JSON.parse(localStorage.getItem('itemsCarrito')) || [];
  itemsCarrito.forEach(modelo => {
    const index = autos.findIndex(auto => auto.modelo === modelo);
    if (index !== -1 && autos[index].stock > 0) {
      autos[index].stock--;
    }
  });
  actualizarStock();
}


window.addEventListener('DOMContentLoaded', () => {
  actualizarStock();
  cargarDesdeLocalStorage();
});


//                       VALORACION

const mainContainer = document.querySelector(".container")
const thanksContainer = document.querySelector(".thank-you")
const submitButton = document.getElementById("submit-rating")
const rateAgain = document.getElementById("rate-again")
const ratings = document.querySelectorAll(".btn")
const actualRating = document.getElementById("rating")

submitButton.addEventListener("click", () => {
mainContainer.style.display = "none"
thanksContainer.classList.remove("hidden")

ratings.forEach((rating) => {
  rating.addEventListener("click", () => {
    actualRating.innerHTML = rating.innerHTML
  })
})
})

rateAgain.addEventListener("click", () => {
  mainContainer.style.display = "block"
  thanksContainer.classList.add("hidden")
  })
  

rateAgain.addEventListener(`click`, () => {
swal({
  title: "Felicidades",
  text: "Te uniste a la elite automotriz en Argentina al interactuar con WIV",
  icon: "",
  button: "volver",
});
})