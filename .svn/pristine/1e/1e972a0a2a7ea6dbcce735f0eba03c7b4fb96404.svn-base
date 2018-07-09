$(function() {
	var limit = 10;
	grid(0, limit);
	$('#searcher').change(function() {
		$('#searcher-input').attr('name', $(this).val());
	});
	$('#searcher-btn').click(function() {
		var currentPage = Number($('#loginLogGrid .am-pagination li.am-active a').html());
		grid((currentPage-1)*limit, limit);
	});
	function showDetail(v) {
		$('#app-modal .am-modal-hd .title').html('招聘申请详情');
		$('#app-modal .am-modal-bd .tpl-amazeui-form').empty();
		for(var key in v) {
			var label = '';
			switch(key) {
			case 'recruitFrom': label = '申请来源';break;
			case 'position': label = '应聘岗位';break;
			case 'workDate': label = '到岗日期';break;
			case 'name': label = '姓名';break;
			case 'sex': label = '性别';break;
			case 'phone': label = '手机号码';break;
			case 'school': label = '毕业院校';break;
			case 'education': label = '学历';break;
			}
			if(label) {
				$('#app-modal .am-modal-bd .tpl-amazeui-form').append(
					'<div class="am-form-group"><label class="am-u-sm-4 am-form-label">'+label+'</label>'+(v[key]?v[key]:'')+'</div>'
				);
			}
		}
		$('#app-modal').modal();
		if(!v.isRead) {
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
		$('#loginLogGrid .am-pagination a').click(function(e) {
			if(!isNaN($(this).html())) {
				grid((Number($(this).html())-1)*limit, limit);
			}
		});
		$('#loginLogGrid .am-pagination .prevPage').click(function(e) {
			var currentPage = Number($('#loginLogGrid .am-pagination li.am-active a').html());
			if(currentPage>1) {
				grid((currentPage-2)*limit, limit);
			}
		});
		$('#loginLogGrid .am-pagination .nextPage').click(function(e) {
			var currentPage = Number($('#loginLogGrid .am-pagination li.am-active a').html());
			var pages = Number($('#loginLogGrid .am-pagination li:last-child').prev('li').find('a').html());
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
			url: 'data/loginLog/loginLogAction.php?method=listLoginLog',
			type: 'get',
			data: data,
			dataType: 'json',
			success: function(resp) {
				var pages = Math.ceil(resp.total/data.limit);
				var currentPage = (data.start/data.limit)+1;
				$('#loginLogGrid table tbody').empty();
				resp.rows&&resp.rows.forEach(function(v, i) {
					$tr = $(
						'<tr class="'+(v.isRead?'':'no-look')+'">'+
		                	'<td><input type="checkbox"></td>'+
		                	'<td>'+(v.id?v.id:'')+'</td>'+
		                	'<td>'+(v.ip?v.ip:'')+'</td>'+
		                	'<td>'+(v.loginTime?v.loginTime:'')+'</td>'+
		                	'<td>'+(v.adminName?v.adminName:'')+'</td>'+
	                	'</tr>'
					);
					$tr.find('button.detail').click(function() {
						showDetail(v);
					});
					$('#loginLogGrid table tbody').append($tr);
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
				$('#loginLogGrid .am-pagination').empty().append(pagination);
				events();
			}
		});
	}
	/*列表**************************************/
});
