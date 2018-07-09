<?php 
require_once '../../include.php';
$method = $_REQUEST['method'];
if($method=='listLoginLog') {
    $start = $_GET['start'];
    $limit = $_GET['limit'];
    $sql = "select 
                jll.id as id,
                jll.ip,
                jll.loginTime,
                jll.adminId,
                ja.username as adminName
            from jadewebsite_login_log jll,jadewebsite_admin ja where 1=1 and jll.adminId = ja.id";
    if($_GET['adminName']!="") { $sql .= " and ja.username like '%{$_GET['adminName']}%'"; }
    $count = getResultNum($sql);
    $applys = fetchAll($sql." limit {$start},{$limit}");
    echo json_encode([total=>$count, rows=>$applys]);
}
?>