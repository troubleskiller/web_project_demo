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

        for(var i =4; i>=2; i=i-1){  //产生数组arr = [10,-10,08,-08,....,0]
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

        setInterval(dou,2000); //每5s执行抖动函数。
}
var ele = document.getElementById('input-style')
function moveScrollIntoView(content) {
    setTimeout(() => {
        ele.scrollIntoView(content)
    },500)
}





// 以下是制作滚轮滑动事件触发操作的代码块@author:xlk-20221006-15:44
window.onscroll = function () {
    console.log(h);
    var h = document.documentElement.scrollTop || document.body.scrollTop;
    console.log(h);
    var rel=-0.01*h+2;    
    var rel1=0.003*h-1.5;
    var headerTop = document.getElementById("zuoyi");
    var headerTop2=document.getElementById("youyi");
    var zhe=document.getElementById("zhe");
    var na=document.getElementById("na");
    var model3=document.getElementById('model3');
    var wudi=document.getElementById('wudi');
    var shijia=document.getElementById('shijia')    
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
    } else if(h>=500&&h<=1000){
        headerTop.style.background = "rgba(0,0,0," +rel1+ ")";
        zhe.style.color="rgba(255,255,255," +rel1+ ")";
        zhe.innerHTML="定制我的Model S";
        model3.style.color="rgba(0,0,0," +rel1+ ")";
        shijia.style.color="rgba(0,0,0," +rel1+ ")";
        model3.innerHTML='Model S';
        headerTop2.style.background = "rgba(255,255,255," +rel1+ ")";
            na.style.color="rgba(0,0,0," +rel1+ ")";
    } else if(h>=200&&h<=500){
    headerTop.style.background = "rgba(0,0,0,0.0)";
    zhe.style.color="rgba(255,255,255,0)";
    model3.style.color="rgba(0,0,0,0)";
    shijia.style.color="rgba(0,0,0,0)";
    model3.innerHTML='Model S';
    headerTop2.style.background = "rgba(255,255,255,0.0)";
        na.style.color="rgba(0,0,0,0)";
        na.innerHTML="了解Model S";
    }else if(h>0&&h<100){
        headerTop.style.background = "rgba(0,0,0,1)";
        zhe.style.color="rgba(255,255,255,1)";
        model3.style.color="rgba(0,0,0,1)";  
        shijia.style.color="rgba(0,0,0,1)";  
        model3.innerHTML='Model 3';
        headerTop2.style.background = "rgba(255,255,255,1)"; 
        na.style.color="rgba(0,0,0,1)";   
    }else{
        headerTop.style.background = "rgba(0,0,0,1)";
        zhe.style.color="rgba(255,255,255,1)";
        model3.style.color="rgba(0,0,0,1)";  
        shijia.style.color="rgba(0,0,0,1)"; 
        headerTop2.style.background = "rgba(255,255,255,1)";
        na.style.color="rgba(0,0,0,1)";     
    }
    

}
