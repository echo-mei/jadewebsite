$('[type="submit"]').click(function() {
	if(!$('#username').val()) {
		$('#username').next('span').html('用户名不能为空');
		return false;
	}else {
		$('#username').next('span').html('');
	}
	if(!$('#password').val()) {
		$('#password').next('span').html('密码不能为空');
		return false;
	}else {
		$('#password').next('span').html('');
	}
	$.ajax({
		type: $('form').attr('method'),
		url: $('form').attr('action'),
		data: $('form').serializeArray(),
		dataType: 'json',
		success: function(resp) {
			if(resp.status=='success') {
				window.location = "index.php?menu="+resp.defaultMenuId;
			}else {
				$('#'+resp.property).next('span').html(resp.message);
                $('#verify_img').click();
			}
		}
	});
});