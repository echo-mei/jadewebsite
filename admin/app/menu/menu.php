<div class="tpl-left-nav tpl-left-nav-hover">

    <div class="tpl-left-nav-list">
        <ul class="tpl-left-nav-menu">
            <?php 
            foreach($menus as $row) {
            ?>
            <li class="tpl-left-nav-item">
            	<?php 
            	if(count($row['children'])>0) {
                    $active = false;
                    foreach($row['children'] as $children) {
                        if($children['id']==$menuId) {$active = true;}
                    }
                }
                ?>
            	<a href="javascript:;" class="nav-link tpl-left-nav-link-list <?php if($active) {echo "active"; } ?>">
            		<i class="am-icon-table"></i>
                    <span><?php echo $row['text']; ?><span class="coding"></span></span>
                    <!-- 列表打开状态的i标签添加 tpl-left-nav-more-ico-rotate 图表即90°旋转  -->
                    <i class="am-icon-angle-right tpl-left-nav-more-ico am-fr am-margin-right <?php if($active) {echo "tpl-left-nav-more-ico-rotate"; } ?>"></i>
                </a>
                <?php 
                if(count($row['children'])>0) {
                ?>
                <ul class="tpl-left-nav-sub-menu" <?php if($active) {echo "style='display:block;'"; } ?>>
                	<li>
                	<?php 
                    foreach($row['children'] as $children) {
                    ?>
                    <!-- 打开状态 a 标签添加 active 即可   -->
                    <a href="index.php?menu=<?php echo $children['id']; ?>" class="<?php if($children['id']==$menuId){echo "active";} ?>">
                        <i class="am-icon-angle-right"></i>
                        <span><?php echo $children['text']; ?><span class="coding"></span></span>
                    </a>
                	<?php 
                    }
                    ?>
                	</li>
                </ul>
                <?php 
                }
                ?>
            </li>
            <?php 
            }
            ?>
        </ul>
    </div>
</div>
<script src="js/menu.js"></script>