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
var newhours = 0
var fullname = localStorage.getItem("logname")
document.getElementById("name").textContent = fullname;

let JSON_data;
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
					button.textContent = "Yes";
					let button2 = document.createElement("button");
					button2.className = "alert_button";
					button2.textContent = "No";

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
/*getTotalHours(localStorage.getItem("logname"),(th) => {
	localStorage.setItem("totalhours",th);
	previousHours = th;
	elem.style.width = (th * 1.25) + "vw";
	document.getElementById("hours").textContent = th + " hours";
})*/

function newHours(newhours) {
document.getElementById("hours").textContent = newhours + " hours"
}
function clickBack() {
    self.location = "systemtools.php"
}
function rm_log(tm, dt) {
	create_alert_2.withTitle("WARNING").withBody("You are about to permanently delete this log. Are you sure?",() => {
		let indx = 0;
		JSON_data.forEach((val,ind) => {
			if (val.hours == tm && val.date == dt) {
				indx = ind;
			}
		})
		JSON_data.splice(indx,1);
		post_new_log();
	})
	
	//post_new_log();
	//create_alert_2.withTitle("WARNING").withBody("You are about to permanently delete this log. Are you sure?")
}
function post_new_log() {
	fetch(`addData.php?name=${fullname}&data=${JSON.stringify(JSON_data)}&num=` + Math.random())
                .then(response => response.text())
                .then((txt) => {
                	self.location = self.location;
                    //
                })
}

fetch(`getData.php?name=${fullname}&num=` + Math.random())
	.then(response => response.text())
	.then((txt) => {
		if (txt != "") {
			let data = JSON.parse(txt);
			JSON_data = data;
			data.forEach((val) => {
				let new_data = document.createElement('h1');
				new_data.innerHTML = "Hours: " + val.hours + "<br><span class='history-date'>" + val.date + "</span>";
				new_data.className = "history-container";
				new_data.addEventListener("click",() => {
					rm_log(val.hours,val.date);
				})
				document.getElementById("loghistory").appendChild(new_data);
			})
		}
	})