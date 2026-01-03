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

function addthisuser() {
    let firstname =  document.getElementById("firstname").value
    let lastname =  document.getElementById("lastname").value
    lastname = lastname[0].toUpperCase() + lastname.substring(1);
    firstname = firstname[0].toUpperCase() + firstname.substring(1);
    let fullname = firstname + " " + lastname;
    fetch(`addpeep.php?name=${fullname}&access_key=4&num=` + Math.random())
        .then(response => response.text())
        .then((txt) => {
            self.location = self.location;
            //
        })
    //self.location = self.location;
}

function clickDone() {
	    self.location = "teacheroptions.html";  //or whichever file comes next
}