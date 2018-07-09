/**
 * Created by Administrator on 2017/11/15.
 */

$(function() {

    $('#addRecruitManage').click(function() {
        $('#app-prompt .am-modal-hd .title').html('新增招聘申请');
        $('#app-prompt .am-modal-bd .tpl-amazeui-form').empty();
        var html =
            '<form id="addRecruitManageForm">'+
            '<div class="am-form-group"><label class="am-u-sm-4 am-form-label">职位名称</label><div class="am-u-sm-8"><input type="text" name="positionName"></div></div>'+
            '<div class="am-form-group"><label class="am-u-sm-4 am-form-label">部门</label><div class="am-u-sm-8"><input type="text" name="depart"></div></div>'+
            '<div class="am-form-group"><label class="am-u-sm-4 am-form-label">招聘人数</label><div class="am-u-sm-8"><input type="text" name="number"></div></div>'+
            '<div class="am-form-group"><label class="am-u-sm-4 am-form-label">地点</label><div class="am-u-sm-8"><input type="text" name="address"></div></div>'+
            '<div class="am-form-group"><label class="am-u-sm-4 am-form-label">职位审核人</label><div class="am-u-sm-8"><input type="text" name="positionAuditor"></div></div>'+
            '<div class="am-form-group am-from-group-100"><label class="am-u-sm-2 am-form-label">职责及要求</label><div class="am-u-sm-10 am-u-sm-10-edit"><textarea name="positionRequire"></textarea></div></div>'+
            '</form>';
        $('#app-prompt .am-modal-bd .tpl-amazeui-form').append(html);
        $('#app-prompt').modal({closeViaDimmer:false});
        $('#app-prompt').find(".am-modal-btn-wrap button:first").hide();
        $('#app-prompt #sure').text("确认并发布");
        $('#app-prompt #sure').unbind('click').click(function() {
            $.ajax({
                url: 'data/recruitManage/recruitManageAction.php?method=addRecruitManage',
                type: 'post',
                data: $('#app-prompt #addRecruitManageForm').serializeArray(),
                dataType: 'json',
                success: function(resp) {
                    if(resp.id) {
                        $('#app-prompt').modal('close');
                        var currentPage = Number($('#recruitManageGrid .am-pagination li.am-active a').html());
                        grid((currentPage-1)*limit, limit);
                    }
                }
            });
        });
    });

    var limit = 10;
    grid(0, limit);
    $('#searcher').change(function() {
        $('#searcher-input').attr('name', $(this).val());
    });
    $('#searcher-btn').click(function() {
        var currentPage = Number($('#recruitManageGrid .am-pagination li.am-active a').html());
        grid((currentPage-1)*limit, limit);
    });
    function showDetail(v) {
        $('#app-modal .am-modal-hd .title').html('招聘申请详情');
        $('#app-modal .am-modal-bd .tpl-amazeui-form').empty();
        var html =
            '<div class="am-form-group"><label class="am-u-sm-4 am-form-label">职位名称</label><div class="am-u-sm-8">'+v.positionName+'</div></div>'+
            '<div class="am-form-group"><label class="am-u-sm-4 am-form-label">部门</label><div class="am-u-sm-8">'+v.depart+'</div></div>'+
            '<div class="am-form-group"><label class="am-u-sm-4 am-form-label">招聘人数</label><div class="am-u-sm-8">'+v.number+'</div></div>'+
            '<div class="am-form-group"><label class="am-u-sm-4 am-form-label">地点</label><div class="am-u-sm-8">'+v.address+'</div></div>'+
            '<div class="am-form-group"><label class="am-u-sm-4 am-form-label">职位审核人</label><div class="am-u-sm-8">'+v.positionAuditor+'</div></div>'+
            '<div class="am-form-group am-from-group-100"><label class="am-u-sm-2 am-form-label">职责及要求</label><div class="am-u-sm-10 am-u-sm-10-edit">'+v.positionRequire.replace(/\n/g,"<br/>")+'</div></div>';
        $('#app-modal .am-modal-bd .tpl-amazeui-form').append(html);
        $('#app-modal').modal({closeViaDimmer:false});
    }
    function editDetail(v) {
        $('#app-prompt .am-modal-hd .title').html('修改招聘申请');
        $('#app-prompt .am-modal-bd .tpl-amazeui-form').empty();
        var html =
            '<form id="updateRecruitManageForm">'+
            '<input type="hidden" name="id" value="'+v.id+'">'+
            '<div class="am-form-group"><label class="am-u-sm-4 am-form-label">职位名称</label><div class="am-u-sm-8"><input type="text" name="positionName" value="'+v.positionName+'"></div></div>'+
            '<div class="am-form-group"><label class="am-u-sm-4 am-form-label">部门</label><div class="am-u-sm-8"><input type="text" name="depart" value="'+v.depart+'"></div></div>'+
            '<div class="am-form-group"><label class="am-u-sm-4 am-form-label">招聘人数</label><div class="am-u-sm-8"><input type="text" name="number" value="'+v.number+'"></div></div>'+
            '<div class="am-form-group"><label class="am-u-sm-4 am-form-label">地点</label><div class="am-u-sm-8"><input type="text" name="address" value="'+v.address+'"></div></div>'+
            '<div class="am-form-group"><label class="am-u-sm-4 am-form-label">职位审核人</label><div class="am-u-sm-8"><input type="text" name="positionAuditor" value="'+v.positionAuditor+'"></div></div>'+
            '<div class="am-form-group am-from-group-100"><label class="am-u-sm-2 am-form-label">职责及要求</label><div class="am-u-sm-10 am-u-sm-10-edit"><textarea name="positionRequire">'+v.positionRequire+'</textarea></div></div>'+
            '</form>';
        $('#app-prompt .am-modal-bd .tpl-amazeui-form').append(html);
        $('#app-prompt').modal({closeViaDimmer:false});
        $('#app-prompt #sure').unbind('click').click(function() {
            $.ajax({
                url: 'data/recruitManage/recruitManageAction.php?method=updateRecruitManage',
                type: 'post',
                data: $('#app-prompt #updateRecruitManageForm').serializeArray(),
                dataType: 'json',
                success: function(resp) {
                    if(resp.success) {
                        $('#app-prompt').modal('close');
                        var currentPage = Number($('#recruitManageGrid .am-pagination li.am-active a').html());
                        grid((currentPage-1)*limit, limit);
                    }
                }
            });
        });
    }
    function changeStatus(v,$obj) {
        $('#app-confirm .am-modal-bd').html(v.status == "0"?'确认停止招聘？':'确认恢复招聘？');
        $('#app-confirm').modal({closeViaDimmer:false});
        $('#app-confirm #sure').unbind('click').click(function() {
            $('#app-confirm').modal('close');
            $.ajax({
                url: 'data/recruitManage/recruitManageAction.php?method=updateStatusRecruitManage',
                type: 'post',
                data: v,
                dataType: 'json',
                success: function (resp) {
                    if(resp.success) {
                        if (v.status == "1"){
                            $obj.closest("tr").removeClass("tr-invaild");
                            $obj.parent("td").append('<button type="button" class="recruiting am-btn am-btn-default am-btn-xs am-text-secondary">' +
                                '<span class="am-icon-play"></span> 正在招聘</button>');
                            $obj.remove();

                        }else {
                            $obj.closest("tr").addClass("tr-invaild");
                            $obj.parent("td").append('<button type="button" class="recruited am-btn am-btn-default am-btn-xs am-text-secondary">' +
                                '<span class="am-icon-pause"></span> 停止招聘</button>');
                            $obj.remove();
                        }
                        var result = $('#app-confirm .am-modal-bd').text();
                        $('#app-alert .am-modal-bd').html(result.substr(2,4)+'成功！');
                        $('#app-alert').modal();
                        var currentPage = Number($('#recruitManageGrid .am-pagination li.am-active a').html());
                        grid((currentPage-1)*limit, limit);
                    }
                }
            });
        });

    }
    function removeDetail(v) {
        $('#app-confirm .am-modal-bd').html('确认删除？');
        $('#app-confirm').modal();
        $('#app-confirm #sure').unbind('click').click(function() {
            $('#app-confirm').modal('close');
            $.ajax({
                url: 'data/recruitManage/recruitManageAction.php?method=removeRecruitManage',
                type: 'post',
                data: v,
                dataType: 'json',
                success: function(resp) {
                    if(resp.success) {
                        $('#app-alert .am-modal-bd').html('删除成功');
                        $('#app-alert').modal();
                        var currentPage = Number($('#recruitManageGrid .am-pagination li.am-active a').html());
                        grid((currentPage-1)*limit, limit);
                    }
                }
            });
        });
    }
    /*列表**************************************/
    function events() {
        $('#recruitManageGrid .am-pagination a').click(function(e) {
            if(!isNaN($(this).html())) {
                grid((Number($(this).html())-1)*limit, limit);
            }
        });
        $('#recruitManageGrid .am-pagination .prevPage').click(function(e) {
            var currentPage = Number($('#recruitManageGrid .am-pagination li.am-active a').html());
            if(currentPage>1) {
                grid((currentPage-2)*limit, limit);
            }
        });
        $('#recruitManageGrid .am-pagination .nextPage').click(function(e) {
            var currentPage = Number($('#recruitManageGrid .am-pagination li.am-active a').html());
            var pages = Number($('#recruitManageGrid .am-pagination li:last-child').prev('li').find('a').html());
            if(currentPage<pages) {
                grid(currentPage*limit, limit);
            }
        });
    }
    function grid(start, limit) {
        var data = {
            start: start,
            limit: limit
        };
        if($('#searcher-input').attr('name')&&$('#searcher-input').val()!=undefined) data[$('#searcher-input').attr('name')] = $('#searcher-input').val();
        $.ajax({
            url: 'data/recruitManage/recruitManageAction.php?method=listRecruitManage',
            type: 'get',
            data: data,
            dataType: 'json',
            success: function(resp) {
                var pages = Math.ceil(resp.total/data.limit);
                var currentPage = (data.start/data.limit)+1;
                $('#recruitManageGrid table tbody').empty();
                resp.rows&&resp.rows.forEach(function(v, i) {
                    var statusHtml = "",$tr=$('<tr></tr>');
                    if (v.status == "1"){
                        statusHtml = '<button type="button" class="recruiting am-btn am-btn-default am-btn-xs am-text-secondary">' +
                            '<span class="am-icon-play"></span> 正在招聘</button>';
                    }else{
                        $tr.addClass("tr-invaild");
                        statusHtml = '<button type="button" class="recruited am-btn am-btn-default am-btn-xs am-text-secondary">' +
                            '<span class="am-icon-pause"></span> 停止招聘</button>';
                    }
                    $tr.append(
                        '<td><input type="checkbox"></td>'+
                        '<td>'+(v.id?v.id:'')+'</td>'+
                        '<td>'+(v.publishDate?v.publishDate:'')+'</td>'+
                        '<td>'+(v.positionName?v.positionName:'')+'</td>'+
                        '<td>'+(v.positionRequire?v.positionRequire:'')+'</td>'+
                        '<td>'+(v.positionAuditor?v.positionAuditor:'')+'</td>'+
                        '<td>'+(v.depart?v.depart:'')+'</td>'+
                        '<td>'+(v.number?v.number:'')+'</td>'+
                        '<td>'+(v.address?v.address:'')+'</td>'+
                        '<td>' + statusHtml+
                        '</td>'+
                        '<td>'+
                        '<div class="am-btn-toolbar">'+
                        '<div class="am-btn-group am-btn-group-xs">'+
                        '<button type="button" class="detail am-btn am-btn-default am-btn-xs am-text-secondary js-modal-open">'+
                        '<span class="am-icon-eye"></span> 查看详情'+
                        '</button>'+
                        '<button type="button" class="edit am-btn am-btn-default am-btn-xs am-text-secondary js-modal-open">'+
                        '<span class="am-icon-edit"></span> 修改'+
                        '</button>'+
                        /*'<button type="button" class="remove am-btn am-btn-default am-btn-xs am-text-secondary">'+
                        '<span class="am-icon-remove"></span> 删除'+
                        '</button>'+*/
                        '</div>'+
                        '</div>'+
                        '</td>'
                    );
                    $tr.find('button.detail').click(function() {
                        showDetail(v);
                    });
                    $tr.find('button.edit').click(function() {
                        editDetail(v);
                    });
                    $tr.on("click",'button.recruiting',function() {
                        v.status = 0;
                        changeStatus(v,$(this));
                    });
                    $tr.on("click",'button.recruited',function() {
                        v.status = 1;
                        changeStatus(v,$(this));
                    });
                    // $tr.find('button.remove').click(function() {
                    //     removeDetail(v);
                    // });
                    $('#recruitManageGrid table tbody').append($tr);
                });
                var pagination = '';
                pagination += '<li><a href="#" class="prevPage">«</a></li>';
                pagination += '<li class="'+(1==currentPage?'am-active':'')+'"><a href="javascript:void(0)">1</a></li>';
                if(pages<7) {
                    for(var i=2; i<=pages; i++) {
                        pagination += '<li class="'+(i==currentPage?'am-active':'')+'"><a href="javascript:void(0)">'+i+'</a></li>';
                    }
                }else if(pages>=7) {
                    if(currentPage<5) {
                        for(i=2; i<=5; i++) {
                            pagination += '<li class="'+(i==currentPage?'am-active':'')+'"><a href="javascript:void(0)">'+i+'</a></li>';
                        }
                        pagination += '<li><a href="javascript:void(0)">...</a></li>';
                        pagination += '<li><a href="javascript:void(0)">'+pages+'</a></li>';
                    }else if(currentPage>=5&&currentPage<=pages-5) {
                        pagination +=
                            '<li><a href="javascript:void(0)">...</a></li>'+
                            '<li><a href="javascript:void(0)">'+(currentPage-1)+'</a></li>'+
                            '<li class="am-active"><a href="javascript:void(0)">'+currentPage+'</a></li>'+
                            '<li><a href="javascript:void(0)">'+(currentPage+1)+'</a></li>'+
                            '<li><a href="javascript:void(0)">...</a></li>'+
                            '<li><a href="javascript:void(0)">'+pages+'</a></li>';
                    }else if(currentPage>pages-5) {
                        pagination += '<li><a href="javascript:void(0)">...</a></li>';
                        for(var i=pages-4; i<=pages; i++) {
                            pagination += '<li class="'+(i==currentPage?'am-active':'')+'"><a href="javascript:void(0)">'+i+'</a></li>';
                        }
                    }
                }
                pagination += '<li><a href="#" class="nextPage">»</a></li>';
                $('#recruitManageGrid .am-pagination').empty().append(pagination);
                events();
            }
        });
    }
    /*列表**************************************/
});


/*
$(function () {
    function showDetail() {
        $('#app-modal .am-modal-hd .title').html('招聘发布');
        $('#app-modal .am-modal-bd .tpl-amazeui-form').empty();
        var html =
            '<div class="am-form-group"><label class="am-u-sm-4 am-form-label">职位名称</label><div class="am-u-sm-8"><input type="text"></div></div>'+
            '<div class="am-form-group"><label class="am-u-sm-4 am-form-label">部门</label><div class="am-u-sm-8"><input type="text"></div></div>'+
            '<div class="am-form-group"><label class="am-u-sm-4 am-form-label">招聘人数</label><div class="am-u-sm-8"><input type="text"></div></div>'+
            '<div class="am-form-group"><label class="am-u-sm-4 am-form-label">地点</label><div class="am-u-sm-8"><input type="text"></div></div>'+
            '<div class="am-form-group am-from-group-100"><label class="am-u-sm-2 am-form-label">职位要求</label><div class="am-u-sm-10 am-u-sm-10-edit"><textarea></textarea></div></div>';
        $('#app-modal .am-modal-bd .tpl-amazeui-form').append(html);
        $('#app-modal').modal();
    }

    $("#zp-add").click(function() {
        showDetail();
    });
});*/
