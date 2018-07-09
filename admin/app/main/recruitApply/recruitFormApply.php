<div class="tpl-block" id="recruitFormApply">
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
                    <option value="position">应聘岗位</option>
                    <option value="workDate">到岗日期</option>
                    <option value="deliverDate">申请日期</option>
                    <option value="name">姓名</option>
                    <option value="sex">性别</option>
                    <option value="education">学历</option>
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
            <form class="am-form" id="recruitGrid">
            <div class="table-wrap">
                <table class="am-table am-table-striped am-table-hover table-main">
                    <thead>
                    <tr>
                        <th class="table-check"><input type="checkbox" class="tpl-table-fz-check"></th>
                        <th width="40">ID</th>
                        <th width="80">申请来源</th>
                        <th width="120">申请日期</th>
                        <th width="120">应聘岗位</th>
                        <th width="150">到岗日期</th>
                        <th width="120">姓名</th>
                        <th width="50">性别</th>
                        <th width="120">手机</th>
                        <th width="150">毕业院校</th>
                        <th width="80">学历</th>
                        <th width="120">操作</th>
                    </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
            </div>
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

<script src="js/recruitApply/recruitFormApply.js"></script>
<script>
    buildGrid($('#recruitFormApply'));
</script>