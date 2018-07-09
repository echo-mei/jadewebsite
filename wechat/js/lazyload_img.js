
/**
 * Created by chenhuimei on 2017/7/25.
 */
(function($) {
    // alert($.fn.scrollLoading);
    $.fn.scrollLoading = function(options) {
        var defaults = {
            attr: "data-url"
        };
        var params = $.extend({}, defaults, options || {});
        params.cache = [];
        $(this).each(function() {
            var node = this.nodeName.toLowerCase(),
                url = $(this).attr(params["attr"]);
            if(!url) {
                return;
            }
            var data = {
                obj: $(this),
                tag: node,
                url: url
            };
            params.cache.push(data);
        });

        var loading = function() {
            var st = $(window).scrollTop(),
                sth = st + $(window).height();
            $.each(params.cache, function(i, data) {
                var o = data.obj,
                    tag = data.tag,
                    url = data.url;
                if(o) {
                    post = o.position().top;
                    posb = post + o.height();
                    if((post > st && post < sth) || (posb > st && posb < sth)) {
                        if(tag === "img") {
                            o.attr("src", url);
                            o.css("background","none");
                        } else {
                            o.load(url);
                        }
                        data.obj = null;
                    }
                }
            });
            return false;
        };

        loading();
        $(window).bind("scroll", loading);
    };

    //实现图片慢慢浮现出来的效果
    $("img").load(function () {
        //图片默认隐藏
        $(this).hide();
        //使用fadeIn特效
        $(this).fadeIn("500");
    });
    // 异步加载图片，实现逐屏加载图片
    $(".scrollLoading").scrollLoading();
})(jQuery);
