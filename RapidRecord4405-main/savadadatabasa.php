<?php
require_once 'access.php';

echo "<html>";
echo "<body>";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Prepare an SQL statement with a WHERE clause
$sql = "SELECT * FROM users";
$stmt = $conn->prepare($sql);

// Check if prepare() failed
if (!$stmt) {
    die("Prepare failed: " . $conn->error);
}

$stmt->execute();

$result = $stmt->get_result();

echo <<<EOL
<script>
        function tableToCSV() {

            // Variable to store the final csv data
            let csv_data = [];

            // Get each row data
            let rows = document.getElementsByTagName('tr');
            for (let i = 0; i < rows.length; i++) {

                // Get each column data
                let cols = rows[i].querySelectorAll('td,th');

                // Stores each csv row data
                let csvrow = [];
                for (let j = 0; j < cols.length; j++) {

                    // Get the text data of each cell
                    // of a row and push it to csvrow
                    csvrow.push(cols[j].innerHTML);
                }

                // Combine each column value with comma
                csv_data.push(csvrow.join(","));
            }

            // Combine each row data with new line character
            csv_data = csv_data.join('\\n');

            // Call this function to download csv file  
            downloadCSVFile(csv_data);

        }

        function downloadCSVFile(csv_data) {

            // Create CSV file object and feed
            // our csv_data into it
            CSVFile = new Blob([csv_data], {
                type: "text/csv"
            });

            // Create to temporary link to initiate
            // download process
            let temp_link = document.createElement('a');

            // Download csv file
            temp_link.download = "rapidrecord_users.csv";
            let url = window.URL.createObjectURL(CSVFile);
            temp_link.href = url;

            // This link should not be displayed
            temp_link.style.display = "none";
            document.body.appendChild(temp_link);

            // Automatically click the link to
            // trigger download
            temp_link.click();
            document.body.removeChild(temp_link);
        }
</script>

EOL;
echo "<table>";
echo "<style>@import url('https://fonts.googleapis.com/css2?family=Carlito:ital,wght@0,400;0,700;1,400;1,700&family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=Kode+Mono:wght@400..700&family=Open+Sans:ital,wght@0,300;1,300&display=swap');</style>";
echo "<style>#frst {background-color: rgb(200,200,200); }</style><tr id='frst'><td>ID</td><td>NAME</td><td>ACCESS_KEY</td><td>DATA</td><td>AUTHORITY</td><td>HOURS</td>";
echo "<style>td { border: 1px solid black; padding: 10px; font-family:'DM Mono';} table { border-collapse: collapse; }</style>";

$num = 0;

while ($row = mysqli_fetch_assoc($result)) {

    $information = json_decode($row["data"],true);

    $total_hours = 0;

    for ($i = 0; $i < count($information); $i++) {
        $total_hours += intval($information[$i]["hours"]);
    }
    
	echo "<tr id='numero$num'><td id='num$num'>" . $row["id"] . "</td><td>" . $row["name"] . "</td><td>" . $row["access_key"] . "</td><td>" . $row["data"] . "</td><td>" . $row["authority"] . "</td><td>" . $total_hours . "</td></tr>";
	if ($row["authority"] != 0) {
		echo "<style>#numero$num td { background-color:rgb(100,255,100); }</style>";
	}
	$num++;
    //echo $row["data"];
    // ... other fields as needed
}

echo "</table>";
echo "<br><br><p>Close this popup to finish process.</p><br>";
echo <<<EOL
<script>
tableToCSV();
</script>
EOL;
echo "</body>";
echo "</html>";

$stmt->close();
$conn->close();
?>
