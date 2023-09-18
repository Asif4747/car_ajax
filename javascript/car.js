function displayCarSpecification(carSpecifications) {
  
  let carDetail = "";

  for (let i = 0; i < carSpecifications.length; i++) {
    let cars = carSpecifications[i];
    carDetail +=
      `<div class = "carDetail"><h1>` +
      cars.carName +
      "</h1> <img src=" +
      cars.image +
      `> <div class="container"> <h4> Model:` +
      cars.carModel +
      `</h4> <h4> Capacity:` +
      cars.capacity +
      `</h4> <h4> Price:` +
      carSpecifications[i].price +
      `<h4> </div> </div> `;
  }
  document.getElementById("carSpecification").innerHTML = carDetail;
}

function loadCarJson() {
    
  const xmlhttp = new XMLHttpRequest();
  xmlhttp.onload = function () {
    const myObj = JSON.parse(this.responseText);
    displayCarSpecification(myObj);
  };
  xmlhttp.open("GET", "json/car.json");
  xmlhttp.send();

}
