<?php
require_once '../../admin/include.php';
$method = $_REQUEST['method'];
if($method=='addAdvice'){
    date_default_timezone_set("PRC");
    $data = [
        advice => $_POST['advice'],
        name => $_POST['name'],
        phone => $_POST['phone'],
        company => $_POST['company'],
        commitdate => date("Y-m-d H:i:sa"),
        
    ];
    insert("dbhomework_advice", $data);
    echo json_encode([success=>true]);
}
elseif($method=='addComplaint'){
    date_default_timezone_set("PRC");
    $data = [
        complaint => $_POST['complaint'],
        name => $_POST['name'],
        phone => $_POST['phone'],
        company => $_POST['company'],
        commitdate => date("Y-m-d H:i:sa"),
        
    ];
    insert("dbhomework_complaint", $data);
    echo json_encode([success=>true]);
}
elseif($method=='addMeeting'){
    date_default_timezone_set("PRC");
    $data = [
        // complaint => $_POST['complaint'],
        name => $_POST['name'],
        phone => $_POST['phone'],
        // company => $_POST['company'],
        commitdate => date("Y-m-d H:i:sa"),
        
    ];
    insert("dbhomework_meeting", $data);
    echo json_encode([success=>true]);
}
?>