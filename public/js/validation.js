"use strict";
import { check } from "./check.js";
function $(selector) {
  return document.querySelector(selector);
}

/*LOGIN VALIDATION FOR CLIENTS*/

$("#__btn").onclick = (e) => {
  e.preventDefault();
  var form = $("#myfrm");
  var name = $("#name").value;
  var password = $("#password").value;
  if (name == "") {
    error("Please Enter Username !");
  } else if (password == "") {
    error("Please Enter Password !");
  } else if (check(name)) {
    fetch("public/server/login.php", {
      method: "POST",
      body: new FormData(form),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data[0].role) {
          success(data[0].message);
          window.location.href = "pages/dashboard.php";
        } else {
          error(data[0].message);
        }
      });
  } else {
    error("Bad Words !");
  }
};
function error(msg) {
  $("._error").style.display = "block";
  $("._error").textContent = msg;
  setTimeout(() => {
    $("._error").style.display = "none";
    $("._error").textContent = "";
  }, 3000);
}
function success(msg) {
  $("._success").style.display = "block";
  $("._success").textContent = msg;
  setTimeout(() => {
    $("._success").style.display = "none";
    $("._success").textContent = "";
  }, 3000);
}
