<?php
require 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $surname = $_POST['surname'];
  $name = $_POST['name'];
  $middlename = $_POST['middlename'];
  $address = $_POST['address'];
  $contact = $_POST['contact']; 
  
  $stmt = $conn->prepare("INSERT INTO students (surname, name, middlename, address, contact_number) 
                          VALUES (?, ?, ?, ?, ?)");
  $stmt->bind_param("sssss", $surname, $name, $middlename, $address, $contact);

  if ($stmt->execute()) {
    echo "New student record created successfully!";
  } else {
    echo "Error: " . $stmt->error;
  }

  $stmt->close();
}

$conn->close();
?>
