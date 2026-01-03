getlastpage()
function getlastpage() {
    lastpage = localStorage.getItem("lastpage")
}
if (lastpage == "login.html") {
    console.log("lastpage is login.html")
} else if (lastpage == "submitted.html") {
    console.log("lastpage is submitted.html")
    document.getElementById("welcome").textContent = "Account Options"
} else if (lastpage == "teacheroptions.html") {
    console.log("lastpage is teacheroptions.html")
    document.getElementById("welcome").textContent = "Options & Tools"
} else {
    localStorage.setItem("lastpage", "login.html")
}function firstpage() {
    self.location = "https://www.team4405.com/"
}
function secondpage() {
    self.location = "https://www.firstinspires.org/robotics/frc"
}
function thirdpage() {
    self.location = "https://perceptive.team4405.com/login"
}
function fourthpage() {
    self.location = "https://www.plymouthchristian.org/"
}
function fifthpage() {
    self.location = "https://www.youtube.com/watch?v=xjTvB0dmSU8"
}
function sixthpage() {
    self.location = "https://joshua1111112222.github.io/Atomic-Toasters-Robotics/"
}
function seventhpage() {
    self.location = ""
}
function clickBack() {
    self.location = "about.html"
}