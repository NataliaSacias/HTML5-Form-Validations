/* eslint-disable */
import "bootstrap";
import "./style.css";
import validator from "validator";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// window.onload = function() {
//   //write your code here
//   console.log("Hello Rigo from the console!");
// };
let form = document.getElementById("form");

form.addEventListener("submit", e => {
  e.preventDefault();
  validator.isEmail("inputFistname");
});
