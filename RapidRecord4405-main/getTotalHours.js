function getTotalHours(u_fullname,u_callback) {
	fetch(`getData.php?name=${u_fullname}&num=` + Math.random())
		.then(response => response.text())
		.then((txt) => {
			let data = JSON.parse(txt);
			let tHours = 0;
			data.forEach((val) => {
				if (val.hours != 0 && val.hours != "0") {
					tHours += Number(val.hours); // OWEN: I added Number() for data fallback, just in case the data happens to be a string or something.
				}
			})
			u_callback(tHours);
		})
}
