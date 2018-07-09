/*if($('.tpl-left-nav-sub-menu a').hasClass('active')) {
	$(this).parent('.tpl-left-nav-sub-menu').css({'display': 'block'});
}*/
$('.tpl-left-nav-menu .tpl-left-nav-link-list').click(function() {
	$(this).toggleClass('active');
});
$('.tpl-left-nav-sub-menu a').click(function() {
	$('.tpl-left-nav-menu .tpl-left-nav-sub-menu a').removeClass('active');
	$(this).addClass('active');
});
/*$('.tpl-left-nav-sub-menu').each(function() {
	if($(this).find('a').hasClass('active')) {
		$(this).css({'display': 'block'});
	}
	$(this).siblings('a').click();
});*/