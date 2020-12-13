<?php

//needs a requrie staement to the database

$sql = "SELECT * FROM Players";
$result = mysqli_query($dbc, $sql) or die("Bad Query: $sql");

while($row = mysqli_fetch_assoc($result)) {

    //print_r($row); 
    echo"{$row['Team_Name']}<br>"; 
}
//may require a fetch_all to be looped through 



?>