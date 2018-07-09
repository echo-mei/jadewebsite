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
    //提交建议表单
    $(document).on('click','#advice_btn', function () {
    	var btn = $(this)[0];
        submitEmail(btn,1);
    });
    //提交投诉表单
    $(document).on('click','#complaint_btn', function () {
    	var btn = $(this)[0];
        submitEmail(btn,2);
    });

    //提交会议表单
    $(document).on('click','#meeting_btn', function () {
    	var btn = $(this)[0];
        submitEmail(btn,3);
    });
    //文本框提醒
    // $('#complaint').on('change',function(){
    //     if($(this).value.length==5){
    //         console.log("man5");
    //     }
    // });
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

    //验证表单 for meeting


    function submitEmail(obj,origin){
        if(origin==1){
            //建议表单
            var advice = document.getElementById('advice').value;
            var personName = document.getElementById('personName').value;
            var businessName = document.getElementById('businessName').value;
            var phone = document.getElementById('phone').value;
            var verificationCode = document.getElementById('verificationCode').value;
        }
        if(origin==2){
            //投诉表单
            var complaint = document.getElementById('complaint').value;
            var personName = document.getElementById('personName').value;
            var businessName = document.getElementById('businessName').value;
            var phone = document.getElementById('phone').value;
            var verificationCode = document.getElementById('verificationCode').value;
        }
        if(origin==3){
            //会议表单
            var personName = document.getElementById('personName').value;
            var phone = document.getElementById('phone').value;
            var verificationCode = document.getElementById('verificationCode').value;
        }

        var submitFlag=true,html;
        if (personName === "")
        {
        	$("#warming").text("姓名不能为空").css("color","red");
                $("#item1").css("border-bottom","1px solid red");
                submitFlag=false;
                
        }
        if(phone==='')
        {
        	$("#warming1").text("手机号码不能为空").css("color","red");
                $("#item2").css("border-bottom","1px solid red");
                submitFlag=false;
                
        }
        if(verificationCode==='')
        {
        	 $("#warming2").text("验证码不能为空").css("color","red");
                $("#item1").css("border-bottom","1px solid red");
                submitFlag=false;
                
        }
        //判断必填是否为空
        $('.required').each(function(index){
            if($(this).parent("label").siblings("input").val() == ''||$(this).parent("label").siblings("textarea").val() == ''||undefined){
                var labelP = $(this).parent();
                var str = labelP.text();
                html=  '<span class="error-tip" style="font-size:0.4rem;margin-top:0.5rem">'+str.substring(1,str.length-2) + '不能为空'+'</span>';
                labelP.after(html);
                // $("#warming").text(str.substring(1,str.length-2)+'不能为空');
                submitFlag=false;
            }
        });
        if(personName!=""){

            
            
            //判断名字是否有非法字符
            // $("#personName").blur(function(){
                // });
                
                var username = /^[\u4E00-\u9FA5A-Za-z]+$/;
                if(!username.test(personName)){
                    $("#warming").text("姓名不能包含数字").css("color","red");
                    // $("#meeting_btn").attr("disabled",true).css('background-color','grey');
                    $("#item1").css("border-bottom","1px solid red");
                    submitFlag=false;
                    
                    // console.log("只能输入中文和英文")
                }else{
                    $("#meeting_btn").attr("disabled",false).css('background-color','#017ae3');

                }
            }
            // if(personName==="")
            // {
            //     $("#personName").attr('placeholder',"姓名不能为空")
            // }
                
            


        //判断电话
        if(phone!=""){
             var re_phone = /^1[345789]\d{9}$/;
            
            if(!re_phone.test(phone)){
                $("#warming1").text("请输入正确的手机号码").css("color","red");
                $("#item2").css("border-bottom","1px solid red");
                submitFlag=false;
                
            }
            else{
                
                $("#warming1").text("a").css('color','white');
                $("#item2").css("border-bottom","1px solid #e2e2e2");
                btnflag = true;
            }


            // if(!((/^1[345789]\d{9}$/.test(phone)))){
                if(!((/^1[345789]\d{9}$/.test(phone)))){
                // if ($('#phone').siblings(".error-tip").length == 0){
                //     html =   '<span class="error-tip">号码格式错误</span>';
                //     // html =   '<span class="error-tip">号码格式错误(固话请以-分隔,并加区号)</span>';
                //     $('#phone').after(html);
                    submitFlag=false;
                // }
                    $("#warming1").text("请输入正确的手机号码").css("color","red");
                    $("#item2").css("border-bottom","1px solid red");
                    
                    // $("#meeting_btn").attr("disabled",true).css('background-color','grey');
                }
                else{
                    $("#meeting_btn").attr("disabled",false).css('background-color','#017ae3');
                }
        }
        
        //判断邮箱
        // if (origin==2 && !( /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email))) {
        //     if ($('#email').siblings(".error-tip").length == 0){
        //         html =   '<span class="error-tip">邮箱格式有误</span>';
        //         $('#email').after(html);
        //         submitFlag=false;
        //     }
        // }
        //判断验证码
        if($.trim(verificationCode.toUpperCase()) != localStorage.getItem("checkcode")) { //若输入的验证码与产生的验证码不一致时
            // html =   '<span class="error-tip vc-error">验证码错误</span>';
            // $('#verificationCode').after(html);
            $("#warming2").text("验证码错误").css("color","red");
            $("#item3").css("border-bottom","1px solid red");
            // $("#meeting_btn").attr("disabled",true).css('background-color','grey');
            
            createCode(); //刷新验证码
            submitFlag=false;
        }

        var url,postData;
        if(origin==1) {//建议提交
            // formData.append('adviceFrom', 'MOBILE');
            formData.append('advice', advice);
            formData.append('name', personName);
            formData.append('company', businessName);
            formData.append('phone', phone);

            postData = formData;
            url = "../homeworkrequire/homeworkrequire.php?method=addAdvice";
        }
        if(origin==2){//投诉提交
            // formData.append('complaintFrom', 'MOBILE');
            formData.append('complaint', complaint);
            formData.append('name', personName);
            formData.append('company', businessName);
            formData.append('phone', phone);
            postData = formData;

            // ../../admin/data/productApply/productApplyAction.php
            url = "../homeworkrequire/homeworkrequire.php?method=addComplaint";
        }
        if(origin==3){
            // formData.append('complaintFrom', 'MOBILE');
            // formData.append('complaint', complaint);
            formData.append('name', personName);
            // formData.append('company', businessName);
            formData.append('phone', phone);
            postData = formData;

            // ../../admin/data/productApply/productApplyAction.php
            url = "../homeworkrequire/homeworkrequire.php?method=addMeeting";
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
            btn.innerText='提交';
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
                        '<h2 class="title" style="padding-top: 3rem;">提交成功</h2> ' +
                        // '<p class="cont">提交失败，请重新提交！</p> ' +
                        '<div class="handle"><button class="sure">确定</button></div> </div> </div>';
                    $("#applyTryForm").after(html);
                    submitOver();
                }else{
                    html = '<div class="modal-bg"> ' +
                        '<div class="modal-box"> ' +
                        '<h2 class="title">提交失败</h2> ' +
                        '<p class="cont">提交失败，请重新提交！</p> ' +
                        '<div class="handle"><button class="cancel">取消</button><button class="resubmit">重新提交</button></div> </div> </div>';
                    $("#applyTryForm").after(html);
                    submitOver();
                }
            },error: function() {
                html = '<div class="modal-bg"> ' +
                    '<div class="modal-box"> ' +
                    '<h2 class="title">提交失败</h2> ' +
                    '<p class="cont">提交失败，请重新提交！</p> ' +
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



