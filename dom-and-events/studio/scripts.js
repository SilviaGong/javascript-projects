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
  const rocket = document.getElementById('rocket');

  rocket.style.position = 'relative';
  rocket.style.top = '0px';
  rocket.style.left = '0px';

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
      if (buttons[i].id === "up" && parseInt(rocket.style.top) > 0) {
        currentHeight += 10000;
        rocket.style.top = (parseInt(rocket.style.top) - 10) + "px";
      } else if (buttons[i].id === "down" && parseInt(rocket.style.top) < (background.clientHeight - rocket.clientHeight)) {
        currentHeight -= 10000;
        rocket.style.top = (parseInt(rocket.style.top) + 10) + "px";
      } else if (buttons[i].id === "left" && parseInt(rocket.style.left) > (0 - background.clientWidth / 2)) {
        rocket.style.left = (parseInt(rocket.style.left) - 10) + "px";
      } else if (buttons[i].id === "right" && (parseInt(rocket.style.left)) < (background.clientWidth - rocket.clientWidth)) {
        rocket.style.left = (parseInt(rocket.style.left) + 10) + "px";
      }
      shuttleHeight.textContent = currentHeight;
    });
  }

}
window.addEventListener('load', init);