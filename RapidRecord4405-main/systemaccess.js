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

let password = "R3*f#qw^.U'_";//not the actual password, don't try it
let passinput = null;
let idnumber = "04405"
let idinput = null;

function clickSubmit() {
    //add code here to manage whatever needs to be managed in the JS, saving info, etc
    passinput = document.getElementById("password").value;
    idinput = document.getElementById("idnumber").value;
    localStorage.setItem("SystemUser", idinput)
    cookies.set("psw",passinput);
    self.location = "systemtools.php";
    //alert("The password is incorrect, an invalid id has been inputted, or one box was left blank. Please check the input boxes and try again.")
    
}
function clickBack() {
    self.location = "teacheroptions.html"
}