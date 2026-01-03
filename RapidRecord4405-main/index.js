/*
The JS. I'm thinking let's LOCALSTORAGE *and* MYSQL the data?
*/
if (localStorage.getItem("totalhours") == "NaN") {
	localStorage.setItem("totalhours",0)
}
let validpage = 0
if (localStorage.getItem("fullname")) {
	console.log("fullname is defined.")
} else {
	console.log("Not logged in. Going to login screen.")
	validpage = 1
}
if (localStorage.getItem("fullname") == undefined) {
	console.log("User invalid, please log in.")
    validpage = 1
} else {
	console.log("User vaild.")
}
if (localStorage.getItem("teachername")) {
    console.log("teachername is defined.")
} else {
    console.log("teachername is not defined.")
}
if (localStorage.getItem("teachername") == undefined) {
    console.log("User is not an instructor.")
} else {
    console.log("Instructor logged in. Switching to instructor page.")
    validpage = 2
}
if (validpage == 1) {
	self.location = "login.html"
} else if (validpage == 2) {
	self.location = "teacherindex.html"
}
let previoushours = 0;
if (localStorage.getItem("totalhours")) {
    previoushours = Number(localStorage.getItem("totalhours"));
}

var button1 = 1;
var button2 = 2;
var button3 = 3;
var button4 = 4;
var button5 = document.getElementById("customhours").value;
var totalhours = button1+button2+button3+button4+button5;
var newhours = 0
var fullname = localStorage.getItem("fullname")
document.getElementById("name").textContent = fullname;
var elem = document.getElementById("progress");
var progress = previoushours * 1.25
elem.style.width = progress + "vw";




///////////////////////////////////////////////////////////////////////
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

//Hi Ross, here's what I'm thinking. Here's an array (list) of current hours.
//Right now, it's empty because no buttons have been pressed, so therefore no hours have been added.

let hours = [0]

getTotalHours(localStorage.getItem("fullname"),(th) => {
	localStorage.setItem("totalhours",th);
	previoushours = th;
	console.log("MESSAGE FROM LOCALSTORAGE: " + th)
	try {
		console.log((hours.reduce((a,b) => a + b)))
		document.getElementById("hours").textContent = (hours.reduce((a,b) => a + b)) + " hours"
		var totalhours = (hours.reduce((a,b) => a + b))
		localStorage.setItem("addHours", totalhours)
		newhours = totalhours + previoushours
		progressFloat = parseFloat(newhours)
		progressPercent = progressFloat * 1.25
		progressPercent = Math.round(progressPercent)
		progressPercent = parseInt(progressPercent)
		elem.style.width = progressPercent + "vw";
		console.log(progressPercent + "vw")
	} catch (typeError) {
		alert("You cannot submit an empty amount of custom hours. Type a value in and try again.")
	}
})

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

	//and then we update the 'hours' counter thing.
	try {
		console.log((hours.reduce((a,b) => a + b)))
		document.getElementById("hours").textContent = (hours.reduce((a,b) => a + b)) + " hours"
		var totalhours = (hours.reduce((a,b) => a + b))
		localStorage.setItem("addHours", totalhours)
		newhours = totalhours + previoushours
		progressFloat = parseFloat(newhours)
		progressPercent = progressFloat * 1.25
		progressPercent = Math.round(progressPercent)
		progressPercent = parseInt(progressPercent)
		elem.style.width = progressPercent + "vw";
		console.log(progressPercent + "vw")
	} catch (typeError) {
		alert("You cannot submit an empty amount of custom hours. Type a value in and try again.")
	}
}
//customhours.addEventListener("keydown", function (e){
//	if (e.code === "Enter") {
//		hours.push("customhours");
//		button.classList.toggle()
//	}
//});
function clickDone() {
	if (newhours <= 0) {
		alert("You have not inputed an hour amount yet. Please select an hour amount by pushing the buttons or type a custom amount and try again.")
	} else {
		self.location = "submitted.html?sub=true";  //or whichever file comes next
	}
}