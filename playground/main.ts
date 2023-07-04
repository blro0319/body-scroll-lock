import { disableBodyScroll, enableBodyScroll, resetBodyScroll } from "../src";

const out = document.getElementById("out");
function updateOut() {
  if (!out) return;

  const count = window.__bodyScrollLock?.count ?? 0;
  if (count === 0) out.innerText = "Unlocked";
  else if (count === 1) out.innerText = "Locked 1 time";
  else out.innerText = `Locked ${count} times`;
}

const disableButton = document.getElementById("disable");
disableButton?.addEventListener("click", () => {
  disableBodyScroll();
  updateOut();
});

const enableButton = document.getElementById("enable");
enableButton?.addEventListener("click", () => {
  enableBodyScroll();
  updateOut();
});

const resetButton = document.getElementById("reset");
resetButton?.addEventListener("click", () => {
  resetBodyScroll();
  updateOut();
});
