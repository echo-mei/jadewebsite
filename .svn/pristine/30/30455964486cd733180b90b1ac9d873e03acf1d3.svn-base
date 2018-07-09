<?php
require_once '../../include.php';
$method = $_REQUEST['method'];
if($method=='listRecruitManage') {
    $start = $_GET['start'];
    $limit = $_GET['limit'];
    $sql = "select * from jadewebsite_recruit_manage where 1=1";
    if($_GET['positionName']!="") { $sql .= " and positionName like '%{$_GET['positionName']}%'"; }
    if($_GET['depart']!="") { $sql .= " and depart like '%{$_GET['depart']}%'"; }
    if($_GET['address']!="") { $sql .= " and address like '%{$_GET['address']}%'"; }
    $count = getResultNum($sql);
    $limit ? $sql.=" limit {$start},{$limit}" : '';
    $applys = fetchAll($sql);
    echo json_encode([total=>$count, rows=>$applys]);
}elseif($method=='updateRecruitManage') {
    date_default_timezone_set("PRC");
    $data = [
        positionName => $_POST['positionName'],
        depart => $_POST['depart'],
        number => $_POST['number'],
        address => $_POST['address'],
        positionRequire => $_POST['positionRequire'],
        positionAuditor => $_POST['positionAuditor']
    ];
    $where = "id = {$_POST['id']}";
    $rows = update("jadewebsite_recruit_manage", $data, $where);
    echo json_encode([success=>$rows==1]);
}elseif($method=='updateStatusRecruitManage') {
     date_default_timezone_set("PRC");
     $data = [
         status => $_POST['status']
     ];
     $where = "id = {$_POST['id']}";
     $rows = update("jadewebsite_recruit_manage", $data, $where);
     echo json_encode([success=>$rows==1]);
 }elseif($method=='removeRecruitManage') {
     $where = "id = {$_POST['id']}";
     $rows = delete("jadewebsite_recruit_manage", $where);
     echo json_encode([success=>$rows==1]);
 }elseif($method=='addRecruitManage') {
    date_default_timezone_set("PRC");
    $data = [
        publishDate => date_format(date_create(), "Y/m/d H:i:s"),
        positionName => $_POST['positionName'],
        depart => $_POST['depart'],
        number => $_POST['number'],
        address => $_POST['address'],
        status => 1,
        positionRequire => $_POST['positionRequire']
    ];
    $id = insert("jadewebsite_recruit_manage", $data);
    echo json_encode([id=>$id]);
}
?>