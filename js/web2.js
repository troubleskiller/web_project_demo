var dao=document.getElementById('dao');
var two=document.getElementById('two');
var optone=document.getElementById('optone');
var one=document.getElementById('one');
var oneHalf=document.getElementById('oneHalf');
var three=document.getElementById('three');
var four=document.getElementById('four');
var five=document.getElementById('five');
var six=document.getElementById('six');
var but=document.getElementById('but');
var search2=document.getElementById('search2');
two.onmouseover=function(){
    optone.style.display='block';
}
optone.onmouseover=function(){
    dao.style.backgroundColor='white';
    one.style.color='black';
    oneHalf.style.color='black'; 
    two.style.color='black';
    three.style.color='black';
    four.style.color='black';
    five.style.color='black';
    six.style.color='black';
    but.style.color='black';
    search2.setAttribute('src','../source/shopcar.png');

}
optone.onmouseleave=function(){
    dao.style.backgroundColor='transparent';
    one.style.color='white';
    oneHalf.style.color='white'; 
    two.style.color='white';
    three.style.color='white';
    four.style.color='white';
    five.style.color='white';
    six.style.color='white';
    but.style.color='white';
    search2.setAttribute('src','../source/shopcarwhite.png');
    optone.style.display='none';
}
dao.onmouseover=function(){
    dao.style.backgroundColor='white';
    one.style.color='black';
    oneHalf.style.color='black'; 
    two.style.color='black';
    three.style.color='black';
    four.style.color='black';
    five.style.color='black';
    six.style.color='black';
    but.style.color='black';
    search2.setAttribute('src','../source/shopcar.png');
}
dao.onmouseleave=function(){
    dao.style.backgroundColor='transparent';
    one.style.color='white';
    oneHalf.style.color='white'; 
    two.style.color='white';
    three.style.color='white';
    four.style.color='white';
    five.style.color='white';
    six.style.color='white';
    but.style.color='white';
    search2.setAttribute('src','../source/shopcarwhite.png');
    
}



