// TODO: add code here

window.addEventListener("load", function () {
    const container = document.getElementById("container");
    console.log("page is loaded");
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function (response) {
        response.json().then(function (json) {
            console.log(json);

            // NUMBER OF ASTRONAUTS
            astro.innerHTML = `Astronauts: ${json.length} total`

            // SORT ARRAY OF OBJECTS - NOT FUNCTIONAL**
            json.sort(function(a, b) {
                return (a.hoursInSpace < b.hoursInSpace ? 1 : -1);
            });

            // DISPLAY ALL ASTRONAUT INFORMATION
            for (key in json) {
                console.log(json[key]);
                let activeClass = 'class="green"'
                container.innerHTML += `
                    <div class="astronaut">
                        <h3>${json[key].firstName} ${json[key].lastName}</h3>
                        <ul>
                            <li>Hours In Space: ${json[key].hoursInSpace}</li>
                            <li class="${json[key].active ? "green" : ""}">Active: ${json[key].active}</li>
                            <li>Skills: ${json[key].skills.join(', ')}</li>
                        </ul>
                        <img class="avatar" src=${json[key].picture}>
                    </div>
                `;
            };

            // ACTIVE TRUE = GREEN
            //if (activeStatus.innerHTML = true) {
            //    document.getElementById("activeStatus").style.color = "green";
            //}

            /*for (let i=0; i < json.length; i++) {
                for (let j=0; j < json[i].skills.length; j++) {
                    container.innerHTML = `
                        <div>
                            <h3>${json[i].firstName} ${json[i].lastName}</h3>
                            <h4><ul>
                                <li>Hours In Space: ${json[i].hoursInSpace}</li>
                                <li>Active: ${json[i].active}</li>
                                <li>Skills: ${json[i].skills[j]}</li>
                            </ul></h4>
                            <img class="avatar" src=${json[i].picture}>
                        </div>
                    `;
                }
            };
            */
            
        });
    });
});

/* problems:

1.  both ai loop and j loop both seem to retrieve last piece of data in objects.  Why?
2.  i loop and j loop do not print more than the final item in JSON object.  Why?
3.  Picture not aligning correctly to text.  How to fix?
4.  border not appearing around astronaut, unclear why since it was in CSS

*/