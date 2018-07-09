<?php
require_once 'include.php';
if($_SESSION['adminId']=="") {
    echo "<script>window.location = 'login.php';</script>";
}
function getChildren($rows, $row) {
    $result = [];
    foreach ($rows as $r) {
        if($r['parentId']==$row['id']) {
            array_push($result, $r);
        }
    }
    $row['children'] = $result;
    return $row;
};
$menuId = $_GET['menu'];
$sql = "select * from jadewebsite_menu where id in (select menuId from jadewebsite_role_power where roleId = (SELECT roleId FROM jadewebsite_admin WHERE id = {$_SESSION['adminId']}))";
$rows = fetchAll($sql);
$menus = [];
foreach ($rows as $row) {
    if($row['parentId']=="") {
        array_push($menus, getChildren($rows, $row));
    }
    if($menuId==$row['id']) {
        $menu = $row;
    }
}
?>
<!doctype html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>深圳市嘉德永丰开发科技股份有限公司</title>
    <meta http-equiv=Content-Type content="text/html;" />
    <meta content="软件开发，系统集成，云服务，应用软件开发，行业软件开发，软件资源外包，教学管理，企业移动管理，供应链质量管理，政府OA" name="keywords" />
    <meta name="description" content="中国领先的应用软件服务供应商，千万元级软件开发项目的领军人物，美国归来的管理专才和软件专家，十几年软件开发经验的项目经理和系统架构师，政府、医疗、教育、金融、航空、电信&广电、物流、零售、CRM、制造业等行业专家" />
    <meta content="版权所有:深圳市嘉德永丰开发科技股份有限公司" name="copyright" />
    <meta content="MSHTML 6.00.2900.3492" name="GENERATOR" />
    <meta http-equiv="X-UA-Compatible"content="IE=edge">
    <link rel="icon" href="assets/i/favicon.ico" type="image/x-icon" />
    <link rel="shortcut icon" href="assets/i/favicon.ico" type="image/x-icon" />
    <link rel="bookmark" href="assets/i/favicon.ico" type="image/x-icon" />
    <link rel="stylesheet" href="assets/css/amazeui.min.css" />
    <link rel="stylesheet" href="assets/css/admin.css">
    <link rel="stylesheet" href="assets/css/app.css">
    <script src="assets/js/jquery.min.js"></script>
    <script src="assets/js/amazeui.min.js"></script>
</head>

<body data-type="generalComponents">

    <div class="am-modal am-modal-alert" tabindex="-1" id="app-alert">
      <div class="am-modal-dialog">
        <div class="am-modal-hd font-green bold">
            <span class="title">提示</span>
            <a href="javascript: void(0)" class="am-close am-close-spin" data-am-modal-close="">×</a>
        </div>
        <hr>
        <div class="am-modal-bd">

        </div>
        <div class="am-modal-btn-wrap">
          <button type="button" class="am-btn am-btn-primary" data-am-modal-close>返回</button>
        </div>
      </div>
    </div>

    <div class="am-modal am-modal-confirm" tabindex="-1" id="app-confirm">
      <div class="am-modal-dialog">
        <div class="am-modal-hd font-green bold">
            <span class="title">提示</span>
            <a href="javascript: void(0)" class="am-close am-close-spin" data-am-modal-close="">×</a>
        </div>
        <hr>
        <div class="am-modal-bd">

        </div>
        <div class="am-modal-btn-wrap">
            <button type="button" class="am-btn am-btn-primary" data-am-modal-close>返回</button>
            <button type="button" class="am-btn am-btn-success" id="sure">确认</button>
        </div>
      </div>
    </div>

    <div class="am-modal am-modal-no-btn" tabindex="-1" id="app-modal">
        <div class="am-modal-dialog">
            <div class="am-modal-hd caption font-green bold">
            	<span class="title"></span>
                <a href="javascript: void(0)" class="am-close am-close-spin" data-am-modal-close>&times;</a>
            </div>
            <hr>
            <div class="am-modal-bd">
                <div class="tpl-amazeui-form am-form am-form-horizontal clear">
                
                </div>
                <div class="am-modal-btn-wrap">
                        <button type="button" class="am-btn am-btn-primary" data-am-modal-close>返回</button>
                </div>
            </div>
        </div>
    </div>

    <div class="am-modal am-modal-prompt" tabindex="-1" id="app-prompt">
      <div class="am-modal-dialog">
        <div class="am-modal-hd caption font-green bold">
            <span class="title"></span>
            <a href="javascript: void(0)" class="am-close am-close-spin" data-am-modal-close>&times;</a>
        </div>
        <hr>
        <div class="am-modal-bd">
            <div class="tpl-amazeui-form am-form am-form-horizontal clear">

            </div>
            <div class="am-modal-btn-wrap">
                <button type="button" class="am-btn am-btn-primary" data-am-modal-close>返回</button>
                <button type="button" class="am-btn am-btn-success" id="sure">确认</button>
            </div>
        </div>
      </div>
    </div>

    <?php 
    require_once 'app/head/head.php';
    ?>

    <div class="tpl-page-container tpl-page-header-fixed">
        <?php 
        require_once 'app/menu/menu.php';
        ?>
        
        <?php 
        if($menu) {
            require_once 'app/main/'.$menu['href'].'.php';
        }else {
            require_once 'app/main/main.php';
        }
        ?>
    </div>
    
    <script src="assets/js/app.js"></script>
</body>

</html>