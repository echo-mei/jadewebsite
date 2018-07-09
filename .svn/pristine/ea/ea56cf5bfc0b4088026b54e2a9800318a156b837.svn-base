<?php 
$sql = "select * from jadewebsite_system";
$systems = fetchAll($sql);
?>
<div class="tpl-content-wrapper">
    <ol class="am-breadcrumb">
        <li><a href="#" class="am-icon-home">首页</a></li>
        <li><a href="#">软件服务</a></li>
        <li class="am-active">产品试用申请表</li>
    </ol>
    <div class="tpl-portlet-components">
        <div class="am-tabs" data-am-tabs="{noSwipe: 1}" id="product-system">
            <ul class="am-tabs-nav am-nav am-nav-tabs">
            	<?php 
            	foreach($systems as $system) {
            	?>
            	<li><a href="javascript: void(0)" class="<?php if($system['systemName']=="精益作业通云服务") {echo "am-active";} ?>"><?php echo $system['systemName']; ?></a></li>
            	<?php 
            	}
            	?>
            </ul>

            <div class="am-tabs-bd">
            	<?php 
            	foreach($systems as $system) {
            	?>
            	<div class="am-tab-panel">
            	<?php 
            	$systemId = $system['id'];
            	require 'app/main/productApply/productSystem.php'; 
            	?>
            	</div>
            	<?php 
            	}
            	?>
                <!-- <div class="am-tab-panel am-active">
                </div>
                <div class="am-tab-panel">
                </div>
                <div class="am-tab-panel">
                </div>
                <div class="am-tab-panel">
                </div> -->
            </div>
        </div>

        <div class="tpl-alert"></div>
    </div>


</div>