<?php
	$psw = "(no password)";
	echo $_COOKIE["psw"];
	if (isset($_COOKIE["psw"])) {
		$psw = $_COOKIE["psw"];
		echo "CUE COOKIE\n";
	}
	if (!empty($_POST["psw"])) {
		$psw = $_POST["psw"];
		echo "CUE POST\n";
	}
	echo "Entered password:" . $psw . "\n";

	if ($psw == "password") {
		echo <<<EOL
		<html>
			<head>
				<meta name="apple-mobile-web-app-capable" content="yes">
				<meta name="apple-mobile-web-app-title" content="4405RapidRecord">
				<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
				<link rel="apple-touch-icon" href="logo_old.png">

				<script src="getTotalHours.js" defer></script>
				<link rel="manifest" href="manifest.json">
				<link rel="stylesheet" type="text/css" href="systemtools.css">
				<link rel="icon" type="image/x-icon" href="./images/favicon2.png">
				<meta name="viewport" content="width=device-width, initial-scale=1.0">
				<link rel="preconnect" href="https://fonts.googleapis.com">
				<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
				<link href="https://fonts.googleapis.com/css2?family=Kode+Mono:wght@400..700&display=swap" rel="stylesheet">
				<link rel="preconnect" href="https://fonts.googleapis.com">
				<link href="https://fonts.googleapis.com/css2?family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&display=swap" rel="stylesheet">
				<script src="systemtools.js?num=8" defer></script>
				<!-- 'ALERTS' PACKAGE -->
				<link rel="stylesheet" type="text/css" href="alerts.css?num=2">
				<script src="alerts.js" defer></script>
				<!-- END 'ALERTS' PACKAGE -->
			</head>
			<body>
				<div id="top-title">
					<h1 id="title">RapidRecord</h1>
				</div>
				<div id="main">
					<h3 id="welcome">Options & Tools</h3>
					<h1 id="name">System Tools</h1>
					<div id="log-hours-container">
						<p id="log-text">Using tools as ID: ?????</p>
					</div>
						<div id="buttons">
							<button class="hour-select" onclick="removelog()" id="LOGOUT">Erase Log</button>
							<button class="hour-select" onclick="removeuser()" id="history">Erase User</button>
							<button class="hour-select" onclick="addinstructor()">Add Instructor</button>
							<button class="hour-select" onclick="removeinstructor()">Erase Instructor</button>
							<button class="hour-select dangerous" onclick="clearhours()">Clear Hours</button>
							<button class="hour-select dangerous" onclick="cleardatabase()" id="database">Clear Database</button>
					</div>
				

				<div id="done" onclick="clickDone()">Back ></div>
			</body>
		</html>
EOL;
	} else {
		echo '403 ACCESS FORBIDDEN: NUH-UH, NO ACCESS HERE';
		header("Location: systemaccess.html");
		die();
	}
?>