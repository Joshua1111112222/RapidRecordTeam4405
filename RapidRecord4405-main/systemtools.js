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

let systemuser = localStorage.getItem("SystemUser")
document.getElementById("log-text").textContent = "Using tools as ID: " + systemuser

function logout() {
    localStorage.removeItem("teachername")
    localStorage.removeItem("fullname")
    self.location = ("login.html")
}

function removeuser() {
    self.location = "removeuser.html"
}

function removelog() {
    self.location = "removelogin.html"
}

function addinstructor () {
    self.location = "addinstructor.html"
}

function removeinstructor() {
    self.location = "removeinstructor.html"
}

function clearhours() {
    localStorage.setItem("buttonclicked", "hours")
    self.location = "areyousure.html"
}

function cleardatabase () {
    localStorage.setItem("buttonclicked", "database")
    self.location = "areyousure.html"
}

function clickDone() {
	    self.location = "teacheroptions.html";  //or whichever file comes next
}