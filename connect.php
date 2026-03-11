<?php
$server="localhost";
$user="root";
$db_pass="";
$db_name="jawabudb";
$conn="";
try{
 $conn =new mysqli($server,$user,$db_pass,$db_name);   
}
catch(mysqli_sql_exception){
    echo"Could not connect";

}
    if($conn){
        echo"You are connected!";
    }
    if($_SERVER["REQUEST_METHOD"] == "POST"){
        //getting data from the html form
    $applicant=$_POST['name'];
    $phoneNumber=$_POST['phone'];
    $email=$_POST['email'];
    $subject=$_POST['subject'];
    $question=$_POST['question'];
    
    $sql="INSERT INTO applicant(name,phone_number,email,subject,question)VALUES('$applicant','$phoneNumber','$email','$subject','$question')";
    if($conn->query($sql)===TRUE){
        echo"Your Application has been recieved,we will contact you shortly";
    }  
    else{
        echo"An error occured please try again later";
    }
    $conn->close();




    }
    


?>