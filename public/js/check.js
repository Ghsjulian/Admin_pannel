"use strict";

export function check (value){
  if (
value.includes("</>") ||
value.includes("<") ||
value.includes(">") ||
value.includes("/") ||
value.includes("alert") ||
value.includes("=") ||
value.includes("|") ||
value.includes("&") ||
value.includes("?") ||
value.includes(";") ||
value.includes("*") ||
value.includes("@") ||
value.includes("(") ||
value.includes(")") ||
value.includes("[") ||
value.includes("]") ||
value.includes("{") ||
value.includes("}") ||
value.includes("_") ||
value.includes("hot") ||
value.includes("sex") ||
value.includes("sexy") ||
value.includes("fucking") ||
value.includes("fuck") ||
value.includes("pussy") ||
value.includes("bobs") ||
value.includes("sucking") ||
value.includes("hot girl") ||
value.includes("nonsense") ||
value.includes("what")) {
  return false;
} else {
  return true;
}
}