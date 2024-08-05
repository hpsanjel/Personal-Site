<?php

$con = mysqli_connect($DB_HOST,$DB_USER, $DB_PASS, $DB_NAME) or exit('Sorry we cannot connect you right now');
$db = mysqli_select_db($con, "harisanj_rg_req") or exit(mysqli_error());
$DB_HOST="localhost:3306";
	$DB_USER="harisanj_hari";
	$DB_PASS="harisanj_hari_password";
	$DB_NAME="harisanj_rg_req";
	$site_url="http://harisanjel.com.np/rg";
        $myroot = "";
$KEY="RG Online Requisition Management System";
require_once($myroot."mydb.class.php");
require_once($myroot."mysecurity.class.php");
require_once($myroot."myfunctions.class.php");
$mydb=new mydb($DB_HOST,$DB_USER,$DB_PASS,$DB_NAME);
$mysec=new mysecurity();
$myfun=new myfunctions();
?>