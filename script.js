const carForm = document.getElementById("carForm");
const carsDiv = document.getElementById("cars");

carForm.addEventListener("submit", (event) => {
  // sustabdys standartine formos elgsena, neperkraus puslapio
  event.preventDefault();
  const name = document.getElementById("name").value;
  const description = document.getElementById("description").value;
  const price = document.getElementById("price").value;
  const image = document.getElementById("image").value;
  const fuel = document.getElementById("fuel").value;

  const carCard = document.createElement("div");
  carCard.className = "car-card";

  carCard.innerHTML = `
  <img src="${image}" alt="car">
  <h3>${name}</h3>
  <p>${description}</p>
  <p>Automobilio kaina: ${price}</p>
  <p>Automobilio kuro tipas: ${fuel}</p>
  `;
  carsDiv.appendChild(carCard);

  //   atstatyti forma i pradine padeti
  carForm.reset();
});
