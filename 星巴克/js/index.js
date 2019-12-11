var menu=document.getElementsByClassName('menu_ico')[0];
var close=document.getElementsByClassName('close')[0];
var indexShow=document.getElementsByClassName('leftBorad')[0];
var otherShow=document.getElementById('leftBoard');
menu.onclick=function indexshow(){
    indexShow.style.visibility='hidden';
    otherShow.style.visibility='visible';
    return false;
}
close.onclick=function othershow(){
    indexShow.style.visibility='visible';
    otherShow.style.visibility='hidden';
    return false;
}

