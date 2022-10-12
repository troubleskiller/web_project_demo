var ab=document.getElementsByClassName('top');

for(var i=0;i<ab.length;i++){
    ab[i].onmouseover=function(){
    this.style.backgroundColor='#999';
    
}
}
for(var i=0;i<ab.length;i++){
    ab[i].onmouseleave=function(){
    this.style.backgroundColor='transparent';
}}
var ab1=document.getElementsByClassName('top1');
for(var i=0;i<ab1.length;i++){
    ab1[i].onmouseover=function(){
    this.style.backgroundColor='#999';
    } 
}
for(var i=0;i<ab1.length;i++){
    ab1[i].onmouseleave=function(){
    this.style.backgroundColor='transparent';
}}
function getStyle ( obj, attr ) {
    return obj.currentStyle?obj.currentStyle[attr] : getComputedStyle( obj )[attr];
}
window.onload = function ()
{
var img1 = document.getElementById('img');
var arr = [];

        for(var i =4; i>=2; i=i-1){  
            arr.push(i);
            arr.push(-i);
        }
        function dou() { //抖动函数
            var i = 0;
            var timer = setInterval(function (){

                    if(i>=arr.length){
                        clearInterval(timer);
                    }
                    img1.style.top = arr[i] + 'px'; //根据arr数组定时修改div的top值。
                    i=i+1;

            },100);


        }

        setInterval(dou,2000); 
}
var ele = document.getElementById('input-style')
function moveScrollIntoView(content) {
    setTimeout(() => {
        ele.scrollIntoView(content)
    },500)
}





// 以下是制作滚轮滑动事件触发操作的代码块@author:xlk-20221006-15:44
window.onscroll = function () {
    
    var h = document.documentElement.scrollTop || document.body.scrollTop;
    console.log(h);
    var rel=-0.01*h+2;    
    var rel1=0.003*h-1.5;
    var reller=-0.01*h+12;
    var rell=0.002*h-3;
    var reu=-0.005*h+12;
    var ree=0.005*h-13;
    var reel=-0.005*h+16;
    var relt=0.005*h-18;
    console.log(reu);
    var headerTop = document.getElementById("zuoyi");
    var headerTop2=document.getElementById("youyi");
    var zhe=document.getElementById("zhe");
    var na=document.getElementById("na");
    var model3=document.getElementById('model3');
    var wudi=document.getElementById('wudi');
    var shijia=document.getElementById('shijia');
    var zhongjian=document.getElementById('zhongjian');
    var knowALot=document.getElementById('knowALot');    
    if(h>=100&&h<=200){
        headerTop.style.background = "rgba(0,0,0," +rel+ ")"; 
        zhe.style.color="rgba(255,255,255," +rel+ ")"; 
        zhe.innerHTML="定制我的Model 3";
        model3.color="rgba(0,0,0," +rel+ ")";
        shijia.color="rgba(0,0,0," +rel+ ")";
        model3.innerHTML='Model 3';
        headerTop2.style.background = "rgba(255,255,255," +rel+ ")"; 
        na.style.color="rgba(0,0,0," +rel+ ")";
        na.innerHTML="了解Model 3";
        headerTop.style.display='block';
        headerTop2.style.display='block';
        wudi.style.display='block';
        zhongjian.style.display='none';
        shijia.style.textDecoration='underline';
        zhe.href="https://www.tesla.cn/model3/design#overview";
        na.href="https://www.tesla.cn/model3";
        shijia.href="https://www.tesla.cn/drive";
        knowALot.display='none';
    } else if(h>=500&&h<=1000){
        headerTop.style.background = "rgba(0,0,0," +rel1+ ")";
        zhe.style.color="rgba(255,255,255," +rel1+ ")";
        zhe.innerHTML="定制我的Model Y";
        model3.style.color="rgba(0,0,0," +rel1+ ")";
        shijia.style.color="rgba(0,0,0," +rel1+ ")";
        model3.innerHTML='Model Y';
        headerTop2.style.background = "rgba(255,255,255," +rel1+ ")";
        na.style.color="rgba(0,0,0," +rel1+ ")";
        headerTop.style.display='block';
        headerTop2.style.display='block';
        wudi.style.display='block';
        zhongjian.style.display='none';
        shijia.style.textDecoration='underline';
        knowALot.display='none';
    } else if(h>=200&&h<=500){
    headerTop.style.background = "rgba(0,0,0,0.0)";
    zhe.style.color="rgba(255,255,255,0)";
    model3.style.color="rgba(0,0,0,0)";
    shijia.style.color="rgba(0,0,0,0)";
    model3.innerHTML='Model S';
    headerTop2.style.background = "rgba(255,255,255,0.0)";
        na.style.color="rgba(0,0,0,0)";
        na.innerHTML="了解Model Y";
        headerTop.style.display='block';
        headerTop2.style.display='block';
        wudi.style.display='block';
        zhongjian.style.display='none';
        shijia.style.textDecoration='underline';
        zhe.href="https://www.tesla.cn/modely/design#overview";
        na.href="https://www.tesla.cn/modely";
        shijia.href="https://www.tesla.cn/drive";
        knowALot.display='none';
    }else if(h>=0&&h<100){
        headerTop.style.background = "rgba(0,0,0,1)";
        zhe.style.color="rgba(255,255,255,1)";
        model3.style.color="rgba(0,0,0,1)";  
        shijia.style.color="rgba(0,0,0,1)";  
        model3.innerHTML='Model 3';
        headerTop2.style.background = "rgba(255,255,255,1)"; 
        na.style.color="rgba(0,0,0,1)";  
        headerTop.style.display='block';
        headerTop2.style.display='block';
        wudi.style.display='block'; 
        zhongjian.style.display='none';
        shijia.style.textDecoration='underline';
        zhe.href="https://www.tesla.cn/model3/design#overview";
        na.href="https://www.tesla.cn/model3";
        shijia.href="https://www.tesla.cn/drive";
        knowALot.display='none';
    }else if(h>500&&h<1000){
        headerTop.style.background = "rgba(0,0,0,1)";
        zhe.style.color="rgba(255,255,255,1)";
        model3.style.color="rgba(0,0,0,1)";  
        shijia.style.color="rgba(0,0,0,1)"; 
        headerTop2.style.background = "rgba(255,255,255,1)";
        na.style.color="rgba(0,0,0,1)"; 
        headerTop.style.display='block';
        headerTop2.style.display='block';
        wudi.style.display='block';
        zhongjian.style.display='none';
        shijia.style.textDecoration='underline';
        zhe.href="https://www.tesla.cn/modely/design#overview";
        na.href="https://www.tesla.cn/modely";
        shijia.href="https://www.tesla.cn/drive"; 
        knowALot.display='none';
    }else if(h>=1100&&h<=1200){
        headerTop.style.background = "rgba(0,0,0," +reller+ ")"; 
        zhe.style.color="rgba(255,255,255," +reller+ ")"; 
        zhe.innerHTML="定制我的Model Y";
        model3.color="rgba(0,0,0," +reller+ ")";
        shijia.color="rgba(0,0,0," +reller+ ")";
        model3.innerHTML='Model Y';
        headerTop2.style.background = "rgba(255,255,255," +reller+ ")"; 
        na.style.color="rgba(0,0,0," +reller+ ")";
        na.innerHTML="了解Model Y";
        headerTop.style.display='block';
        headerTop2.style.display='block';
        wudi.style.display='block';
        zhongjian.style.display='none';
        shijia.style.textDecoration='underline';
        knowALot.display='none';
        zhe.href="https://www.tesla.cn/modely/design#overview";
        na.href="https://www.tesla.cn/modely";
        shijia.href="https://www.tesla.cn/drive"; 
    }
    else if(h>1200&&h<=1500){
        headerTop.style.background = "rgba(0,0,0,0.0)";
        zhe.style.color="rgba(255,255,255,0)";
        model3.style.color="rgba(0,0,0,0)";
        shijia.style.color="rgba(0,0,0,0)";
        model3.innerHTML='Model X';
        headerTop2.style.background = "rgba(255,255,255,0.0)";
        na.style.color="rgba(0,0,0,0)";
        na.innerHTML="了解Model X";
        zhe.innerHTML="定制我的Model X";
        headerTop.style.display='block';
        headerTop2.style.display='block';
        wudi.style.display='block';
        zhongjian.style.display='none';
        shijia.style.textDecoration='underline';
        knowALot.display='none';
        zhe.href="https://www.tesla.cn/modelx/design#overview";
        na.href="https://www.tesla.cn/modelx";
        shijia.href="https://www.tesla.cn/drive"; 
    }
    else if(h>=1000&&h<1100){
        headerTop.style.background = "rgba(0,0,0,1)";
        zhe.style.color="rgba(255,255,255,1)";
        model3.style.color="rgba(0,0,0,1)";  
        shijia.style.color="rgba(0,0,0,1)";       
        headerTop2.style.background = "rgba(255,255,255,1)"; 
        na.style.color="rgba(0,0,0,1)"; 
        model3.innerHTML='Model Y';
        headerTop.style.display='block';
        headerTop2.style.display='block';
        wudi.style.display='block';
        zhongjian.style.display='none';
        shijia.style.textDecoration='underline';
        knowALot.display='none';
        zhe.href="https://www.tesla.cn/modely/design#overview";
        na.href="https://www.tesla.cn/modely";
        shijia.href="https://www.tesla.cn/drive"; 
    }else if(h>=1500&&h<2000){
        headerTop.style.background = "rgba(0,0,0," +rell+ ")";
        zhe.style.color="rgba(255,255,255," +rell+ ")";
        zhe.innerHTML="定制我的Model X";
        model3.style.color="rgba(0,0,0," +rell+ ")";
        shijia.style.color="rgba(0,0,0," +rell+ ")";
        model3.innerHTML='Model X';
        headerTop2.style.background = "rgba(255,255,255," +rell+ ")";
        na.style.color="rgba(0,0,0," +rell+ ")";
        headerTop.style.display='block';
        headerTop2.style.display='block';
        wudi.style.display='block';
        zhongjian.style.display='none';
        shijia.style.textDecoration='underline';
        zhe.href="https://www.tesla.cn/modelx/design#overview";
        na.href="https://www.tesla.cn/modelx";
        shijia.href="https://www.tesla.cn/drive"; 
        knowALot.display='none';
    }else if(h>=2000&&h<2200){
        headerTop.style.background = "rgba(0,0,0,1)";
        zhe.style.color="rgba(255,255,255,1)";
        model3.style.color="rgba(0,0,0,1)";  
        shijia.style.color="rgba(0,0,0,1)"; 
        headerTop2.style.background = "rgba(255,255,255,1)";
        na.style.color="rgba(0,0,0,1)";  
        zhe.innerHTML="定制我的Model X";   
        na.innerHTML="了解Model X";
        model3.innerHTML='Model X';
        headerTop.style.display='block';
        headerTop2.style.display='block';
        wudi.style.display='block';
        shijia.innerHTML='预约试驾';
        zhongjian.style.display='none';
        shijia.style.textDecoration='underline';
        knowALot.display='none';
        zhe.href="https://www.tesla.cn/modelx/design#overview";
        na.href="https://www.tesla.cn/modelx";
        shijia.href="https://www.tesla.cn/drive"; 
    }else if(h>=2200&&h<=2400){
        model3.style.color="rgba(0,0,0," +reu+ ")";
        zuoyi.style.display='block';
        youyi.style.display='block';
        shijia.innerHTML='预约试驾';
        model3.innerHTML='Model X';
        shijia.color="rgba(0,0,0," +reu+ ")";
        zhongjian.style.display='none';
        headerTop.style.display='block';
        headerTop2.style.display='block';
        headerTop.style.background = "rgba(0,0,0," +reu+ ")"; 
        headerTop2.style.background = "rgba(255,255,255," +reu+ ")"; 
        wudi.style.display='block';
        shijia.style.textDecoration='underline';
        knowALot.display='none';
        zhe.href="https://www.tesla.cn/modelx/design#overview";
        na.href="https://www.tesla.cn/modelx";
        shijia.href="https://www.tesla.cn/drive";
    }else if(h>2200&&h<=2600){
        headerTop.style.display='none';
        headerTop2.style.display='none';
        shijia.innerHTML='全方位能源供应';
        model3.innerHTML='太阳能设备和 Powerwall';
        shijia.style.color="rgba(0,0,0,0)";
        model3.style.color="rgba(0,0,0,0)";
        zhongjian.style.display='none';
        wudi.style.display='block';
        shijia.style.textDecoration='underline';
        knowALot.display='none';        
        shijia.href="none";
        knowALot.href="https://www.tesla.cn/energy";

    }else if(h>2600&&h<=2800)  {
        headerTop.style.display='none';
        headerTop2.style.display='none';
        zhongjian.style.display='block';
        wudi.style.display='block';
        shijia.innerHTML='全方位能源供应';
        model3.innerHTML='太阳能设备和 Powerwall';
        model3.style.color="rgba(0,0,0," +ree+ ")";
        shijia.style.color="rgba(0,0,0," +ree+ ")";
        shijia.style.textDecoration='none';
        knowALot.style.color="rgba(255,255,255," +ree+ ")";
        zhongjian.style.background = "rgba(0,0,0," +ree+ ")";
        knowALot.display='block';
        knowALot.href="https://www.tesla.cn/energy";

    } else if(h>=2800&&h<3000){
        headerTop.style.display='none';
        headerTop2.style.display='none';
        zhongjian.style.display='block';
        wudi.style.display='block';
        shijia.innerHTML='全方位能源供应';
        model3.innerHTML='太阳能设备和 Powerwall';
        model3.style.color="rgba(0,0,0,1)";
        shijia.style.color="rgba(0,0,0,1)";
        shijia.style.textDecoration='none';
        knowALot.style.color="rgba(255,255,255,1)";
        zhongjian.style.background = "rgba(0,0,0,1)";
        knowALot.display='block';
        knowALot.href="https://www.tesla.cn/energy";
    }else if(h>=3000&&h<=3600){
        headerTop.style.display='none';
        headerTop2.style.display='none';
        zhongjian.style.display='block';
        wudi.style.display='block';
        shijia.innerHTML='全方位能源供应';
        model3.innerHTML='太阳能设备和 Powerwall';
        shijia.style.textDecoration='none';
        model3.style.color="rgba(0,0,0," +reel+ ")";
        shijia.style.color="rgba(0,0,0," +reel+ ")";
        knowALot.style.color="rgba(255,255,255," +reel+ ")";
        zhongjian.style.background = "rgba(0,0,0," +reel+ ")";
        knowALot.href="https://www.tesla.cn/energy";
        knowALot.display='block';
    }else {
        headerTop.style.display='none';
        headerTop2.style.display='none';
        zhongjian.style.display='block';
        wudi.style.display='none';
        model3.innerHTML='充电产品和精品配件';
        knowALot.innerHTML='立即购买';
        model3.style.color="rgba(0,0,0," +relt+ ")";
        knowALot.style.color="rgba(255,255,255," +relt+ ")";
        zhongjian.style.background = "rgba(0,0,0," +relt+ ")";
        knowALot.display='block';
        knowALot.href="https://shop.tesla.cn/";
        
    }
}
