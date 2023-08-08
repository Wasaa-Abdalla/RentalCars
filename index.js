document.addEventListener('DOMContentLoaded',getAllCars)
function renderOneCar(car) {
    let card = document.createElement('li')
    card.className='card'
    card.innerHTML=`
    <Img src="${car.imageUrl}">
    <div class="wrapper">
    <h4>${car.name}</h4>
    <p>${car.description}</p>
    </div>
    
    `
    document.querySelector('#car-list').appendChild(card)
   
    
}

function getAllCars() {
    fetch('http://localhost:3000/carData')
    .then(res => res.json())
    .then(carData =>carData.forEach(car => renderOneCar(car)))

}

