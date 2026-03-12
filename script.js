
let luoghiFirenze = [
  {
    nome: "Duomo di Firenze (Cattedrale di Santa Maria del Fiore)",
    latitudine: 43.7731,
    longitudine: 11.2560
  },
  {
    nome: "Galleria degli Uffizi",
    latitudine: 43.7687,
    longitudine: 11.2550
  },
  {
    nome: "Palazzo Vecchio",
    latitudine: 43.7696,
    longitudine: 11.2563
  },
  {
    nome: "Ponte Vecchio",
    latitudine: 43.7680,
    longitudine: 11.2531
  },
  {
    nome: "Galleria dell'Accademia",
    latitudine: 43.7769,
    longitudine: 11.2586
  }
];

let container=document.getElementById("container");
var map = L.map('map').setView([43.7696, 11.2558], 13);

for(let i=0;i<luoghiFirenze.length;i++){
    let div=document.createElement("div");
    let h1=document.createElement("h1");
    let p1=document.createElement("p");
    let p2=document.createElement("p");

    h1.innerHTML=luoghiFirenze[i].nome;
    p1.innerHTML=luoghiFirenze[i].longitudine;
    p2.innerHTML=luoghiFirenze[i].latitudine;
    
    div.appendChild(h1);
    div.appendChild(p1);
    div.appendChild(p2);

    div.classList.add("card");

    container.appendChild(div);
}

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
