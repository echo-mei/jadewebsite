/**
 * Created by Administrator on 2017/7/20.
 */
$(function () {

    $(window).resize(function () {
        $(".index-main").css("min-height",$(window).height()-$(".copyright").outerHeight(true));
    }).resize();

    // 首页点击导航图标
    $("#navbarTop .navbar-toggle").click(function (e) {
        e.stopPropagation();
        $("#navbarMenu").show();
    });
    $("#navbarMenu .navbar-menu-close").click(function () {
       $("#navbarMenu").find(".navbar-menu ul").hide();
       $("#navbarMenu").find(".dropdown.active").removeClass("active");
       $("#navbarMenu").hide();
    });
    $("#navbarMenu .dropdown").click(function (e) {
       e.stopPropagation();
       var $ul = $(this).siblings("ul");
        if ($ul.is(':hidden') ){
            $("#navbarMenu").find("li ul").hide();
            $("#navbarMenu").find(".dropdown.active").removeClass("active");
            $(this).addClass("active");
            $ul.show();
        }else {
            $(this).removeClass("active");
            $ul.hide();
        }
    });

    // tab切换
    $(document).on('click',".tabClick li",function () {
        var nameValue = $(this).attr("name");
        $(this).addClass("active");
        $(this).siblings("li").removeClass("active");

        $(".tabList").each(function (i) {
            if ($(this).attr("name") == nameValue){
                $(this).show();
            }else {
                $(this).hide();
            }
        });
    });

    // 下拉选择
    $(document).on('change','.select-choice',function () {
        var anchorName = $(this).children('option:selected').attr("name");//这就是selected的值
        $('html, body').animate({
            scrollTop: $("#" + anchorName).offset().top - 90
        }, 100);
    });


    // 软件服务-行业软件服务：点击显示详情
    $(document).on('click',".software-hyrjfw .item-text-img",function (e) {
        e.stopPropagation();
        // $(this).parent(".software-hyrjfw").hide();
        var imgHtml = $(this).find("img").prop("outerHTML"),
            h3Html = $(this).find("h3").prop("outerHTML"),
            pHtml = $(this).find("p").prop("outerHTML");
        var softwareDetail =  $(this).parent(".software-hyrjfw").siblings(".software-hyrjfw-details");
        softwareDetail.show() ;
        softwareDetail.find(".software-hyrjfw-handle").before(imgHtml,h3Html,pHtml);
    });
    $(document).on('click',".software-hyrjfw-handle .return-btn",function () {
        $(".software-hyrjfw-details").find("img").remove();
        $(".software-hyrjfw-details").find("h3").remove();
        $(".software-hyrjfw-details").find("p").remove();
        $(".software-hyrjfw-details").hide();
        // $(".software-hyrjfw").show();
    });

    // 加入我们点击收缩展开
    $(document).on('click',"#join-table tbody tr",function () {
        $(this).siblings("tr").removeClass("active");
        $(this).siblings("tr").find(".td-handle").text("+");
        $("#join-table tbody tr.td-desc").hide();
        if ($(this).hasClass("active")){
            $(this).removeClass("active");
            $(this).next("tr.td-desc").hide();
            $(this).find(".td-handle").text("+");
        }else {
            $(this).addClass("active");
            $(this).next("tr.td-desc").show();
            $(this).find(".td-handle").text("-");
        }

    });

    //申请试用
    $(document).on('click','.cloud-service .try-apply-btn', function () {
        var title=$(this).siblings(".item-title").text();
        localStorage.setItem("tit", title);
    });
    //招聘申请表单
    $(document).on('click','.join-us .try-apply-btn', function () {
        var applyJob=$(this).closest(".td-desc").prev("tr").find("td:eq(0)").text();
        localStorage.setItem("applyJob", applyJob);
        // 跳转到简历填写界面
        window.location.href='resume_form.html';
    });
    //提交试用申请表单
    $(document).on('click','#apply_try_btn', function () {
    	var btn = $(this)[0];
        submitEmail(btn,1);
    });

    // 用到了localResizeIMG插件，压缩图片: https://github.com/think2011/localResizeIMG
    var $preview = $('#preview');
    var formData = new FormData();
    //压缩图片及预览
    $('#fileImg').on('change', function () {
        lrz(this.files[0], {
            width: 800
        }).then(function (rst) {
            //图片预览
            $preview.attr('src', rst.base64);

            //根据需要增加一些信息
            rst.formData.append('fileLen', rst.fileLen);

            //压缩后的图片暂存在变量formData中
            formData = rst.formData;
        });
    });

    //提交在线简历表单
    $(document).on('click','#resume_form_btn', function () {
        var btn = $(this)[0];
        submitEmail(btn,2);
    });

    $(document).on('focus','.form-item input,.form-item textarea', function () {
        $(this).siblings(".error-tip").remove();
    });
    $(document).on('click','.handle', function () {
        $(this).closest(".modal-bg").remove();
        emptyForm();
    });
    $(document).on('click','.resubmit', function () {
        $(this).closest(".modal-bg").remove();
        createCode(); //刷新验证码
    });
    //清空表单中的数据
    function emptyForm() {
        $("#applyTryForm").find("input").val("");
        $("#applyTryForm").find("select").val("");
        $("#applyTryForm").find("textarea").val("");
        createCode(); //刷新验证码
    }

    function submitEmail(obj,origin){
        if(origin==1){
            //产品试用表单
            var softName = document.getElementById('softName').value;
            var personName = document.getElementById('personName').value;
            // var qq = document.getElementById('qq').value;
            var businessName = document.getElementById('businessName').value;
            // var businessAddress = document.getElementById('businessAddress').value;
            var phone = document.getElementById('phone').value;
            // var email= document.getElementById('email').value;
            var verificationCode = document.getElementById('verificationCode').value;
        }
        if(origin==2){
            //招聘表单
            var applyJob = $("#applyJob").val();
            var arrivalDate = $("#arrivalDate").val();
            var name = $("#name").val();
            var sex = $('input:radio[name="sex"]:checked').val();
            var nativePlace = $("#nativePlace").val();
            var currentAddress = $("#currentAddress").val();
            var email = $("#email").val();
            var phone = $("#phone").val();
            var qq = $("#qq").val();
            var graduateSchool = $("#graduateSchool").val();
            var universityDegree = $("#universityDegree").val();
            var major = $("#major").val();
            // var graduationDate = $("#graduationDate").val();
            var englishLevel = $("#englishLevel").val();
            // var computerLevel = $("#computerLevel").val();
            var certificate = $("#certificate").val();
            var associationActivity = $("#associationActivity").val();
            var practiceExperience = $("#practiceExperience").val();
            var shixiExperience = $("#shixiExperience").val();
            var hobbies = $("#hobbies").val();
            var selfEvaluation = $("#selfEvaluation").val();
        }

        var submitFlag=true,html;
        //判断必填是否为空
        $('.required').each(function(index){
            if($(this).parent("label").siblings("input").val() == ''||$(this).parent("label").siblings("textarea").val() == ''||undefined){
                var labelP = $(this).parent();
                var str = labelP.text();
                html=  '<span class="error-tip">'+str.substring(1,str.length-2) + '不能为空'+'</span>';
                labelP.after(html);
                submitFlag=false;
            }
        });
        //判断名字是否有非法字符

        //判断电话
        if(!((/^1[34578]\d{9}$/.test(phone))||(/^\d{3}-\d{7,8}|\d{4}-\d{7,8}$/.test(phone)))){
            if ($('#phone').siblings(".error-tip").length == 0){
                html =   '<span class="error-tip">号码格式错误(固话请以-分隔,并加区号)</span>';
                $('#phone').after(html);
                submitFlag=false;
            }
        }
        //判断邮箱
        if (origin==2 && !( /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email))) {
            if ($('#email').siblings(".error-tip").length == 0){
                html =   '<span class="error-tip">邮箱格式有误</span>';
                $('#email').after(html);
                submitFlag=false;
            }
        }
        //判断验证码
        if(origin==1&&$.trim(verificationCode.toUpperCase()) != localStorage.getItem("checkcode")) { //若输入的验证码与产生的验证码不一致时
            html =   '<span class="error-tip vc-error">验证码错误</span>';
            $('#verificationCode').after(html);
            createCode(); //刷新验证码
            submitFlag=false;
        }

        var url,postData;
        if(origin==1) {
            formData.append('productFrom', 'MOBILE');
            formData.append('systemName', softName);
            formData.append('name', personName);
            // formData.append('qqWechat', qq);
            formData.append('unit', businessName);
            // formData.append('unitAddress', businessAddress);
            formData.append('phone', phone);
            // formData.append('email', email);

            postData = formData;
            url = "../../admin/data/productApply/productApplyAction.php?method=addProductApply";
        }
        if(origin==2){//招聘申请表数据上传处理
            formData.append('recruitFrom', 'MOBILE');
            formData.append('position', applyJob);
            formData.append('workDate', arrivalDate);
            formData.append('name', name);
            formData.append('sex', sex);
            formData.append('nativePlace', nativePlace);
            formData.append('currentAddress', currentAddress);
            formData.append('email', email);
            formData.append('phone', phone);
            formData.append('qq', qq);
            formData.append('school', graduateSchool);
            formData.append('education', universityDegree);
            formData.append('major', major);
            // formData.append('graduationDate', graduationDate);
            formData.append('englishLevel', englishLevel);
            // formData.append('computerLevel', computerLevel);
            formData.append('certificate', certificate);
            formData.append('associationActivity', associationActivity);
            formData.append('practiceExperience', practiceExperience);
            formData.append('shixiExperience', shixiExperience);
            formData.append('hobbies', hobbies);
            formData.append('selfEvaluation', selfEvaluation);

            postData = formData;
            url = "../../admin/data/recruitApply/recruitApplyAction.php?method=addRecruitApply";
        }
        if(submitFlag){
            ajaxEmail(obj, url, postData);
        }
    }

    function ajaxEmail(obj, url, data){
        var html;
        var btn = obj;
        //检查 按钮是否被锁住，锁住直接rerun
        if(btn.getAttribute('lock')){
            return;
        }
        //上锁
        btn.setAttribute('lock',1);
        //更改状态
        var count = 0;
        btn.innerText='提交中... ('+count+' s)';
        var countdown = setInterval(CountDown, 1000);
        function CountDown() {
            count++;
            btn.innerText='提交中... ('+count+' s)';
        }
        function submitOver(){
            //请求成功解锁
            btn.setAttribute('lock',"");
            //还原状态
            btn.innerText='提交申请';
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
            success: function(data) {
                if(data.success) {
                    html = '<div class="modal-bg"> ' +
                        '<div class="modal-box"> ' +
                        '<h2 class="title">提交成功</h2> ' +
                        '<p class="cont">我们将在3个工作日内审核您的申请。如果通过，我们将会以<strong>电话、邮箱</strong>的方式联系您！</p> ' +
                        '<div class="handle"><button class="sure">确定</button></div> </div> </div>';
                    $("#applyTryForm").after(html);
                    submitOver();
                }else{
                    html = '<div class="modal-bg"> ' +
                        '<div class="modal-box"> ' +
                        '<h2 class="title">提交失败</h2> ' +
                        '<p class="cont">您的申请表提交失败，请重新提交！</p> ' +
                        '<div class="handle"><button class="cancel">取消</button><button class="resubmit">重新提交</button></div> </div> </div>';
                    $("#applyTryForm").after(html);
                    submitOver();
                }
            },error: function() {
                html = '<div class="modal-bg"> ' +
                    '<div class="modal-box"> ' +
                    '<h2 class="title">提交失败</h2> ' +
                    '<p class="cont">您的申请表提交失败，请重新提交！</p> ' +
                    '<div class="handle"><button class="cancel">取消</button><button class="resubmit">重新提交</button></div> </div> </div>';
                $("#applyTryForm").after(html);
                submitOver();
            }
        });
    }

});

function createCode() {
    var code = "",
        codeLength = 5; //验证码的长度

    var random = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
        'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'); //随机数
    for(var i = 0; i < codeLength; i++) { //循环操作
        var charIndex = Math.floor(Math.random() * 36); //取得随机数的索引
        code += random[charIndex]; //根据索引取得随机数加到code上
    }
    localStorage.setItem("checkcode",code);

    var checkCode = document.getElementById("checkcode");
    if(checkCode != undefined)checkCode.innerText = code; //把code值赋给验证码
}



