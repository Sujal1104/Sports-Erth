<?php
 
 $id= $_POST['id'];
 $username= $_POST['username'];
 $password= $_POST['password'];

 $conn= new mysqli('localhost','root','test');
  
 if($conn->connect_error)
 {
    die('Connewction Faild  :' .$conn->connect_error);
 }
 else{
    $stmt= $conn->prepare("inser into refistation(username ,id ,password ))
      values(?,?,?)");
 
      $stmt->bind_param("sis", $username, $id, $password) ; 
      $stmt->execute();
        echo "register ho gaya hai "; 
        $stmt->close();
        $conn->close(); 
     }


 


?>