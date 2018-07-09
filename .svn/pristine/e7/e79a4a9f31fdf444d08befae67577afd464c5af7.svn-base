// 加载主内容区域内容
function loadPage(maincName) {
    var maincPath = "level2pages/" + maincName + ".html";
    $(".main-right").load(maincPath);
}
// 加载头部成功之后的操作，给对应点击的头部导航以及对应的左边导航加active样式
function loadSuccessHandle(isLoadPage,headUl) {
    var pageSearch = location.search,
        maincName = pageSearch.substring(1,pageSearch.length),
        liName,subName;

    $("."+headUl).addClass("active");
    // 加载主内容
    $(".main-left-nav li").each(function () {
        liName = isLoadPage?$(this).attr("name"):$(this).children("a").attr("href");
        subName = isLoadPage?liName:liName.substring(1,liName.length);
        if (subName == maincName){
            $(this).click();
            if (!isLoadPage){
                var targetTop = $(".main-right").find("#"+subName).offset();
                $("html,body").animate({scrollTop: targetTop.top}, 'slow');  //带滑动效果的跳转
            }
            return;
        }
    });
}
// 产生验证码
function createCode() {
    var code = "";
    var codeLength = 5; //验证码的长度
    var checkCode = document.getElementById("checkcode");
    var random = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
        'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'); //随机数
    for(var i = 0; i < codeLength; i++) { //循环操作
        var charIndex = Math.floor(Math.random() * 36); //取得随机数的索引
        code += random[charIndex]; //根据索引取得随机数加到code上
    }
    localStorage.setItem("checkcode",code);
    checkCode.innerText = code; //把code值赋给验证码
}
function ajaxEmail(btn, url, data) {
    //检查 按钮是否被锁住，锁住直接return
    if (btn.getAttribute('lock')) {
        return;
    }
    //上锁
    btn.setAttribute('lock', 1);

    //更改状态
    var count = 0;
    btn.innerText = '提交中... (' + count + ' s)';
    var countdown = setInterval(CountDown, 1000);

    function CountDown() {
        count++;
        btn.innerText = '提交中... (' + count + ' s)';
    }

    function submitOver() {
        //请求成功解锁
        btn.setAttribute('lock', "");
        //还原状态
        btn.innerText = '提交';
        count = 0;
        clearInterval(countdown);
    }

    $.ajax({
        type: 'post',
        data: data,
        dataType: "json",
        url: url,
        processData: false,
        contentType: false,
        cache: false,
        timeout: 10000,
        success: function (data) {
            if (data.success) {
                $("#popdown-dialog").load("modal/success1.html");
                submitOver();
            } else {
                $("#popdown-dialog").load("modal/failure.html");
                submitOver();
            }
        }, error: function () {
            $("#popdown-dialog").load("modal/failure.html");
            submitOver();
        }
    });
}

$(function () {
    // 点击左部导航菜单内容
    $(document).on('click', ".main-left-nav li", function () {
        var pageName = $(this).attr("name");
        $(this).addClass("active").siblings("li").removeClass("active");
        if (pageName != null || pageName != undefined){
            if (pageName == "cloud_service"){
                document.location.href = "cloud_service.html";
            }else {
                loadPage(pageName);
            }
        }else {
            return;
        }

        $('html,body').animate({scrollTop: 0}, 'slow');
    });

    // 点击弹出弹窗
    $(document).on('click', '.show-modal', function () {
        // $.close_popdown();
        // $(this).close_popdown();
        $(this).popdown();
    });

    /*关于模态框*/
    $(document).on('focus', '.modal-box input,.modal-box textarea', function () {
        $(this).removeClass('red').addClass('blue');
        $(this).parent().children('span').hide();
    });
    $(document).on('blur', '.modal-box input,.modal-box textarea', function () {
        $(this).removeClass('blue');
    });

});