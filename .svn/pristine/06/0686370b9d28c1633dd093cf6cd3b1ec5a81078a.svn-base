<div class="tpl-content-wrapper">

            <ol class="am-breadcrumb">
                <li><a href="#" class="am-icon-home">首页</a></li>
                <li><a href="#">用户中心</a></li>
                <li class="am-active">账户信息</li>
            </ol>
            <div class="tpl-portlet-components">
                <div class="portlet-title">
                    <div class="caption font-green bold">
                        <span class="am-icon-code"></span> 账户信息
                    </div>
                    <div class="tpl-portlet-input tpl-fz-ml">
                        <button type="button" class="am-btn am-btn-primary" id="account-modify">修改</button>
                    </div>


                </div>
                <div class="tpl-block ">

                    <div class="am-g tpl-amazeui-form">
                        <div class="am-u-sm-12 am-u-md-9">
                            <form class="am-form am-form-horizontal" id="accountForm" action="data/accountSetting/accountSettingAction.php?method=updateUser" method="post">
                            	<input type="hidden" name="id" value="<?php echo $_SESSION['adminId']; ?>">
                                <div class="am-form-group">
                                    <label for="user-name" class="am-u-sm-3 am-form-label">账户名</label>
                                    <div class="am-u-sm-9">
                                        <input type="text" id="username" name="username" value="<?php echo $_SESSION['adminUsername']; ?>" class="readonly" disabled maxlength="20">
                                        <span class="lg-am-error"></span>
                                    </div>
                                </div>

                                <div class="am-form-group am-form-hide">
                                    <label for="user-pw-old" class="am-u-sm-3 am-form-label">原密码</label>
                                    <div class="am-u-sm-9">
                                        <input type="password" id="oldPassword" name="oldPassword" placeholder="输入密码原密码" maxlength="20">
                                        <span class="lg-am-error"></span>
                                    </div>
                                </div>
                                <div class="am-form-group am-form-hide">
                                    <label for="user-pw-new1" class="am-u-sm-3 am-form-label">输入新密码</label>
                                    <div class="am-u-sm-9">
                                        <input type="password" id="newPassword" name="newPassword" placeholder="输入新密码" maxlength="20">
                                        <span class="lg-am-error"></span>
                                    </div>
                                </div>
                                <div class="am-form-group am-form-hide">
                                    <label for="user-pw-new2" class="am-u-sm-3 am-form-label">再次输入新密码</label>
                                    <div class="am-u-sm-9">
                                        <input type="password" id="newPasswordCheck" name="newPasswordCheck" placeholder="请再次输入新密码" maxlength="20">
                                        <span class="lg-am-error"></span>
                                    </div>
                                </div>

                                <div class="am-form-group am-form-hide">
                                    <div class="am-u-sm-9 am-u-sm-push-3">
                                        <button type="button" class="am-btn am-btn-primary" id="saveAccountInfo">保存修改</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>










        </div>
        <script src="js/accountSetting/accountSetting.js"></script>