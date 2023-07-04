import { disableBodyScroll, enableBodyScroll } from "../src";

const disableButton = document.getElementById("disable");
disableButton?.addEventListener("click", () => {
  disableBodyScroll();
});

const enableButton = document.getElementById("enable");
enableButton?.addEventListener("click", () => {
  enableBodyScroll();
});
