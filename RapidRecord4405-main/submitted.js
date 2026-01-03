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
if (localStorage.getItem("addHours")) {
	console.log("Hours accepted.")
} else {
	console.log("No hours submitted. Going to hours screen.")
    self.location = "index.html"
}
let previoushours = 0;
if (localStorage.getItem("totalhours")) {
    previoushours = Number(localStorage.getItem("totalhours"));
}
let fullname = localStorage.getItem("fullname")
let totalhours = localStorage.getItem("addHours");
const ADD_HOURS_TO_DB = parseInt(localStorage.getItem("addHours"));//yes, I know it's a repeat, just for my sake :)
totalhours = parseInt(totalhours)
var newhours = previoushours + totalhours;
totalhours = 0
localStorage.setItem("addHours", totalhours)
var elem = document.getElementById("progress");
var progress = (newhours) * 1.25
elem.style.width = progress + "vw";
localStorage.removeItem(totalhours)
localStorage.setItem("totalhours", newhours)
newHours(newhours);
function newHours(newhours) {
document.getElementById("hours").textContent = newhours + " hours"
}

const URL_PARAMS = new URLSearchParams(window.location.search);
if (URL_PARAMS.has("sub")) {
	document.querySelector("#name").textContent = "You're all done!"
    document.querySelector("#welcome").textContent = "Your hours have been recorded."
    document.querySelector("#done").textContent = "Submit Again >"
} else {
    getTotalHours(localStorage.getItem("fullname"),(th) => {
        localStorage.setItem("totalhours",th);
        previousHours = th;
        elem.style.width = (th * 1.25) + "vw";
        document.getElementById("hours").textContent = th + " hours";
    })
}

// run whenDonePressed() when it is clicked, essentially does the same thing as onclick=“whenDonePressed()” in the HTML
document.getElementById("done").addEventListener("click", whenDonePressed);
function whenDonePressed() {
    //add code here to manage whatever needs to be managed in the JS, saving info, etc
    if (localStorage.getItem("fullname")) {
                //and then switch page
        self.location = "index.html";  //or whichever file comes next
    } else {
        self.location = "login.html"
    }
}
function progressDisplay() {
    localStorage.setItem("lastpage", "submitted.html")
    self.location = "history.html"
}
function logout() {
    localStorage.getItem("fullname")
    localStorage.removeItem("fullname")
    self.location = "login.html"
}
function aboutwebsites() {
    localStorage.setItem("lastpage", "submitted.html")
    self.location = "about.html"
}
if (ADD_HOURS_TO_DB != 0) {
    fetch(`getData.php?name=${fullname}&num=` + Math.random())
        .then(response => response.text())
        .then((txt) => {
            let data = []
            if (txt != "") {
                data = JSON.parse(txt);
            }
            data.unshift({date: new Date().toLocaleDateString(), hours: ADD_HOURS_TO_DB});
            data = JSON.stringify(data);
            fetch(`addData.php?name=${fullname}&data=${data}&num=` + Math.random())
                .then(response => response.text())
                .then((txt) => {
                console.log(txt);
                    //
                })
            
        })
}