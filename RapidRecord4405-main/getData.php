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
$sql = "SELECT * FROM users WHERE name = '$name'";
$stmt = $conn->prepare($sql);

// Check if prepare() failed
if (!$stmt) {
    die("Prepare failed: " . $conn->error);
}

$stmt->execute();

$result = $stmt->get_result();

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    echo $row["data"];
    // ... other fields as needed
} else {
    echo "NO_RESULTS";
}

$stmt->close();
$conn->close();
?>
