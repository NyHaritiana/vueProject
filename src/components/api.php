<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "vteach_db";


$conn = new mysqli($servername, $username, $password, $dbname);

header("Access-Control-Allow-Origin: *");
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
      

$sql = "SELECT * FROM enseignant";
$result = $conn->query($sql);

$peoples;

if ($result->num_rows > 0) {
    
    while($row = $result->fetch_assoc()) {
        $peoples[] = $row;
    }
    
}
   
    header("Content-Type: application/json");
    header("Content-Type: application/json");
    echo json_encode($peoples);


$conn->close();

die();
?>
