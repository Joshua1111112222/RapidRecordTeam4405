<?php
$name = $_GET["name"];

require_once 'access.php';

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Prepare an SQL statement with a WHERE clause
$sql = "SELECT * FROM users WHERE name='${name}'";
//echo $sql;
$stmt = $conn->prepare($sql);

// Check if prepare() failed
if (!$stmt) {
    die("Prepare failed: " . $conn->error);
}

$stmt->execute();

$result = $stmt->get_result();

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
	echo $row["authority"];
    //echo "ID: "   . $row["id"]   . "<br>";
    //echo "Name: " . $row["name"] . "<br>";
    //echo "Data: " . $row["data"] . "<br>";
    // ... other fields as needed
} else {
    echo "FAILURE";
}

$stmt->close();
$conn->close();
?>
