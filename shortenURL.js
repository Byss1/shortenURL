/*
* @Author: Administrator
* @Date:   2016-07-19 14:05:40
* @Last Modified by:   Administrator
* @Last Modified time: 2016-07-19 19:32:41
*/

// var shortURL=getAjaxData(api,postData,ajaxType,path);
var shortURL="";
$("#confirm").on("click",function(){
    var longURL=$("#getURL").val(); //取得长URL
    var choose=$("#apiChoose").val();   //选择的API
    if(choose=="baidu"){
        $.ajax({
            url: "http://dwz.cn/create.php",
            data: {"url":longURL,"access_type":"web"},
            type: "post",
            error: function(){console.log(获取失败);},
            success: function(gotData){
                var jsonData=JSON.parse(gotData);
                var shortURL=jsonData.tinyurl;
                $("#responseURL").val(shortURL);
            }
        });
    }
    else if(choose=="sinaapp"){
        $.ajax({
            url: "http://jump.sinaapp.com/api.php",
            data: {"url_long":longURL},
            type: "post",
            error: function(){console.log(获取失败);},
            success: function(gotData){
                var jsonData=JSON.parse(gotData);
                var shortURL=jsonData.url_short;
                $("#responseURL").val(shortURL);
            }
        });
    }
});