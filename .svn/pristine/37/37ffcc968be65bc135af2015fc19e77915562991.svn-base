/**
 * Created by chenjie on 2017/5/16.
 */
;(function ($,window,document,undefined) {
    $.fn.scroll_right = function(options){
        var defaults = {
            'oLeft' : ['div.left li'],
            'oRight' : ['div.right>div'],
            'activeClass': 'active'
        };
        var settings = $.extend({},defaults,options);
        var id = '';
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        for(var i=0;i<settings.oRight.length;i++){
            $(settings.oRight[i]).each(function(index){
                if($(settings.oRight[i]).eq(index).offset().top-scrollTop<200 && $(settings.oRight[i]).eq(index).offset().top-scrollTop>-100){
                    id =$(settings.oRight[i]).eq(index).attr('id') || $(settings.oRight[i]).eq(index).attr('name');
                    $(settings.oLeft[i]).removeClass(settings.activeClass);
                    $(settings.oLeft[i]).siblings('ul').hide();
                    var thisDom = $("a[href='#"+id+"']");
                    thisDom.parent().addClass(settings.activeClass);
                    thisDom.parent().siblings('ul').show();
                }
            });
        }
    };
})(jQuery,window,document);

$(function () {
    $(window).scroll(function(){
        fixed_left_nav($('.main-left-nav'));
        $('body').scroll_right({
            'oLeft': ['div.main-left-nav>ul>li'],
            'oRight': ['div.main-right>div>div'],
            'activeClass': 'active'
        });
    });
    $(document).on('click','.main-left-nav li',function(){
        fixed_left_nav($('.main-left-nav'));
    });

    function fixed_left_nav(obj){
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft;
        offsetTopLeftNav = $('.banner').height()+86-58;

        if(offsetTopLeftNav<scrollTop){
            obj.css({
                'position': 'fixed',
                'top': '0px',
                'left': ($(document.body).width()-1200)/2-scrollLeft+'px'
            });
        }else{
            obj.css({
                'position': 'relative',
                'top': '-58px',
                'left': '0px'
            });
        }
        if (obj.length>0){
            var objToBottomHeight = $(document).outerHeight() - ($(obj).offset().top + $(obj).outerHeight());
            var footerHeight = $(".footer").outerHeight(true);
            var leftNavTop = $(window).height() - ($(obj).outerHeight(true) +$(".footer").outerHeight(true) );
            if (objToBottomHeight <  footerHeight){
                obj.css({
                    'position': 'fixed',
                    'top': leftNavTop
                });
            }
        }
    }
});