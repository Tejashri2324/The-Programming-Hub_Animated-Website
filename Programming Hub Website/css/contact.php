<?php
  if(isset($_POST['Submit'])){
      $fname=$_POST['fname'];
      $lname=$_POST['lname'];
      $Email=$_POST['Email'];
      $country=$_POST['country'];
      $subject=$_POST['subject'];

      $to='agaletejashri2324@gmail.com';
      $message='Form Submitted Succeessfully';
      $subject="First Name:" .$fname."\n". "Last Name:" .$Email."\n". "There Feedback:"."\n\n".$subject;
      $headers="From: ".$Email;
      if(mail($to,$message,$subject,$headers)){
          echo"<h1>Sent Succesfully!Thank You For Contacting The Programming Hub"." ".$fname.", We Will Contact You Shortly!</h1>";
      }
      else{
          echo"Ooops..!!Something Went Wrong!";
      }
  }
  ?>