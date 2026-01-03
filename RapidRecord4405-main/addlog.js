/*
The JS. I'm thinking let's LOCALSTORAGE *and* MYSQL the data?
*/
let validpage = 0
if (localStorage.getItem("teachername")) {
    console.log("teachername is defined.")
} else {
    console.log("Instructed is not logged in, going to the login screen.")
    validpage = 1
}
if (localStorage.getItem("teachername") == undefined) {
    console.log("User is not an instructor.")
    validpage = 1
} else {
    console.log("Instructor valid.")
}
if (localStorage.getItem("fullname")) {
	console.log("fullname is defined.")
} else {
	console.log("fullname is not defined.")
}
if (localStorage.getItem("fullname") == undefined) {
	console.log("User is not a student.")
} else {
    if (localStorage.getItem("teachername") == undefined) {
        console.log("Student logged in. Going to hours input screen.")
        validpage = 2
    } else {
        console.log("Teacher has accessed a student's hours.")
    }
}
if (validpage == 1) {
	self.location = "login.html"
} else if (validpage == 2) {
	self.location = "index.html"
}

///////////////////////////////////////////////////////////////////////
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

//Hi Ross, here's what I'm thinking. Here's an array (list) of current hours.
//Right now, it's empty because no buttons have been pressed, so therefore no hours have been added.

let hours = [0]

//Once some buttons are pressed, 'hours' might look a little more like:
/*
    hours = [1, 4]
*/
//which would mean that buttons "1 Hour" and "4 Hours" have been pressed.

// Now we add a function. This function takes in a number of hours (ex, 4).
// If that number of hours already exists in the hours[] array, then we remove it.
// If it's not in, we add it. That's the "toggle" part.
// The function also takes in what button pressed it, so that we can edit that button's
// styling accordingly.

function toggleHour(h,button) {

	//if the button hours pressed is already in the hours[] array...
	if (hours.includes(h)) {

		//then 'toggle off' that button (remove it), and change it's style to the 'off' style.
		hours.splice(hours.indexOf(h),1);
		button.classList.toggle("selected-button");

	//otherwise...
	} else {

		//add it in, and change it's style to the 'on' style.
		hours.push(h);
		button.classList.toggle("selected-button");
	}

}
//customhours.addEventListener("keydown", function (e){
//	if (e.code === "Enter") {
//		hours.push("customhours");
//		button.classList.toggle()
//	}
//});
function clickDone() {
    self.location = ("teacheroptions.html")
}
function addLog() {
    let firstname = document.getElementById("firstname").value;
    firstname = firstname[0].toUpperCase() + firstname.substring(1);
    let lastname = document.getElementById("lastname").value;
    lastname = lastname[0].toUpperCase() + lastname.substring(1);
    let fullname = firstname + " " + lastname;
    let regexp = /^[0-9]{0,}\/[0-9]{0,}\/[0-9]{0,}$/;
    if (regexp.test(document.querySelector("#date").value)) {
        let comments = document.querySelector("#reason").value;
        let date_to_append = document.querySelector("#date").value;
        if (comments != "") {
            date_to_append += " - " + document.getElementById("reason").value;
        }
        fetch(`getData.php?name=${fullname}&num=` + Math.random())
            .then(response => response.text())
            .then((txt) => {
                let data = []
                if (txt != "") {
                    data = JSON.parse(txt);
                }
                data.unshift({date: date_to_append, hours: Number(document.querySelector("#customhours").value)});
                data = JSON.stringify(data);
                fetch(`addData.php?name=${fullname}&data=${data}&num=` + Math.random())
                    .then(response => response.text())
                    .then((txt) => {
                    console.log(txt);
                        //
                    })
                
            })
    } else {
        alert("Invalid data, or incorrect date format");
    }
}