/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let FirstName = ["the", "our", "my"];
let SecondName = ["community", "goal", "improve"];
let EndName = [".com", ".mx", ".es"];

let container = document.querySelector(".list-html"); //Variable para hacer referencia al P donde van a ir los dominios
let DomainList = "";

for (let f = 0; f < FirstName.length; f++) {
  for (let s = 0; s < SecondName.length; s++) {
    for (let e = 0; e < EndName.length; e++) {
      let DomainCompleted = FirstName[f] + SecondName[s] + EndName[e];
      DomainList += DomainCompleted + "<br>";
    }
  }
}

container.innerHTML = DomainList;
