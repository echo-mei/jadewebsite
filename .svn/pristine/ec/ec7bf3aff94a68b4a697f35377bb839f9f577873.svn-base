<?php
require_once '../include.php';
$method = $_REQUEST['method'];
if($method=="login") {
    $username = $_POST['username'];
    $password = md5($_POST['password']);
    $verify = $_POST['verify'];
    $session_verify = $_SESSION['verify'];
    if($verify==$session_verify) {
        $sql = "select 
                    ja.id as id,
                    ja.username as username,
                    ja.password as password,
                    ja.roleId as roleId,
                    jr.roleName as roleName,
                    jr.defaultMenuId as defaultMenuId
                    from jadewebsite_admin ja,jadewebsite_role jr 
                    where ja.username = '{$username}' and ja.roleId = jr.id";
        $row = fetchOne($sql);
        if($row) {
            if($row['password']!=$password) {
                $property = "password";
                $message = "密码错误";
                $status = "fail";
            }else {
                $message = "登陆成功";
                $status = "success";
                $defaultMenuId = $row['defaultMenuId'];
                $_SESSION['adminUsername'] = $row['username'];
                $_SESSION['adminId'] = $row['id'];
                date_default_timezone_set("PRC");
                insert("jadewebsite_login_log", [ip=>getIp(),loginTime=>date("Y-m-d h:i:sa"),adminId=>$row['id']]);
            }
        }else {
            $property = "username";
            $message = "用户名不存在";
            $status = "fail";
        }
    }else {
        $property = "verify";
        $message = "验证码错误";
        $status = "fail";
    }
    echo json_encode([status=>$status, message=>$message, property=>$property, defaultMenuId=>$defaultMenuId]);
}else if($method=="logout") {
    $_SESSION = array();
    session_destroy();
    header("location:../login.php");
}
?>