

let blur_div = document.createElement("div");
blur_div.className = "blur-div";

let current_popup = null;

document.body.appendChild(blur_div);

let create_alert = {
	withTitle: (title) => {
		return {
			withBody: (bodytxt) => {
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
					button.textContent = "Got it";

					button.addEventListener("click",() => {
						current_popup.remove();
						blur_div.style.display = "none";
						current_popup = null;
					})

					alert_div.appendChild(title_text);
					alert_div.appendChild(body_text);
					alert_div.appendChild(button);

					document.body.appendChild(alert_div);

					current_popup = alert_div;
				}
			}
		}
	}
}

window.alert = (s) => {
	create_alert.withTitle("Note:").withBody(s);
}