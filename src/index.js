const container = document.querySelector("#destinationscontainer");
const template = document.querySelector("#destinationtemplate");
const url = "http://localhost:10000/destinations"

let destinations = [];

fetch("http://localhost:10000/destinations")
    .then((response) => response.json())
    .then((data) => data.forEach(element => {
        createDestination(element.pictureUrl, element.country, element.title, element.dateFrom, element.dateTo, element.description)
    }));

console.log(destinations)

destinations.forEach(element => {
    createDestination(destinations.pictureUrl, destinations.country, destinations.title , destinations.dateFrom, destinations.dateTo, destinations.description)
});

function createDestination(imgsrc, country, name, date1, date2, description){
    const clone = template.content.cloneNode(true);
    let timage = clone.querySelector("#image");
    let tcountry = clone.querySelector("#country");
    let tname = clone.querySelector("#name");
    let tdate = clone.querySelector("#date");
    let tdescription = clone.querySelector("#description");

    timage.src = "/src/assets/" + imgsrc;
    tcountry.textContent = country;
    tname.textContent = name;
    tdate.textContent = date1 + date2;
    tdescription.textContent = description

    container.appendChild(clone);
}
