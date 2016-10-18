function loaditem2(t, e) {
    for (var n = "", i = 0; i < e.length; i++) n += '<tr><td><span class="delete1">删除</span></td><td class="indexs">' + e[i].id + "</td><td>" + e[i].name + "</td><td>" + e[i].specifications + "</td><td>" + e[i].unit + '</td><td><input class="singlenum" maxlength="7" type="tel" value="' + e[i].quantity + '"></td><td><input class="singlepre" readonly type="text" maxlength="8" value="' + e[i].price + '"></td><td class="singletotal">' + e[i].totalprice + "</td><td>" + e[i].instruction + "</td></tr>";
    t.append(n), t.find(".singlenum").each(function() {
        $(this).click()
    })
}
function loaditem(t, e) {
    for (var n = "", i = 0; i < e.length; i++) n += '<tr><td><span class="delete1">删除</span></td><td class="indexs">' + e[i].id + "</td><td>" + e[i].name + "</td><td>" + e[i].specifications + "</td><td>" + e[i].unit + '</td><td><input class="singlenum" maxlength="7" type="tel" value=""></td><td><input class="singlepre" readonly type="text" maxlength="8" value="' + e[i].price + '"></td><td class="singletotal">' + e[i].price + "</td><td>" + e[i].instruction + "</td></tr>";
    t.append(n)
}
function loadpro(t, e) {
    for (var n = "", i = 0; i < t.length; i++) n += '<div class="model"><div class="statess"><h4 >项目<span class="proindex">' + (i + 1) + '</span>: <input placeholder="请输入项目名称" value="' + t[i].project + '"></h4><p><button class="delete2">删除</button></p></div><table><thead class="thead" ><tr><th>操作</th><th>序号</th><th>项目名称</th><th>规格型号</th><th>单位</th><th>数量</th><th>单价(元)</th><th>金额(元)</th><th>工艺做法及材料说明</th></tr></thead><tbody class="tbody"></tbody></table><section class="lastall"><p><button class="but1">新增</button>&nbsp;&nbsp;&nbsp;<button class="but2">自定义</button><i>小计: <span class="xiaoj">￥0.00</span></i></p></section></div>';
    $(".footer").before(n)
}
function delete1(t) {
    confirm("确定要删除吗？") && t.parent().parent().remove()
}
function delete2(t) {
    confirm("确定要删除吗？") && t.parent().parent().parent().remove()
}
function heji(t) {
    t || (t = $(".singlenum:first")), xiaoji(t), zongji(t)
}
function xiaoji(t) {
    var e = 0;
    t.parents(".tbody").find(".singletotal").each(function() {
        e += parseFloat($(this).html())
    }), t.parents(".model").find(".xiaoj").html("￥" + e.toFixed(2))
}
function zongji(t) {
    var e = 0;
    t.parents("body").find(".xiaoj").each(function() {
        e += parseFloat($(this).html().substr(1))
    }), t.parents("body").find(".footer").find(".totalmon").html("￥" + e.toFixed(2))
}
function printpreview() {
    $(".delete2,.but1,.but2,#but1,#but2,#but3,#but4,#but5,#but6,#but7,.delete1,#deng,#zhuce,#tuichu,#welcomeyou").addClass("noprint"), $(".singletotal").each(function() {
        0 == $(this).html() && $(this).parent().hide()
    }), $(".xiaoj").each(function() {
        "￥0.00" == $(this).html() && $(this).parents(".model").hide()
    }), $(".tbody").eq(-1).find("tr").show(), $(".model").eq(-1).show(), $("thead>tr>th:first-child").html(""), window.print(), $(".model").each(function() {
        $(this).show()
    }), $(".singletotal").each(function() {
        $(this).parent().show()
    }), $(".delete2,.but1,.but2,#but1,#but2,#but3,#but4,#but5,#but6,#but7,.delete1,#deng,#zhuce,#tuichu,#welcomeyou,thead>tr>th:first-child").removeClass("noprint"), $("thead>tr>th:first-child").html(" 操作")
}
function queding2() {
    return $(".bomb-input").val().replace(/\s/g, "") ? ($(".bomb-input").val(""), $("#confimDiv2").hide(), $(".mask").hide(), $(window).unbind("wheel"), messageaLT("提交成功"), void $("#but1").attr({
        disabled: "disabled"
    }).css("background", "gray")) : (messageaLT(" 拒绝理由不能为空！"), !1)
}
function quxiao2() {
    $(window).unbind("wheel"), $("#confimDiv2").hide(), $(".mask").hide()
}
function alertContent() {
    $(window).bind("wheel", function(t) {
        return t.preventDefault(), !1
    }), $("#confimDiv2").show(), $(".mask").show(), document.addEventListener("touchmove", function(t) {}, !1), $(".bomb-input").focus()
}
function messageaLT(t) {
    setTimeout(removeMessage, 1500), $("body").append('<div onclick="removeMessage()" class="alertbomb" style="position: fixed;top: 0;left: 0;z-index: 99999999999999;background: rgba(0,0,0,0.5);width:100%; height:100%;"></div>'), $("body").append('<div  class="alertcontent" style="position: fixed;top: 33%;left: 10%;z-index: 99999999999999;background: #fff;border-radius: 10px;text-align: center;line-height: 22px;font-size: 16px;color: #000000;width: 80%;padding: 20px 10px;-webkit-box-sizing:border-box;">' + t + "</div>")
}
function alertConfirm() {
    $("#confimDiv").show(), $(".mask").show(), document.addEventListener("touchmove", function(t) {}, !1)
}
function removeMessage() {
    $(".alertbomb,.alertcontent").remove(), $("body").css("overflow", "inherit")
}
function refreshMessage() {
    window.location.reload()
}
function send() {
    var t = [],
        e = window.localStorage;
    !
    function() {
        for (var n = 0; n < e.length; n++) t.push(e.key(n))
    }();
    var n = "";
    if (0 == t.length) n = "<i>无记录</i>";
    else for (var i = 0; i < t.length; i++) n += "<i>" + t[i] + "</i>";
    $(".newbig2").html(n)
}
function openf() {
    for (var t = null, e = [], n = 0; n < $(".proindex").next().length; n++) {
        e[n] = {}, e[n].project = $(".proindex").next().eq(n).val(), e[n].item = [];
        for (var i = 0; i < $(".tbody").eq(n).find("tr").length; i++) e[n].item[i] = {}, t = $(".tbody").eq(n).find("tr").eq(i).find("td"), e[n].item[i].id = t.eq(1).html(), e[n].item[i].name = t.eq(2).html(), e[n].item[i].specifications = t.eq(3).html(), e[n].item[i].unit = t.eq(4).html(), e[n].item[i].price = t.eq(6).find("input").val(), e[n].item[i].instruction = t.eq(8).html(), e[n].item[i].quantity = t.eq(5).find("input").val(), e[n].item[i].totalprice = t.eq(7).html()
    }
    var a = [$("#username").val(), $("#userphone").val(), $("#userhome").val(), $("#userhouse").val(), $("#userarea").val(), $("#useraddress").val(), $("#usermsg").val()];
    if (e.push(a), "" == $("#username").val()) return alert("保存数据必须输入客户名称。"), void(e = null);
    str = JSON.stringify(e), localStorage.setItem($("#username").val(), str), console.log(e);
    var o = localStorage.getItem($("#username").val());
    console.log(o), alert("已保存"), send()
}
function clearss() {
    confirm(" 确定要清除本地数据吗?不可找回！") && (localStorage.clear(), send())
}
jQuery(document).ready(function(t) {
    function e(e) {
        loadpro(newpro), t(".proindex").each(function(e) {
            t(this).html(e + 1)
        }), t(".proindex").eq(-1).next().val(model[e].project), loaditem(t(".tbody").eq(-1), model[e].item)
    }
    loadpro(model);
    for (var n = 0; n < model.length; n++) loaditem(t(".tbody").eq(n), model[n].item);
    t("body").on("click", ".delete1", function(e) {
        var n = 0,
            i = t(this),
            a = t(this).parents(".tbody");
        delete1(i), a.find(".singletotal").each(function() {
            n += parseFloat(t(this).html())
        }), a.parents(".model").find(".xiaoj").html(n.toFixed(2)), 0 != t(".singlenum").length ? t(".singlenum").eq(0).click() : t(".totalmon").html("￥0.00"), a.find(".indexs").each(function(e) {
            t(this).html(e + 1)
        })
    }), t("body").on("click", ".delete2", function() {
        var e = t(this);
        delete2(e), t(".proindex").each(function(e) {
            t(this).html(e + 1)
        }), 0 != t(".singlenum").length ? t(".singlenum").eq(0).click() : t(".totalmon").html("￥0.00")
    }), t("body").on("input click", ".singlenum", function() {
        isNaN(t(this).val()) && t(this).val("1");
        var e = t(this).val() * t(this).parent().next().find("input").val();
        t(this).parent().parent().children(".singletotal").html(e.toFixed(2)), heji(t(this))
    }), t("body").on("input", ".singlepre", function() {
        isNaN(t(this).val()) && t(this).val("1");
        var e = t(this).val() * t(this).parent().prev().find("input").val();
        t(this).parent().parent().children(".singletotal").html(e.toFixed(2)), heji(t(this))
    }), t("body").on("click", ".but2", function() {
        var e = 0;
        e = t(this).parent().parent().prev().find(".tbody").find(".indexs").eq(-1).html(), isNaN(e) && (e = 0);
        var n = "<tr><td><span class='delete1'>删除</span></td><td class='indexs'>" + (1 + parseInt(e)) + "</td contenteditable='true'><td contenteditable='true'>名称</td><td contenteditable='true'></td><td contenteditable='true'></td><td><input class='singlenum' maxlength='7' type='tel' value=''></td><td><input class='singlepre' type='text' maxlength='8' value='0'></td><td class='singletotal'>0.00</td><td contenteditable='true'></td></tr>";
        t(this).parent().parent().prev().find(".tbody").append(n)
    });
    var i;
    t("body").on("click", ".but1", function() {
        i = t(this), alertContent();
        for (var e = "", n = 0; n < data.length; n++) e += '<option value="' + data[n].project + '">' + data[n].project + "</option>";
        t("#newnew").html(e)
    });
    var a = 0;
    t("body").on("change click", "#newnew", function() {
        for (var e = "", n = 0; n < data.length && t(this).val() != data[n].project; n++);
        a = n;
        for (var i = 0; i < data[n].item.length; i++) e += "<span>" + data[n].item[i].name + "</span><br>";
        t("#detii").html(e)
    }), t("body").on("click", "#detii>span", function() {
        for (var e = "", n = 0, o = 0; o < data[a].item.length && t(this).html() != data[a].item[o].name; o++);
        n = i.parent().parent().prev().find(".tbody").find(".indexs").eq(-1).html(), isNaN(n) && (n = 0), e = "<tr><td><span class='delete1'>删除</span></td><td class='indexs'>" + (1 + parseInt(n)) + "</td><td>" + data[a].item[o].name + "</td><td >" + data[a].item[o].specifications + "</td><td>" + data[a].item[o].unit + "</td><td><input class='singlenum' maxlength='7' type='tel' value=''></td><td><input class='singlepre'  type='text' maxlength='8' readonly value='" + data[a].item[o].price + "'></td><td class='singletotal'>0</td><td >" + data[a].item[o].instruction + "</td></tr>", i.parent().parent().prev().find(".tbody").append(e), i.parent().parent().prev().find(".tbody").find(".singlenum").eq(-1).click(), quxiao2()
    }), t("#close").click(function(t) {
        quxiao2()
    }), t("body").on("mouseout", ".newbig,#but1", function(e) {
        t(".newbig").hide()
    }), t("body").on("mouseover", ".newbig,#but1", function(e) {
        t(".newbig").show()
    }), t(".newbig").on("click", "i", function(n) {
        n.preventDefault(), t(".newbig").hide();
        for (var i = 0; i < model.length && t(this).html() != model[i].project; i++);
        e(i), t(".tbody").eq(-1).find(".singlenum").click()
    }), t(".singlenum").each(function() {
        t(this).click()
    });
    for (var n = 0; n < model.length; n++) t(".newbig").append("<i>" + model[n].project + "</i>");
    t(".newbig").hide(), t(".newbig2").hide(), send(), t("body").on("mouseout", ".newbig2,#but3", function(e) {
        t(".newbig2").hide()
    }), t("body").on("mouseover", ".newbig2,#but3", function(e) {
        t(".newbig2").show()
    }), t(".newbig2").on("click", "i", function(e) {
        e.preventDefault();
        var n = t(this).html(),
            i = localStorage.getItem(n),
            a = JSON.parse(i);
        t(".newbig2").hide();
        var o = a.splice(-1, 1);
        o = o[0], console.log(o), console.log(a), t(".model").each(function() {
            t(this).remove()
        }), t("#username").val(o[0]), t("#userphone").val(o[1]), t("#userhome").val(o[2]), t("#userhouse").val(o[3]), t("#userarea").val(o[4]), t("#useraddress").val(o[5]), t("#usermsg").val(o[6]);
        for (var l = "", s = 0; s < a.length; s++) l += '<div class="model"><div class="statess"><h4 >项目<span class="proindex">' + (s + 1) + '</span>: <input placeholder="请输入项目名称" value="' + a[s].project + '"></h4><p><button class="delete2">删除</button></p></div><table><thead class="thead" ><tr><th>操作</th><th>序号</th><th>项目名称</th><th>规格型号</th><th>单位</th><th>数量</th><th>单价(元)</th><th>金额(元)</th><th>工艺做法及材料说明</th></tr></thead><tbody class="tbody"></tbody></table><section class="lastall"><p><button class="but1">新增</button>&nbsp;&nbsp;&nbsp;<button class="but2">自定义</button><i>小计: <span class="xiaoj">￥0.00</span></i></p></section></div>';
        t(".footer").before(l);
        for (var d = 0; d < a.length; d++) loaditem2(t(".tbody").eq(d), a[d].item)
    })
}), window.onload = function() {
    document.getElementsByTagName("body")[0].onkeydown = function() {
        var t = event.relatedTarget || event.srcElement || event.target || event.currentTarget;
        if (8 == event.keyCode) {
            var t = event.srcElement || event.currentTarget,
                e = t.nodeName;
            if ("BODY" == e || "BUTTON" == e || "SELECT" == e) return event.preventDefault, !1
        }
    }
}, jQuery(document).ready(function(t) {});

//注册
$(document).ready(function(){
    //登录
    $('#zhuce1').click(function(){

        if(!checkUserName($('#regusername').val())){
            return false;
        }
        if(!checkPassword($('#reguserpassword').val())){
            return false;
        }
        $.ajax({
            url: getRootPath()+"user/register",
            type: 'POST',
            data: {username: $('#regusername').val(),
                userpassowrd: $('#reguserpassword').val(),
                creattime: CurentTime(),
            },
            async: true,
        })
        .done(function(data) {
            console.log(data);
            if(data.code=="200"){
                setCookie('username', $('#regusername').val(), 3600);
                    $('#deng').hide();
                    $('#zhuce').hide();
                    $('#tuichu').show();
                    $('#welcomeyou').show().html('欢迎你：'+$('#regusername').val());
                    $('#regusername').val("");
                    $('#reguserpassword').val("");
                    $('#reguserpassword2').val("");
                    $('#quxiao').click();
                    messageaLT(data.msg);

                }
            if(data.code==1){
                    messageaLT(data.msg);

                }
        })
        .fail(function(request) {
            console.log(request);
            alert("注册失败，请稍后再试");
        })
        .always(function() {
            console.log("complete");
        });

    });
//登录
    $('#logn').click(function(){

        if(!checkUserName($('#usernae').val())){
            return false;
        }
        $.ajax({
            url: getRootPath()+"user/login",
            type: 'POST',
            data: {username: $('#usernae').val(),
                userpassowrd: $('#password').val(),
            },
            async: true,
        })
        .done(function(data) {
            console.log(data);
            if(data.code=="200"){
                setCookie('username', $('#usernae').val(), 3600);
                    $('#deng').hide();
                    $('#zhuce').hide();
                    $('#tuichu').show();
                    $('#welcomeyou').show().html('欢迎你：'+$('#usernae').val());
                    $('#usernae').val("");
                    $('#password').val("");
                    $('#rejs').click();
                    messageaLT(data.msg);
                    if(getCookie('username')){
                        setTimeout(function(){
                             $('#but7').click();
                        },3000)
                    }
                }
            if(data.code==1){
                    messageaLT(data.msg);
                }
        })
        .fail(function(request) {
            console.log(request);
            alert("网络故障，请稍后再试");
        })
        .always(function() {
            console.log("complete");
        });

    });
//登出
    $('#tuichu').click(function(event) {
        clearCookie('username');
        $('#deng').show();
        $('#zhuce').show();
        $('#tuichu').hide();
        $('#welcomeyou').hide().html('欢迎你：');
        $('.newbig3').html('<i>无记录</i>');
        remotedata = null;
    });
//登录初始化登录
if(getCookie('username')){
    setTimeout(function(){
         $('#but7').click();
    },3000)
}
$('.newbig3').hide();
if(getCookie('username')){
    $('#deng').hide();
    $('#zhuce').hide();
    $('#tuichu').show();
    $('#welcomeyou').show().html('欢迎你：'+getCookie('username'));
}
//云端保存
    $('body').on('click', '#but6', function(event) {
        if(!getCookie('username')){
            alert('请登录后再操作');
            return false;
        }

        for (var t = null, e = [], n = 0; n < $(".proindex").next().length; n++) {
        e[n] = {}, e[n].project = $(".proindex").next().eq(n).val(), e[n].item = [];
        for (var i = 0; i < $(".tbody").eq(n).find("tr").length; i++) e[n].item[i] = {}, t = $(".tbody").eq(n).find("tr").eq(i).find("td"), e[n].item[i].id = t.eq(1).html(), e[n].item[i].name = t.eq(2).html(), e[n].item[i].specifications = t.eq(3).html(), e[n].item[i].unit = t.eq(4).html(), e[n].item[i].price = t.eq(6).find("input").val(), e[n].item[i].instruction = t.eq(8).html(), e[n].item[i].quantity = t.eq(5).find("input").val(), e[n].item[i].totalprice = t.eq(7).html()
    }
    var a = [$("#username").val(), $("#userphone").val(), $("#userhome").val(), $("#userhouse").val(), $("#userarea").val(), $("#useraddress").val(), $("#usermsg").val()];
    if (e.push(a), "" == $("#username").val()) return alert("保存数据必须输入客户名称。"), void(e = null);
    str = JSON.stringify(e);

        $.ajax({
            url: getRootPath()+"user/save",
            type: 'POST',
            data: {username: getCookie('username'),
                   cusumername: $('#username').val(),
                   datay:str,
                   datatim:CurentTime(),
            },
            async: true,
        })
        .done(function(data) {
            console.log(data);
            if(data.code=="200"){
                    messageaLT(data.msg);
                    if(getCookie('username')){
                        setTimeout(function(){
                             $('#but7').click();
                        },2000)
                    }
                alert('保存成功');
                }
            if(data.code==1){
                    messageaLT(data.msg);
                }
        })
        .fail(function(request) {
            console.log(request);
            alert("网络故障，请稍后再试");
        })
        .always(function() {
            console.log("complete");
        });
    });
    //加载远程项目
    var remotedata='';
    $('body').on('click', '#but7', function(event) {
        if(!getCookie('username')){
            return false;
        }

        $.ajax({
            url: getRootPath()+"user/loaditem",
            type: 'POST',
            data: {username: getCookie('username')
            },
            async: true,
        })
        .done(function(data) {
            console.log(data);
            if(data.code=="200"){
                sendy(data.msg);
                remotedata = data.msg;

            }
            if(data.code==1){
                    messageaLT(data.msg);
                }
        })
        .fail(function(request) {
            console.log(request);
            alert("网络故障，请稍后再试");
        })
        .always(function() {
            console.log("complete");
        });
    });
    $('body').on('mouseover', ".newbig3,#but7", function(event) {
        event.preventDefault();
        $('.newbig3').show();
    });
    $('body').on('mouseout', ".newbig3,#but7", function(event) {
        event.preventDefault();
        $('.newbig3').hide();
    });
    $('.newbig3').on('click', 'i', function(event) {
        if(!remotedata){
            alert('无数据');
             retur;
        }else{
            var n = $(this).html();
            // var da = JSON.parse(remotedata);
            for(var i=0;i<remotedata.length;i++){
                if(n==remotedata[i].cosumername){
                    break;
                }
            }
            var a =JSON.parse(remotedata[i].cosumerdata);

        $(".newbig2").hide();
        var o = a.splice(-1, 1);
        o = o[0];
        console.log(o);
        console.log(a);
        $(".model").each(function() {
            $(this).remove()
        });
        $("#username").val(o[0]), $("#userphone").val(o[1]), $("#userhome").val(o[2]), $("#userhouse").val(o[3]), $("#userarea").val(o[4]), $("#useraddress").val(o[5]), $("#usermsg").val(o[6]);
        for (var l = "", s = 0; s < a.length; s++) l += '<div class="model"><div class="statess"><h4 >项目<span class="proindex">' + (s + 1) + '</span>: <input placeholder="请输入项目名称" value="' + a[s].project + '"></h4><p><button class="delete2">删除</button></p></div><table><thead class="thead" ><tr><th>操作</th><th>序号</th><th>项目名称</th><th>规格型号</th><th>单位</th><th>数量</th><th>单价(元)</th><th>金额(元)</th><th>工艺做法及材料说明</th></tr></thead><tbody class="tbody"></tbody></table><section class="lastall"><p><button class="but1">新增</button>&nbsp;&nbsp;&nbsp;<button class="but2">自定义</button><i>小计: <span class="xiaoj">￥0.00</span></i></p></section></div>';
        $(".footer").before(l);
        for (var d = 0; d < a.length; d++) loaditem2($(".tbody").eq(d), a[d].item)
        }

    });


})




//获取浏览器地址
function getRootPath(){
            var strFullPath = window.document.location.href;
            var strPath = window.document.location.pathname;
            var pos= strFullPath.indexOf(strPath);
            var prePath = strFullPath.substring(0,pos);
            var posPath= strPath.substring(0,strPath.substr(1).indexOf('')+1);
            return(prePath+posPath);
        }
//自定义alert
        function messageaLT(content){
            setTimeout(function(){
                removeMessage();
            },1000);
            $('body').append('<div onclick="removeMessage()" class="alertbomb" style="position: fixed;top: 0;left: 0;z-index: 99999999999999;background: rgba(0,0,0,0.3);width:100%; height:100%;"></div>');
            $('body').append('<div  class="alertcontent" style="position: fixed;top: 33%;left: 10%;z-index: 99999999999999;background: #fff;border-radius: 10px;text-align: center;line-height: 32px;font-size: 26px;color: #000000;width: 80%;padding: 20px 10px;-webkit-box-sizing:border-box;">'+content+'</div>')
        }
        function  removeMessage(){
            $('.alertbomb,.alertcontent').remove();
        }
//验证用户名
        function checkUserName(userName){
            if (userName== null||userName== ""){
                messageaLT( "请输入用户名" );
                return false;
            }else if(userName.length>10){
                messageaLT( "请输入2-10位用户名" );
                return false;
            }
            else {
                return true;
            }
        }
        //验证密码
        function checkPassword(password){
            if (password== null||password== ""){
                messageaLT( "请输入密码" );
                return false;
            }else if(password.length>20){
                messageaLT( "密码太长" );
                return false;
            }
            else {
                return true;
            }
        }
        //验证手机号
        function checkUserMobile(userMobile){
            if(/1[0-9]{10}/.test(userMobile)){
                return  true;
            }else{
                messageaLT( '请输入正确的手机号码' );
                return false;
            }
        }
            //得到当前时间字符串，格式为：YYYY-MM-DD HH:MM:SS
    function CurentTime()
    {
        var now = new Date();
        var year = now.getFullYear();       //年
        var month = now.getMonth() + 1;     //月
        var day = now.getDate();            //日
        var hh = now.getHours();            //时
        var mm = now.getMinutes();          //分
        var ss=now.getSeconds();            //秒
        var clock = year + "-";
        if(month < 10) clock += "0";
        clock += month + "-";
        if(day < 10) clock += "0";
        clock += day + " ";
        if(hh < 10) clock += "0";
        clock += hh + ":";
        if (mm < 10) clock += '0';
        clock += mm+ ":";
        if (ss < 10) clock += '0';
        clock += ss;
        return(clock);
    }
    //设置cookie
    //取得cookie
    function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');    //把cookie分割成组
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];                      //取得字符串
        while (c.charAt(0)==' ') {          //判断一下字符串有没有前导空格
            c = c.substring(1,c.length);      //有的话，从第二位开始取
        }
        if (c.indexOf(nameEQ) == 0) {       //如果含有我们要的name
            return unescape(c.substring(nameEQ.length,c.length));    //解码并截取我们要值
        }
    }
    return false;
    }

    //清除cookie
    function clearCookie(name) {
        setCookie(name, "", -1);
    }
    //设置cookie
    function setCookie(name, value, seconds) {
        seconds = seconds || 0;   //seconds有值就直接赋值，没有为0，这个和php不一样。
        var expires = "";
        if (seconds != 0 ) {      //设置cookie生存时间.
            var date = new Date();
            date.setTime(date.getTime()+(seconds*1000));
            expires = "; expires="+date.toGMTString();
        }
        document.cookie = name+"="+escape(value)+expires+"; path=/";   //转码并赋值
    }
//远程加载
    function sendy(datas) {
        var n = "";
        if (0 == datas.length) n = "<i>无记录</i>";
        else for (var i = 0; i < datas.length; i++) n += "<i>" + datas[i].cosumername + "</i>";
        $(".newbig3").html(n)
    }

