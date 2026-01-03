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

function logout() {
    localStorage.removeItem("teachername")
    localStorage.removeItem("fullname")
    self.location = ("login.html")
}

function adduser() {
    self.location = "adduser.html"
}

function aboutwebsites() {
    localStorage.setItem("lastpage", "teacheroptions.html")
    self.location = "about.html"
}

function addlog() {
    self.location = "addlog.html"
}

function systemtools () {
    self.location = "systemaccess.html"
}
function saverecord() {
    self.location = "savedatabase.html"
}
function clickDone() {
	    self.location = "teacherindex.html";  //or whichever file comes next
}