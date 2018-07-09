function buildGrid($context) {
	var limit = 10;
	grid(0, limit);
    $context.find('#searcher').change(function() {
		$('#searcher-input').attr('name', $(this).val());
	});
    $context.find('#searcher-btn').click(function() {
		var currentPage = Number($context.find('#recruitGrid .am-pagination li.am-active a').html());
		grid((currentPage-1)*limit, limit);
	});
	function showDetail(v) {
		$('#app-modal .am-modal-hd .title').html('招聘申请详情');
		$('#app-modal .am-modal-bd .tpl-amazeui-form').empty();
		if (v.imgName == ""){
			v.imgName = "nopic.png";
		}
		var html =
            '<div class="am-form-group"><label class="am-u-sm-4 am-form-label">证件照</label><img class="am-photo-img" src="../file/img/'+v.imgName+'"></div>'+
            '<div class="am-form-group"><label class="am-u-sm-4 am-form-label">应聘岗位</label>'+v.position+'</div>'+
			'<div class="am-form-group"><label class="am-u-sm-4 am-form-label">申请来源</label>'+v.recruitFrom+'</div>'+
			'<div class="am-form-group"><label class="am-u-sm-4 am-form-label">申请日期</label>'+v.deliverDate+'</div>'+
			'<div class="am-form-group"><label class="am-u-sm-4 am-form-label">到岗日期</label>'+v.workDate+'</div>'+
			'<div class="am-form-group"><label class="am-u-sm-4 am-form-label">姓名</label>'+v.name+'</div>'+
			'<div class="am-form-group"><label class="am-u-sm-4 am-form-label">性别</label>'+v.sexDesc+'</div>'+
			'<div class="am-form-group"><label class="am-u-sm-4 am-form-label">手机号码</label>'+v.phone+'</div>'+
			'<div class="am-form-group"><label class="am-u-sm-4 am-form-label">毕业院校</label>'+v.school+'</div>'+
			'<div class="am-form-group"><label class="am-u-sm-4 am-form-label">学历</label>'+v.education+'</div>'+
			'<div class="am-form-group"><label class="am-u-sm-4 am-form-label">籍贯</label>'+v.nativePlace+'</div>'+
			'<div class="am-form-group"><label class="am-u-sm-4 am-form-label">现居地</label>'+v.currentAddress+'</div>'+
			'<div class="am-form-group"><label class="am-u-sm-4 am-form-label">邮箱</label>'+v.email+'</div>'+
			'<div class="am-form-group"><label class="am-u-sm-4 am-form-label">QQ/微信</label>'+v.qq+'</div>'+
			'<div class="am-form-group"><label class="am-u-sm-4 am-form-label">学位</label>'+v.major+'</div>'+
			// '<div class="am-form-group"><label class="am-u-sm-4 am-form-label">毕业时间</label>'+v.graduationDate+'</div>'+
			'<div class="am-form-group"><label class="am-u-sm-4 am-form-label">英语等级</label>'+v.englishLevel+'</div>'+
			// '<div class="am-form-group"><label class="am-u-sm-4 am-form-label">计算机等级</label>'+v.computerLevel+'</div>'+
			'<div class="am-form-group am-from-group-100"><label class="am-u-sm-2 am-form-label">所获证书</label><div class="am-u-sm-10">'+v.certificate+'</div></div>'+
			'<div class="am-form-group am-from-group-100"><label class="am-u-sm-2 am-form-label">在校经历</label><div class="am-u-sm-10">'+v.associationActivity+'</div></div>'+
			'<div class="am-form-group am-from-group-100"><label class="am-u-sm-2 am-form-label">工作实习经历</label><div class="am-u-sm-10">'+v.practiceExperience+'</div></div>'+
			'<div class="am-form-group am-from-group-100"><label class="am-u-sm-2 am-form-label">自我评价</label><div class="am-u-sm-10">'+v.selfEvaluation+'</div></div>';
        $('#app-modal .am-modal-bd .tpl-amazeui-form').append(html);
		$('#app-modal').modal({closeViaDimmer:false});
		if(v.isRead!=1) {
			$.ajax({
				type: 'post',
				dataType: 'json',
				data: {
					id: v.id
				},
				url: 'data/recruitApply/recruitApplyAction.php?method=setRead',
				success: function(resp) {
					if(resp.status=='success') {
						$('#searcher-btn').click();
					}
				}
			});
		}
	}
	/*列表**************************************/
	function events() {
        $context.find('#recruitGrid .am-pagination a').click(function(e) {
			if(!isNaN($(this).html())) {
				grid((Number($(this).html())-1)*limit, limit);
			}
		});
        $context.find('#recruitGrid .am-pagination .prevPage').click(function(e) {
			var currentPage = Number($context.find('#recruitGrid .am-pagination li.am-active a').html());
			if(currentPage>1) {
				grid((currentPage-2)*limit, limit);
			}
		});
        $context.find('#recruitGrid .am-pagination .nextPage').click(function(e) {
			var currentPage = Number($context.find('#recruitGrid .am-pagination li.am-active a').html());
			var pages = Number($context.find('#recruitGrid .am-pagination li:last-child').prev('li').find('a').html());
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
		if($context.find('#searcher-input').attr('name')&&$context.find('#searcher-input').val()!=undefined) {
            data[$context.find('#searcher-input').attr('name')] = $context.find('#searcher-input').val();
		}

		$.ajax({
			url: 'data/recruitApply/recruitApplyAction.php?method=listRecruitApply',
			type: 'get',
			data: data,
			dataType: 'json',
			success: function(resp) {
				var pages = Math.ceil(resp.total/data.limit);
				var currentPage = (data.start/data.limit)+1;
                $context.find('#recruitGrid table tbody').empty();
				resp.rows&&resp.rows.forEach(function(v, i) {
					$tr = $(
						'<tr class="'+(v.isRead!=1?'no-look':'')+'">'+
	                	'<td><input type="checkbox"></td>'+
	                	'<td>'+(v.id?v.id:'')+'</td>'+
	                	'<td>'+(v.recruitFrom?v.recruitFrom:'')+'</td>'+
	                	'<td>'+(v.deliverDate?v.deliverDate:'')+'</td>'+
	                	'<td>'+(v.position?v.position:'')+'</td>'+
	                	'<td>'+(v.workDate?v.workDate:'')+'</td>'+
	                	'<td>'+(v.name?v.name:'')+'</td>'+
	                	'<td>'+(v.sexDesc?v.sexDesc:'')+'</td>'+
	                	'<td>'+(v.phone?v.phone:'')+'</td>'+
	                	'<td>'+(v.school?v.school:'')+'</td>'+
	                	'<td>'+(v.education?v.education:'')+'</td>'+
	                	'<td>'+
	                		'<div class="am-btn-toolbar">'+
	                            '<div class="am-btn-group am-btn-group-xs">'+
	                                '<button type="button" class="detail am-btn am-btn-default am-btn-xs am-text-secondary js-modal-open">'+
	                                	'<span class="am-icon-eye"></span> 查看详情'+
	                                '</button>'+
	                            '</div>'+
	                        '</div>'+
	                	'</td>'+
                    '</tr>'
					);
					$tr.find('button.detail').click(function() {
						showDetail(v);
					});
                    $context.find('#recruitGrid table tbody').append($tr);
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
                $context.find('#recruitGrid .am-pagination').empty().append(pagination);
				events();
			}
		});
	}
	/*列表**************************************/
}
