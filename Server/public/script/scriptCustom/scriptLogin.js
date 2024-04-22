const reg = document.getElementById("btnReg");
const log = document.getElementById("btnLog");
const logdiv = document.getElementById("logdiv");
const regdiv = document.getElementById("regdiv");

reg.addEventListener("click", () => {
  regdiv.style.opacity = "1";
  regdiv.style.position = "absolute";
  regdiv.style.width = "40vw";
  regdiv.style.animationName = "regDiv";
  regdiv.style.animationDuration = "2s";

  logdiv.style.opacity = "0";
  logdiv.style.position = "none";
  logdiv.style.width = "0vw";
  logdiv.style.animationName = "logDiv";
  logdiv.style.animationDuration = "2s";
  logdiv.style.transition = "1s";
});

log.addEventListener("click", () => {
  logdiv.style.opacity = "1";
  logdiv.style.position = "absolute";
  logdiv.style.width = "40vw";
  logdiv.style.animationName = "regDiv";
  logdiv.style.animationDuration = "2s";

  regdiv.style.opacity = "0";
  regdiv.style.position = "none";
  regdiv.style.width = "0vw";
  regdiv.style.animationName = "logDiv";
  regdiv.style.animationDuration = "2s";
  regdiv.style.transition = "1s";
});
