// @author:xlk
var meaubar=document.getElementById('meaubar');
var dianpuhuodong=document.getElementById('dianpuhuodong');
var drop_down_menu_dianpuhuodong=document.getElementById('drop_down_menu_dianpuhuodong');
var shangbiao=document.getElementById('shangbiao');
var shangdianwenzi=document.getElementById('shangdianwenzi');
var chongdianchanpin=document.getElementById('chongdianchanpin');
var peijian=document.getElementById('peijian');
var peishi=document.getElementById('peishi');
var zhoubian=document.getElementById('zhoubian');
var daohanglan=document.getElementById('daohanglan');
var search2=document.getElementById('search2');
var drop_down_menu_chongdianchanpin=document.getElementById('drop_down_menu_chongdianchanpin');
var drop_down_menu_peijian=document.getElementById('drop_down_menu_peijian');
var drop_down_menu_peishi=document.getElementById('drop_down_menu_peishi');
var drop_down_menu_zhoubian=document.getElementById('drop_down_menu_zhoubian');

// 20-205行的js代码为针对meau bar的下拉菜单变化需求的制作


dianpuhuodong.onmouseover=function(){
    drop_down_menu_dianpuhuodong.style.display='block';
    drop_down_menu_chongdianchanpin.style.display='none';
    drop_down_menu_peijian.style.display='none';
    drop_down_menu_peishi.style.display='none';
    drop_down_menu_zhoubian.style.display='none';
}
drop_down_menu_dianpuhuodong.onmouseover=function(){
    meaubar.style.backgroundColor='white';
    shangbiao.style.color='black';
    shangdianwenzi.style.color='black'; 
    dianpuhuodong.style.color='black';
    chongdianchanpin.style.color='black';
    peijian.style.color='black';
    peishi.style.color='black';
    zhoubian.style.color='black';
    daohanglan.style.color='black';
    search2.setAttribute('src','../source/shopwebsite/barimg/top/shopcar.png');

}
drop_down_menu_dianpuhuodong.onmouseleave=function(){
    meaubar.style.backgroundColor='transparent';
    shangbiao.style.color='white';
    shangdianwenzi.style.color='white'; 
    dianpuhuodong.style.color='white';
    chongdianchanpin.style.color='white';
    peijian.style.color='white';
    peishi.style.color='white';
    zhoubian.style.color='white';
    daohanglan.style.color='white';
    search2.setAttribute('src','../source/shopwebsite/barimg/top/shopcarwhite.png');
    drop_down_menu_dianpuhuodong.style.display='none';
}
meaubar.onmouseover=function(){
    meaubar.style.backgroundColor='white';
    shangbiao.style.color='black';
    shangdianwenzi.style.color='black'; 
    dianpuhuodong.style.color='black';
    chongdianchanpin.style.color='black';
    peijian.style.color='black';
    peishi.style.color='black';
    zhoubian.style.color='black';
    daohanglan.style.color='black';
    search2.setAttribute('src','../source/shopwebsite/barimg/top/shopcar.png');
}
meaubar.onmouseleave=function(){
    meaubar.style.backgroundColor='transparent';
    shangbiao.style.color='white';
    shangdianwenzi.style.color='white'; 
    dianpuhuodong.style.color='white';
    chongdianchanpin.style.color='white';
    peijian.style.color='white';
    peishi.style.color='white';
    zhoubian.style.color='white';
    daohanglan.style.color='white';
    search2.setAttribute('src','../source/shopwebsite/barimg/top/shopcarwhite.png');
    
}
chongdianchanpin.onmouseover=function(){
    drop_down_menu_chongdianchanpin.style.display='block';
    drop_down_menu_dianpuhuodong.style.display='none';
    drop_down_menu_peijian.style.display='none';
    drop_down_menu_peishi.style.display='none';
    drop_down_menu_zhoubian.style.display='none';
}
drop_down_menu_chongdianchanpin.onmouseover=function(){
    meaubar.style.backgroundColor='white';
    shangbiao.style.color='black';
    shangdianwenzi.style.color='black'; 
    dianpuhuodong.style.color='black';
    chongdianchanpin.style.color='black';
    peijian.style.color='black';
    peishi.style.color='black';
    zhoubian.style.color='black';
    daohanglan.style.color='black';
    search2.setAttribute('src','../source/shopwebsite/barimg/top/shopcar.png');
}
drop_down_menu_chongdianchanpin.onmouseleave=function(){
    meaubar.style.backgroundColor='transparent';
    shangbiao.style.color='white';
    shangdianwenzi.style.color='white'; 
    dianpuhuodong.style.color='white';
    chongdianchanpin.style.color='white';
    peijian.style.color='white';
    peishi.style.color='white';
    zhoubian.style.color='white';
    daohanglan.style.color='white';
    search2.setAttribute('src','../source/shopwebsite/barimg/top/shopcarwhite.png');
    drop_down_menu_chongdianchanpin.style.display='none';
}
drop_down_menu_peijian.onmouseover=function(){
    meaubar.style.backgroundColor='white';
    shangbiao.style.color='black';
    shangdianwenzi.style.color='black'; 
    dianpuhuodong.style.color='black';
    chongdianchanpin.style.color='black';
    peijian.style.color='black';
    peishi.style.color='black';
    zhoubian.style.color='black';
    daohanglan.style.color='black';
    search2.setAttribute('src','../source/shopwebsite/barimg/top/shopcar.png');
}
drop_down_menu_peijian.onmouseleave=function(){
    meaubar.style.backgroundColor='transparent';
    shangbiao.style.color='white';
    shangdianwenzi.style.color='white'; 
    dianpuhuodong.style.color='white';
    chongdianchanpin.style.color='white';
    peijian.style.color='white';
    peishi.style.color='white';
    zhoubian.style.color='white';
    daohanglan.style.color='white';
    search2.setAttribute('src','../source/shopwebsite/barimg/top/shopcarwhite.png');
    drop_down_menu_peijian.style.display='none';
}
peijian.onmouseover=function(){
    drop_down_menu_dianpuhuodong.style.display='none';
    drop_down_menu_chongdianchanpin.style.display='none';
    drop_down_menu_peijian.style.display='block';
    drop_down_menu_peishi.style.display='none';
    drop_down_menu_zhoubian.style.display='none';
}
peishi.onmouseover=function(){
    drop_down_menu_dianpuhuodong.style.display='none';
    drop_down_menu_chongdianchanpin.style.display='none';
    drop_down_menu_peijian.style.display='none';
    drop_down_menu_peishi.style.display='block';
    drop_down_menu_zhoubian.style.display='none';
}
zhoubian.onmouseover=function(){
    drop_down_menu_dianpuhuodong.style.display='none';
    drop_down_menu_chongdianchanpin.style.display='none';
    drop_down_menu_peijian.style.display='none';
    drop_down_menu_peishi.style.display='none';
    drop_down_menu_zhoubian.style.display='block';
}
drop_down_menu_peishi.onmouseover=function(){
    meaubar.style.backgroundColor='white';
    shangbiao.style.color='black';
    shangdianwenzi.style.color='black'; 
    dianpuhuodong.style.color='black';
    chongdianchanpin.style.color='black';
    peijian.style.color='black';
    peishi.style.color='black';
    zhoubian.style.color='black';
    daohanglan.style.color='black';
    search2.setAttribute('src','../source/shopwebsite/barimg/top/shopcar.png');
}
drop_down_menu_peishi.onmouseleave=function(){
    meaubar.style.backgroundColor='transparent';
    shangbiao.style.color='white';
    shangdianwenzi.style.color='white'; 
    dianpuhuodong.style.color='white';
    chongdianchanpin.style.color='white';
    peijian.style.color='white';
    peishi.style.color='white';
    zhoubian.style.color='white';
    daohanglan.style.color='white';
    search2.setAttribute('src','../source/shopwebsite/barimg/top/shopcarwhite.png');
    drop_down_menu_peishi.style.display='none';
}
drop_down_menu_zhoubian.onmouseover=function(){
    meaubar.style.backgroundColor='white';
    shangbiao.style.color='black';
    shangdianwenzi.style.color='black'; 
    dianpuhuodong.style.color='black';
    chongdianchanpin.style.color='black';
    peijian.style.color='black';
    peishi.style.color='black';
    zhoubian.style.color='black';
    daohanglan.style.color='black';
    search2.setAttribute('src','../source/shopwebsite/barimg/top/shopcar.png');
}
drop_down_menu_zhoubian.onmouseleave=function(){
    meaubar.style.backgroundColor='transparent';
    shangbiao.style.color='white';
    shangdianwenzi.style.color='white'; 
    dianpuhuodong.style.color='white';
    chongdianchanpin.style.color='white';
    peijian.style.color='white';
    peishi.style.color='white';
    zhoubian.style.color='white';
    daohanglan.style.color='white';
    search2.setAttribute('src','../source/shopwebsite/barimg/top/shopcarwhite.png');
    drop_down_menu_zhoubian.style.display='none';
}



window.onscroll = function () {    
    var h = document.documentElement.scrollTop || document.body.scrollTop;
    var changeTransparentFx=0.01*h;
    if(h>=0&&h<100){
        meaubar.style.background="rgba(255,255,255,"+changeTransparentFx+")";
        shangbiao.style.color='white';
        shangdianwenzi.style.color='white'; 
        dianpuhuodong.style.color='white';
        chongdianchanpin.style.color='white';
        peijian.style.color='white';
        peishi.style.color='white';
        zhoubian.style.color='white';
        daohanglan.style.color='white';
        search2.setAttribute('src','../source/shopwebsite/barimg/top/shopcarwhite.png');
    }else{
        meaubar.style.backgroundColor='white';
        shangbiao.style.color='black';
        shangdianwenzi.style.color='black'; 
        dianpuhuodong.style.color='black';
        chongdianchanpin.style.color='black';
        peijian.style.color='black';
        peishi.style.color='black';
        zhoubian.style.color='black';
        daohanglan.style.color='black';
        search2.setAttribute('src','../source/shopwebsite/barimg/top/shopcar.png');
    }
}

var peripheralProductsDiv=document.getElementById('peripheralProductsDiv');
var peripheralProductsLink=document.getElementById('peripheralProductsLink');
var nanZhuangDiv=document.getElementById('nanZhuangDiv');
var nvZhuangDiv=document.getElementById('nvZhuangDiv');
var tongZhuangDiv=document.getElementById('tongZhuangDiv');
var nanZhuangLink=document.getElementById('nanZhuangLink');
var nvZhuangLink=document.getElementById('nvZhuangLink');
var tongZhuangLink=document.getElementById('tongZhuangLink');
peripheralProductsDiv.onmouseover=function(){
    this.style.backgroundColor='black';
    peripheralProductsLink.style.color='white';
}
peripheralProductsDiv.onmouseleave=function(){
    this.style.backgroundColor='white';
    peripheralProductsLink.style.color='black';
}
nanZhuangDiv.onmouseover=function(){
    this.style.backgroundColor='black';
    nanZhuangLink.style.color='white';
}
nanZhuangDiv.onmouseleave=function(){
    this.style.backgroundColor='white';
    nanZhuangLink.style.color='black';
}
nvZhuangDiv.onmouseover=function(){
    this.style.backgroundColor='black';
    nvZhuangLink.style.color='white';
}
nvZhuangDiv.onmouseleave=function(){
    this.style.backgroundColor='white';
    nvZhuangLink.style.color='black';
}
tongZhuangDiv.onmouseover=function(){
    this.style.backgroundColor='black';
    tongZhuangLink.style.color='white';
}
tongZhuangDiv.onmouseleave=function(){
    this.style.backgroundColor='white';
    tongZhuangLink.style.color='black';
}

var closeLink=document.getElementById('closeLink');
var feedbackMeau=document.getElementById('feedbackMeau');
var liaotian=document.getElementById('liaotian');
closeLink.onclick=function(){
    feedbackMeau.style.display='none';
}
liaotian.onclick=function(){
    feedbackMeau.style.display='block';
}

