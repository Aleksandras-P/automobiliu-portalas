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
  const year = document.getElementById("year").value;

  if (price <= 0 || name.length < 3) {
    alert("Pavadinimas per trumpas, arba kaina mazesne uz 1 eura");
    return;
  } else {
    const carCard = document.createElement("div");
    carCard.className = "car-card";

    if (fuel === "benzinas") {
      carCard.classList.add("gasoline");
    } else if (fuel === "dyzelinas") {
      carCard.classList.add("diesel");
    } else if (fuel == "elektra") {
      carCard.classList.add("electric");
    }

    carCard.innerHTML = `
  <img src="${image}" alt="car">
  <h3>${name}</h3>
  <p>${description}</p>
  <p>Automobilio pagaminimo metai: ${year}</p>
  <p>Automobilio kaina: ${price}</p>
  <p>Automobilio kuro tipas: ${fuel}</p>
  <button>Istrinti</button>
  `;
    carsDiv.appendChild(carCard);
    const deleteBtn = carCard.querySelector("button");
    deleteBtn.addEventListener("click", () => {
      carCard.remove();
    });
    //   atstatyti forma i pradine padeti
    carForm.reset();
  }
});
