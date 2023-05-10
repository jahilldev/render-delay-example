"use strict";

const queryParams = new URLSearchParams(window.location.search);
const delayValue = queryParams.get("delay");
const bodyElement = document.body;

if (delayValue) {
  setTimeout(
    () => bodyElement.classList.add("display"),
    parseInt(delayValue, 10)
  );
} else {
  bodyElement.classList.add("display");
}
