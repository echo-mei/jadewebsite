/*!
 * Simple jQuery Popdown Plugin & Content Loader
 *
 * @author   : http://twitter.com/SeanNieuwoudt
 * @author   : http://twitter.com/wixelhq
 * @url		 : http://github.com/Wixel/jquery-popdown.git
 * @copyright: 2015 Wixel
 * @license  : MIT license
 * @version  : 1.1
 */
;(function($){
    // Re-size the opacity when the window is resized
    $(window).resize(function() {
        if($('#popdown-opacity').length > 0) {
            $('#popdown-opacity').css({
                // width : $(document).outerWidth(),
                // height: $(document).outerHeight()
                width : $(window).width(),
                height: $(window).height()
            });
        }
    });

    // Bind the document ESC key
    $(document).keyup(function(e){
        if(e.keyCode === 27) {
            $.fn.close_popdown();
        }
    });

    // General element to close the popdown
    $(document).on('click', '.close-popdown', function(e){
        if(!$(this).is('.close-popdown'))  {	 //Only close when someone click on the html element with close-popdown class
            e.preventDefault();
        }
        $.fn.close_popdown();
    });
    /**
     * Generate & display the popdown
     *
     * @param string uri (content to load)
     * @param object options
     * @return void
     */
    $.fn.show_popdown = function(uri, options) {

        // Remove previous containers if they exist
        if($('#popdown-opacity').length > 0) {
            $('#popdown-opacity').remove();
        }
        opacityBg = $('<div />').attr('id', 'popdown-bg').css({
            position: 'absolute',
            top		: 0,
            left	: 0,
            width 	: '100%',
            height 	: '100%',
            zIndex	: 998,
            background:'#000',
            opacity: 0.5
        });
        // Construct the background blend
        opacity = $('<div />').attr('id', 'popdown-opacity').css({
            position: 'fixed',
            top		: 0,
            left	: 0,
            width 	: '100%',
            height 	: '100%',
            zIndex	: 997,
            display : 'none'
        });

        // Construct the content container
        var container = $('<div class="popdown-loading" />').attr('id', 'popdown-dialog').css({
            maxWidth   : options.width,
            height  : options.height,
            top: options.top,
            zIndex	: 999,
            /*margin	: '0 auto',*/
            position: 'relative',
            display : 'none'
        });

        // Let's add the opacity to the doc body
        $('body').append(opacity);

        // Fade in the background blend & add content container
        $('#popdown-opacity').fadeIn(100).append(container);

        // Fade in the container and load the data
        $('#popdown-opacity').append(opacityBg).append(container).stop().animate({
            opacity: 1.0
        }, 100, function() {
            $('#popdown-dialog').fadeIn(50, function(){
                $.get(uri, function(resp) {
                    $('#popdown-dialog').html(resp).addClass('popdown-done').removeClass('popdown-loading');
                    // $('#popdown-dialog').css({"height":"100%"});
                    $("html, body").animate({}, "fast");
                });
            });
        });
    }

    /**
     * Close the popdown and remove it from the DOM
     *
     * @return void
     */
    $.fn.close_popdown = function() {
        if($('#popdown-opacity').length > 0) {
            $('#popdown-dialog').stop().animate({
                opacity:0,
                height:0
            }, 200, function(){
                $('#popdown-opacity').remove();
            });
        }
    }

    /**
     * Initialize the popdown plugin
     *
     * @return void
     */
    $.fn.popdown = function(options) {

        var defaults = {
            width :'auto',
            height:'auto'
        };

        var options = $.extend(defaults, options);

        // Bind to each matching element
        return this.each(function() {
            var self = $(this);

            if(self.is('a')) {
                e.preventDefault();
            }

            // if($('#popdown-opacity').is(':visible')) {
            // } else {
                if(self.data('uri')) {
                    $.fn.show_popdown(self.data('uri'), options);
                } else if(self.attr('href')) {
                    $.fn.show_popdown(self.attr('href'), options);
                } else {
                    alert("No popdown dialog set for this action.");
                }
            // }
        });
    };
})(jQuery);
