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

// run whenDonePressed() when it is clicked, essentially does the same thing as onclick=“whenDonePressed()” in the HTML
function clickSubmit() {
    //add code here to manage whatever needs to be managed in the JS, saving info, etc
    let members = ["Owen Bryant","Ross Taylor","John Doe","Jane Doe"];
    let instructors = ["Jessica Wash", "Phil Tran", "Professor Admin"]
    let firstname =  document.getElementById("firstname").value
    if (firstname == "")  {
        alert("One of the input boxes is blank. Make sure you have typed your first and last name and try again.")
        return
    } else {
        console.log("firstname is defined")
    }
    firstname = firstname[0].toUpperCase() + firstname.substring(1);
    let lastname = document.getElementById("lastname").value
    if (lastname == "")  {
        alert("One of the input boxes is blank. Make sure you have typed your first and last name and try again.")
        return
    } else {
        console.log("lastname is defined")
    }
    lastname = lastname[0].toUpperCase() + lastname.substring(1);
    let fullname = firstname + " " + lastname
    if (members.includes(fullname)) {
        //and then switch page
        localStorage.setItem("logname", fullname)
        self.location = "removelog.html";  //or whichever file comes next
    } else if (instructors.includes(fullname)) {
        localStorage.setItem("logname", fullname)
        self.location = "removelog.html";  //or whichever file comes next
    } else {
        alert(fullname + " is not currently registered on the 4405 robotics team. Make sure you inputted the name correctly and try again.")
    }
}

function clickBack () {
    self.location = "systemtools.php";  //or whichever file comes next
}