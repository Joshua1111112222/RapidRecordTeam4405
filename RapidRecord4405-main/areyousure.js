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

let buttonclicked = localStorage.getItem("buttonclicked")
if (buttonclicked == "hours") {
    usehours()
} else if (buttonclicked == "database") {
     usedatabase()
}
let create_alert_2 = {
	withTitle: (title) => {
		return {
			withBody: (bodytxt,func) => {
				if (current_popup == null) {
					blur_div.style.display = "block";

					let alert_div = document.createElement("div");
					alert_div.className = "alert_body";
					
					let title_text = document.createElement("h1");
					title_text.className = "title_text";
					title_text.textContent = title;
					
					let body_text = document.createElement("p");
					body_text.className = "body_text";
					body_text.textContent = bodytxt;

					let button = document.createElement("button");
					button.className = "alert_button";
					button.textContent = "Got It";
					let button2 = document.createElement("button");
					button2.className = "alert_button";
					button2.textContent = "Exit";

					button.addEventListener("click",() => {
						current_popup.remove();
						blur_div.style.display = "none";
						current_popup = null;
						func();
					})
					button2.addEventListener("click",() => {
						current_popup.remove();
						blur_div.style.display = "none";
						current_popup = null;
					})

					alert_div.appendChild(title_text);
					alert_div.appendChild(body_text);
					alert_div.appendChild(button);
					alert_div.appendChild(button2);

					document.body.appendChild(alert_div);

					current_popup = alert_div;
				}
			}
		}
	}
}

function usehours() {
    document.getElementById("name").textContent = "Clear Hours"
    document.getElementById("log-text").textContent = "Are you sure? This will wipe all users' hours and log history (including instructor log history) and store them in a recoverable JSON file."
    document.getElementById("removei").textContent = "Clear Hours"
}

function usedatabase() {
    document.getElementById("name").textContent = "Clear Database"
    document.getElementById("log-text").textContent = "Are you sure? This will wipe the entire database and store it in a recoverable JSON file."
    document.getElementById("removei").textContent = "Clear Database"
}

function remove() {
    if (buttonclicked == "hours") {
        clearhours()
    } else if (buttonclicked == "database") {
        cleardatabase()
    } else {
        self.location = "systemtools.html"
    }
}

function clearhours() {
    create_alert_2.withTitle("WARNING").withBody("You are about to permanently EVERYBODY's hours... FOREVER. Are you sure about this?",() => {
        localStorage.clear()
        removeallHOURS();
    })
    
    //alert("You have cleared all logged hours and history. A JSON file will be created and downloaded to your computer for recovery and archive purposes.")

}
function cleardatabase () {
    localStorage.clear();
	let saver = window.open("savadadatabasa.php","DOWNLOAD","width=500, height=400");
	let interv = setInterval(() => {
		if (saver.closed) {
			console.log("ACTIVATED)");
			fetch("delete_everything.php")
			.then(() => {
				fetch("addsuperpeep.php?name=System%20Admin&access_key=04405");
			})
			
			//alert("You have cleared the entire database. A JSON file will be created and downloaded to your computer for recovery and archive purposes.");
			clearInterval(interv);
			create_alert_2.withTitle("SUCCESS").withBody("You have cleared the entire database. A CSV file has been created and downloaded to your computer for recovery and archive purposes.",() => {
				self.location = "login.html";
			})
			return 0;
		}
	},100)
    

}

function removeallHOURS() {
	//self.location = self.location;
	let saver = window.open("savadadatabasa.php","DOWNLOAD","width=500, height=400");
	let interv = setInterval(() => {
		if (saver.closed) {
			clearInterval(interv);
			fetch(`removeliterallyalldata.php?num=` + Math.random())
				.then(response => response.text())
				.then((txt) => {
					alert("You have erased all the hours. Sending you to the login page...")
					document.addEventListener("click",() => {
						self.location = self.location;
					})
				})
			return 0;
		}
	},100)
}

function clickBack() {
	    self.location = "systemtools.php";  //or whichever file comes next
}