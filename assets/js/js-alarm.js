// side alarm
const sideBtn = document.querySelector(".kt__main__side-bar__bottom");
const alarmBtn = sideBtn.querySelectorAll("a")[1];

// center alarm
const centerImg = document.querySelector(".alarm");

// side alarm img
const sideBellOn = document.createElement("i");
const sideBellOff = document.createElement("i");

sideBellOn.classList.add("far");
sideBellOn.classList.add("fa-bell");
sideBellOff.classList.add("far");
sideBellOff.classList.add("fa-bell-slash");

// center alarm img
const centerBellOn = document.createElement("i");
const centerBellOff = document.createElement("i");

centerBellOn.classList.add("fas");
centerBellOn.classList.add("fa-bell");
centerBellOff.classList.add("fas");
centerBellOff.classList.add("fa-bell-slash");

alarmBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const {
    classList: { value: nowState },
  } = alarmBtn;
  const nowAlarmBtnImg = alarmBtn.children[0];
  const nowCenterImg = centerImg.children[0];

  alarmBtn.removeChild(nowAlarmBtnImg);
  centerImg.removeChild(nowCenterImg);
  if (nowState === "on") {
    alarmBtn.classList.remove("on");
    alarmBtn.classList.add("off");
    alarmBtn.appendChild(sideBellOff);

    centerImg.classList.remove("on");
    centerImg.classList.add("off");
    centerImg.appendChild(centerBellOff);
  } else if (nowState === "off") {
    alarmBtn.classList.remove("off");
    alarmBtn.classList.add("on");
    alarmBtn.appendChild(sideBellOn);

    centerImg.classList.remove("off");
    centerImg.classList.add("on");
    centerImg.appendChild(centerBellOn);
  }
});
