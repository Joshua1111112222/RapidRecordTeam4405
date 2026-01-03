getlastpage()
function getlastpage() {
    lastpage = localStorage.getItem("lastpage")
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
    }
}
function websites() {
    self.location = "websites.html"
}
function clickBack() {
    lastpage = localStorage.getItem("lastpage")
    self.location = lastpage
}