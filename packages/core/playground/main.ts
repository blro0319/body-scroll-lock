import { disableBodyScroll, enableBodyScroll } from "../src";

const disableButton = document.getElementById("disable");
disableButton?.addEventListener("click", () => {
  if (!target) return;
  disableBodyScroll(target, {
    reserveScrollbar: true,
  });
});

const enableButton = document.getElementById("enable");
enableButton?.addEventListener("click", () => {
  if (!target) return;
  enableBodyScroll(target);
});

const target = document.getElementById("target");
