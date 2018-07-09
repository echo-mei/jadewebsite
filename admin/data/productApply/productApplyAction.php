<?php 
require_once '../../include.php';
$method = $_REQUEST['method'];
if($method=='listProductApply') {
    $start = $_GET['start'];
    $limit = $_GET['limit'];
    $sql = "select * from jadewebsite_product_apply where 1=1 ";
    if($_GET['productFrom']!="") { $sql .= " and productFrom = '{$_GET['productFrom']}'"; }
    if($_GET['name']!="") { $sql .= " and name like '%{$_GET['name']}%'"; }
    if($_GET['qqWechat']!="") { $sql .= " and qqWechat = '{$_GET['qqWechat']}'"; }
    if($_GET['phone']!="") { $sql .= " and phone = '{$_GET['phone']}'"; }
    if($_GET['email']!="") { $sql .= " and sex = '{$_GET['email']}'"; }
    if($_GET['unit']!="") { $sql .= " and unit = '{$_GET['unit']}'"; }
    if($_GET['unitAddress']!="") { $sql .= " and unitAddress = '{$_GET['unitAddress']}'"; }
    if($_GET['applyDate']!="") { $sql .= " and applyDate = '{$_GET['applyDate']}'"; }
    if($_GET['isRead']!="") { $sql .= " and isRead = '{$_GET['isRead']}'"; }
    if($_GET['systemId']!="") { $sql .= " and systemId = '{$_GET['systemId']}'"; }
    $sql .= " order by applyDate desc";
    $count = getResultNum($sql);
    $applys = fetchAll($sql." limit {$start},{$limit}");
    /* echo $sql; */
    echo json_encode([total=>$count, rows=>$applys]);
}elseif($method=='setRead') {
    $id = $_POST['id'];
    update("jadewebsite_product_apply", [isRead=>1], "id = {$id}");
    $status = "success";
    echo json_encode([status=>$status]);
}elseif($method=='addProductApply') {
    date_default_timezone_set("PRC");
    $system = fetchOne("select * from jadewebsite_system where systemName = '{$_POST['systemName']}'");
    $data = [
        productFrom => $_POST['productFrom'],
        systemId => $system['id'],
        name => $_POST['name'],
        qqWechat => $_POST['qqWechat'],
        unit => $_POST['unit'],
        unitAddress => $_POST['unitAddress'],
        phone => $_POST['phone'],
        email => $_POST['email'],
        applyDate => date("Y-m-d H:i:sa"),
        isRead => 0
    ];
    insert("jadewebsite_product_apply", $data);
    echo json_encode([success=>true]);
}
?>