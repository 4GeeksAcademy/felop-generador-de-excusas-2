/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
  }

  function generarExcusas() {
    let whoSelected = who[getRandomNumber(who.length)];
    let actionSelected = action[getRandomNumber(action.length)];
    let whatSelected = what[getRandomNumber(what.length)];
    let whenSelected = when[getRandomNumber(when.length)];
    return `${whoSelected} ${actionSelected} ${whatSelected} ${whenSelected}.`;
  }

  console.log("Hello Rigo from the console!");
  document.querySelector("#excusas").innerHTML = generarExcusas();
};
