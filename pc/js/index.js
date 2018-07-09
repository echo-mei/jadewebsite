
$(document).ready(function() {
    var bWidth = $(window).width();
    var lHeight = 600 / 1920 * bWidth;
    var offsetTopLeftNav = $('.banner').height() + 86 - 58;
    initFn();
    $(window).resize(function () {
        bWidth = $(window).width();
        lHeight = 600 / 1920 * bWidth;
        offsetTopLeftNav = lHeight + 86 - 58;
        initFn();
    }).resize();

    function initFn() {
        $('.banner-slider').css('width', '100%');
        $('.banner-slider').css('height', lHeight + 'px');
    }

    // 默认导入首页内容
    setTimeout(function () {
        loadIndexPage();
    }, 10);

    //导入首页轮播图图片部分
    function loadIndexPage() {
        var html =
            '<li><a href="html/software_service.html?software_service_hyrjkf"><img src="img/pic/homepage_banner02.jpg" alt=""></a></li> ' +
            '<li><a href="html/software_service.html?software_service_hyrjkf"><img src="img/pic/homepage_banner03.jpg" alt=""></a></li> ' +
            '<li><a href="html/software_service.html?software_service_hyrjkf"><img src="img/pic/homepage_banner04.jpg" alt=""></a></li> ' +
            '<li><a href="html/cloud_service.html?cloud_service_jxgl"><img src="img/pic/homepage_banner05.jpg" alt=""></a></li>';

        $('.banner-slider ul').append(html);
        $('#slider').unslider({
            dots: true
        });
    }

    //首页动画效果
    var a, b, c;
    a = $(window).height();
    $(window).scroll(function () {
        var b = $(this).scrollTop();
        $(".wb-animation-scroll li").each(function () {
            c = $(this).offset().top;
            if (a + b + 150 > c) {
                $(this).addClass("move");
            }
            else {
                $(this).removeClass("move");
            }
        });
    });

});