//TODO: Add Your Code Below
window.addEventListener("load", function () {
  fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function (response) {
    //Access the JSON in response
    response.json().then(function (json) {
      // console.log(typeof json);
      console.log(json);
      const div = document.getElementById("container");
      div.innerHTML = `<p>Total Astronauts: ${json.length}</p>`;
      // Sort astronauts by hoursInSpace in descending order
      json.sort(function (a, b) {
        return b.hoursInSpace - a.hoursInSpace;
      });

      // Add HTML that includes the JSON data
      for (let i = 0; i < json.length; i++) {
        const isActive = json[i].active;
        let textColor;
        if (isActive) {
          textColor = "green";
        } else {
          textColor = "black";
        }

        // Create HTML elements for each astronaut and append them to the container
        div.innerHTML += ` 
        <div class="astronaut">
          <div class="bio">
             <h3>${json[i].firstName} ${json[i].lastName}</h3>
             <ul>
                <li>Hours in space:${json[i].hoursInSpace} </li>
                <li>Active:  <span style="color: ${textColor};"> ${json[i].active}</li>
                <li>Skills: ${json[i].skills.join(", ")}</li>
             </ul>
          </div>
          <img class="avatar" src="${json[i].picture}">
        </div> `;

      }

    });

  });
});