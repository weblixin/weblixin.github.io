/**
 * Created by ChengYa on 2016/6/18.
 */

//判断手机类型
window.onload = function () {
    //alert($(window).height());
    var u = navigator.userAgent;
    if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {//安卓手机
    } else if (u.indexOf('iPhone') > -1) {//苹果手机
        //屏蔽ios下上下弹性
        $(window).on('scroll.elasticity', function (e) {
            e.preventDefault();
        }).on('touchmove.elasticity', function (e) {
            e.preventDefault();
        });
    } else if (u.indexOf('Windows Phone') > -1) {//winphone手机
    }
    //预加载
    loading();
}

var date_start;
var date_end;
date_start = getNowFormatDate();
//加载图片
var loading_img_url = [
    "img/cl1.jpg",
    "img/cl2.jpg",
    "img/cl3.jpg",
    "img/cl4.jpg",
    "img/cl5.jpg",
    "img/cl6.jpg",
    "img/cl7.jpg",
    "img/cl8.jpg",
    "img/cl9.jpg",
    "img/cl10.jpg",
    "img/cl11.jpg",
    "img/cl12.jpg",
    "img/cl13.jpg",
    "img/cl14.jpg",
    "img/cl15.jpg",
    "img/cl16.jpg",
    "img/cl17.jpg",
    "img/cl18.jpg",
    "img/cl19.jpg",
    "img/cl20.jpg",
    "img/cl21.jpg",
    "img/cl22.jpg",
    "img/cl23.jpg",
    "img/cl24.jpg",
    "img/cl25.jpg",
    "img/cl26.jpg",
    "img/cl27.jpg",
    "img/cl28.jpg",
    "img/cl29.jpg",
    "img/cl30.jpg",
    "img/cl31.jpg",
    "img/cl32.jpg",
    "img/cl33.jpg",
    "img/cl34.jpg",
    "img/cl35.jpg",
    "img/cl36.jpg",
    "img/cl37.jpg",
    "img/cl38.jpg",
    "img/cl39.jpg",
    "img/cl40.jpg",
    "img/cl41.jpg",
    "img/cl42.jpg",
    "img/cl43.jpg",
    "img/cl44.jpg",
    "img/cl45.jpg",
    "img/cl46.jpg",
    "img/cl47.jpg",
    "img/cl48.jpg",
    "img/cl49.jpg",
    "img/cl50.jpg",
    "img/cl51.jpg",
    "img/cl52.jpg",
    "img/cl53.jpg",
    "img/cl54.jpg",
    "img/cl55.jpg",
    "img/cl56.jpg",
    "img/cl57.jpg",
    "img/cl58.jpg",
    "img/cl59.jpg",

];

//加载页面
function loading() {
    var numbers = 0;
    var length = loading_img_url.length;

    for (var i = 0; i < length; i++) {
        var img = new Image();
        img.src = loading_img_url[i];
        img.onerror = function () {
            numbers += (1 / length) * 100;
        }
        img.onload = function () {
            numbers += (1 / length) * 100;
            $('.number').html(parseInt(numbers) + "%");
            console.log(numbers);
            if (Math.round(numbers) == 100) {
                //$('.number').hide();
                date_end = getNowFormatDate();
                var loading_time = date_end - date_start;
                //预加载图片
                $(function progressbar() {
                    //拼接图片
                    $('.shade').hide();
                    var tagHtml = "";
                    for (var i = 1; i <= 59; i++) {
                        if (i == 1) {
                            tagHtml += ' <div id="first" style="background:url(img/cl' + i + '.jpg) center top no-repeat;background-size:100%"></div>';
                        } else if (i == 59) {
                            tagHtml += ' <div id="end" style="background:url(img/cl' + i + '.jpg) center top no-repeat;background-size:100%"></div>';
                        } else {
                            tagHtml += ' <div style="background:url(img/cl' + i + '.jpg) center top no-repeat;background-size:100%"></div>';
                        }
                    }
                    $(".flipbook").append(tagHtml);
                    var w = $(".graph").width();
                    $(".flipbook-viewport").show();
                });
                //配置turn.js
                function loadApp() {
                    var w = $(window).width();
                    var h = $(window).height();
                    $('.flipboox').width(w).height(h);
                    $(window).resize(function () {
                        w = $(window).width();
                        h = $(window).height();
                        $('.flipboox').width(w).height(h);
                    });
                    $('.flipbook').turn({
                        // Width
                        width: w,
                        // Height
                        height: h,
                        // Elevation
                        elevation: 50,
                        display: 'single',
                        // Enable gradients
                        gradients: true,
                        // Auto center this flipbook
                        autoCenter: true,
                        when: {
                            turning: function (e, page, view) {
                                if (page == 1) {
                                    $(".btnImg").css("display", "none");
                                    $(".mark").css("display", "block");
                                } else {
                                    $(".btnImg").css("display", "block");
                                    $(".mark").css("display", "none");
                                }
                                if (page == 41) {
                                    $(".nextPage").css("display", "none");
                                } else {
                                    $(".nextPage").css("display", "block");
                                }
                            },
                            turned: function (e, page, view) {
                                console.log(page);
                                var total = $(".flipbook").turn("pages");//总页数
                                if (page == 1) {
                                    $(".return").css("display", "none");
                                    $(".btnImg").css("display", "none");
                                } else {
                                    $(".return").css("display", "block");
                                    $(".btnImg").css("display", "block");
                                }
                                if (page == 2) {
                                    $(".catalog").css("display", "block");
                                } else {
                                    $(".catalog").css("display", "none");
                                }
                            }
                        }
                    })
                }
                yepnope({
                    test: Modernizr.csstransforms,
                    yep: ['js/turn.js'],
                    complete: loadApp
                });
            }
            ;
        }
    }
}

function getNowFormatDate() {
    var date = new Date();
    var seperator1 = "";
    var seperator2 = "";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
        + "" + date.getHours() + seperator2 + date.getMinutes()
        + seperator2 + date.getSeconds();
    return currentdate;
}


