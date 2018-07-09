$('#saveAccountInfo').click(function() {
	$('#accountForm').find('input').next('span').html('');
	if(!$('#username').val()) {
		$('#username').next('span').html('用户名不能为空');
		return false;
	}
	if(!$('#oldPassword').val()) {
		$('#oldPassword').next('span').html('原密码不能为空');
		return false;
	}
	if(!$('#newPassword').val()) {
		$('#newPassword').next('span').html('新密码不能为空');
		return false;
	}
	if(!$('#newPasswordCheck').val()) {
		$('#newPasswordCheck').next('span').html('请再次输入新密码');
		return false;
	}
	if($('#newPasswordCheck').val()!=$('#newPassword').val()) {
		$('#newPasswordCheck').next('span').html('两次密码不一致');
		return false;
	}
	$.ajax({
		type: $('#accountForm').attr('method'),
		url: $('#accountForm').attr('action'),
		data: $('#accountForm').serializeArray(),
		dataType: 'json',
		success: function(resp) {
			if(resp.status=='success') {
				alert('保存成功，请重新登陆');
				window.location = 'login.php';
			}else {
				$('#'+resp.property).next('span').html(resp.message);
			}
		}
	});
});