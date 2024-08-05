<?php
session_start();
?>
<?php
include('../includes/config.php');
if(!isset($_SESSION['userMode']) && $_SESSION['userMode']!="admin" ){
$myfun->redirect("../index.php");
}
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Dashboard - Rajarshi Gurukul</title>
<?php include '../includes/headfiles.php'; ;?>
</head>

<body>

<?php
include_once('../includes/header.php');
?>
<div class="container">

        <div class="col-md-3">
			<?php
			include_once('principalmenu.php');
			?>
         </div>
        
        <div class="col-md-9 container-fluid" >
        <?php
                $sqll = "select * from tbl_order order by orderedDate DESC";
                $result = mysqli_query($con, $sqll);
                $num_rows = mysqli_num_rows($result);
            ?>
            <button class="btn btn-primary btn-md" type="button">Requisition Record <span class="badge"><?php echo $num_rows;?></span></button>
                <table class="table table-striped table-responsive">
                
                
                <?php
                if($num_rows<1){
                    ?><h3><span class = "label label-primary">No any records found!</span></h3><?php
                }
                else{
                    ?><tr><th>Date</th><th>Requested By</th><th>Requested Items</th><th>Status</th></tr><?php
                }
                if(! $result )
                    {
                      die('No records found: ' . mysqli_error());
                    }
                    while($row = mysqli_fetch_array($result))
                    {
                    ?>
                    <tr><td><?php echo $row[1];?></td><td><?php echo $row[2];?></td><td><?php echo $row[3]."<br>".$row[4]."<br>".$row[5]."<br>".$row[6]."<br>".$row[7];?></td><td><?php if($row[12]==-1){echo "Disapproved";} if($row[12]==1){echo "Forwarded to Store" ;} if($row[12]==2){ echo "Accepted and dispatched";} if($row[12]==0){ echo "<strong><p style='color:blue'>New Request!</p></strong>";} ?></td></tr>
                    <?php   
                    }
                    ?>
                
            </table>
        </div>
        
        
       

</div>

<script src="js/jquery-2.1.3.min.js"></script>
<script src="js/bootstrap.min.js"></script>
</body>
</html>
