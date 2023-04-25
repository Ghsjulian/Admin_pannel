"use strict";
function $(selector) {
  return document.querySelector(selector);
}

/*____SELECT ALL POST FROM SERVER*/
function fetch_post() {
  fetch("public/server/login.php", {
    method: "POST",
    body: new FormData(),
  })
    .then((res) => {
      return res.text();
    })
    .then((data) => {
      console.log(data);
     // $(".string").innerHTML = data.post;
     // $(".style").innerHTML = data.poster;
    });
}
fetch_post();
