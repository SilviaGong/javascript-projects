// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init() {
  const takeOffButton = document.getElementById("takeoff");
  const paragraph = document.getElementById("flightStatus");
  const background = document.getElementById("shuttleBackground");
  let shuttleHeight = document.getElementById("spaceShuttleHeight");
  let currentHeight = parseInt(shuttleHeight.textContent);
  const landButton = document.getElementById("landing");
  const abortButton = document.getElementById("missionAbort");
  const buttons = document.querySelectorAll(".center-block button");

  takeOffButton.addEventListener('click', function () {
    let confirm = window.confirm("Confirm that the shuttle is ready for takeoff.");
    if (confirm === true) {
      paragraph.innerHTML = "Shuttle in flight.";
      background.style.background = "blue";
      currentHeight += 10000;
      shuttleHeight.textContent = currentHeight;
    }
  });
  landButton.addEventListener('click', function () {
    window.alert("The shuttle is landing. Landing gear engaged.");
    paragraph.innerHTML = "The shuttle has landed.";
    background.style.background = "green";
    shuttleHeight.textContent = 0;
  });
  abortButton.addEventListener('click', function () {
    let confirm = window.confirm("Confirm that you want to abort the mission.");
    if (confirm === true) {
      paragraph.innerHTML = "Mission aborted.";
      background.style.background = "green";
      shuttleHeight.textContent = 0;
    }
  });
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
      if (buttons[i].id === "up") {
        currentHeight += 10000;
      } else if (buttons[i].id === "down") {
        currentHeight -= 10000;
      }
      shuttleHeight.textContent = currentHeight;
    });
  }

}
window.addEventListener('load', init);