let cookies = {
	get: (nm) => {
		let ck = document.cookie;
		let found_val = undefined;
		if (ck != "" && ck != undefined) {
			ck = ck.split("; ");
			ck.forEach((val) => {
				console.log("TESTING:" + val)
				let ckval = val.split("=");
				console.log(ckval[0]);
				if (ckval[0]==nm) {
					console.log("MATCH!")
					found_val = ckval[1];
				}
			})
			return found_val;
		} else {
			return found_val;
		}
	},
	set: (nm,val,exp="3600") => {
		document.cookie = `${nm}=${val}; path=/; max-age=${exp}`;
	},
	del: (nm) => {
		document.cookie = `${nm}=; path=/; max-age=0`;
	}
}