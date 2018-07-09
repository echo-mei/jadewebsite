<div class="tpl-content-wrapper">

    <ol class="am-breadcrumb">
        <li><a href="#" class="am-icon-home">首页</a></li>
        <li><a href="#">用户中心</a></li>
        <li class="am-active">登陆日志</li>
    </ol>
    <div class="tpl-portlet-components">
        <div class="portlet-title">
            <div class="caption font-green bold">
                <span class="am-icon-code"></span> 登陆日志信息
            </div>
        </div>
        <div class="tpl-block">
            <div class="am-g">
                <div class="am-u-sm-12 am-u-md-6">
                    <div class="am-btn-toolbar">
                        <div class="am-btn-group am-btn-group-xs">&nbsp;
                        </div>
                    </div>
                </div>
                <div class="am-u-sm-12 am-u-md-3">
                    <div class="am-form-group">
                        <select id="searcher" data-am-selected="{btnSize: 'sm'}">
                            <option value=" ">=请选择查询条件=</option>
                            <option value="adminName">登陆人</option>
                        </select>
                    </div>
                </div>
                <div class="am-u-sm-12 am-u-md-3">
                    <div class="am-input-group am-input-group-sm">
                        <input id="searcher-input" type="text" class="am-form-field">
                        <span class="am-input-group-btn">
        <button id="searcher-btn" class="am-btn  am-btn-default am-btn-success tpl-am-btn-success am-icon-search"
                type="button"></button>
      </span>
                    </div>
                </div>
            </div>
            <div class="am-g">
                <div class="am-u-sm-12">
                    <form class="am-form" id="loginLogGrid">
                        <table class="am-table am-table-striped am-table-hover table-main">
                            <thead>
                            <tr>
                                <th class="table-check"><input type="checkbox" class="tpl-table-fz-check"></th>
                                <th>ID</th>
                                <th>登陆IP</th>
                                <th>登陆时间</th>
                                <th>登陆人</th>
                            </tr>
                            </thead>
                            <tbody>
                            
                            </tbody>
                        </table>
                        <div class="am-cf">
                            <div class="am-fr">
                                <ul class="am-pagination tpl-pagination">
                                    
                                </ul>
                            </div>
                        </div>

                    </form>
                </div>

            </div>
        </div>

        <div class="tpl-alert"></div>
    </div>

</div>
<script src="js/loginLog/loginLog.js"></script>