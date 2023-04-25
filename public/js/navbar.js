"use strict";
function $(selector) {
  return document.querySelector(selector);
}

/*============Menu Icons Showing===========*/
$("#menu").onclick = (e) => {
  e.preventDefault();
  $(".side-bar").classList.toggle("mobile");
  //var cs = getComputedStyle($(".side-bar"));
  //var display = cs.getPropertyValue("display");
  /*  if (display == "none") {
    $(".side-bar").style.display = "block";
  } else {
    $(".side-bar").style.display = "none";
  }*/
};

var links = $(".side-bar").querySelectorAll("a");
links.forEach((element) => {
  element.onclick = (e) => {
    e.preventDefault();
    $(".side-bar").classList.toggle("mobile");
  };
});
