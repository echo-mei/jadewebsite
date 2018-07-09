<?php
require_once '../../include.php';
$method = $_REQUEST['method'];
if($method=="updateUser") {
    $id = $_POST['id'];
    $username = $_POST['username'];
    $oldPassword = md5($_POST['oldPassword']);
    $newPassword = md5($_POST['newPassword']);
    $sql = "select * from jadewebsite_admin where id = '{$id}'";
    $row = fetchOne($sql);
    if($row) {
        if($row['password']!=$oldPassword) {
            $property = "oldPassword";
            $message = "密码错误";
            $status = "fail";
        }else {
            //$sql = "update jadewebsite_admin set username = {$username}, password = {$newPassword} where id = {$id}";
            update("jadewebsite_admin", [username=>$username, password=>$newPassword], "id = {$id}");
            $message = "修改成功";
            $status = "success";
        }
    }else {
        $property = "username";
        $message = "用户名不存在";
        $status = "fail";
    }
    echo json_encode([status=>$status, message=>$message, property=>$property]);
}
?>