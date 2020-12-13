<?php

//needs a requrie statement to the database
$servername = "localhost";
$username = "username";
$password = "password";

// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";

$sql = "SELECT * FROM Players";
$result = mysqli_query($dbc, $sql) or die("Bad Query: $sql");

while($row = mysqli_fetch_assoc($result)) {

    //print_r($row); 
    echo"{$row['Team_Name']}<br>"; 
}
//may require a fetch_all to be looped through 



?>