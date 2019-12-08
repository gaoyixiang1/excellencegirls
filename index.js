var input = document.getElementsByTagName('input')[0];
var btn = document.getElementsByTagName('input')[1];
var span_list = document.getElementsByTagName("span");
//回车且内容不空则添加便签
input.onkeypress = function(event){
    if(event.keyCode == "13" && input.value != ""){
        addNote();
    }
};
//点击button且内容不空添加便签
btn.onclick = function(){
    if(input.value != ""){
        addNote();
    }
};
//添加便签函数
function addNote(){
    var newdiv_out = document.createElement('div');
    newdiv_out.setAttribute("class","out");
    document.body.appendChild(newdiv_out);

    var newdiv_in = document.createElement('div');
    newdiv_out.appendChild(newdiv_in);
    newdiv_in.setAttribute("class","in");
   

    var span = document.createElement("span");
    newdiv_in.appendChild(span);
    for(var i = 0; i < span_list.length; i++) {
        var j = i+1;
        span_list[i].innerHTML = "note " + j;
    }
    

    var newimg = document.createElement('img');
    newimg.setAttribute("onclick","delNote(this)");
    newimg.src = "img/icon-close.svg";
    newdiv_in.appendChild(newimg);

    var hr = document.createElement('hr');
    newdiv_out.appendChild(hr);

    var textarea = document.createElement('textarea');
    newdiv_out.appendChild(textarea);

    if(input.value != ""){
        textarea.innerText = input.value;
        input.value = null;
    }
}
//删除便签函数
function delNote(e){
    var one_parent = e.parentNode;
    var two_parent = one_parent.parentNode;
    document.body.removeChild(two_parent);
    for(var i = 0; i < span_list.length; i++) {
        var j = i + 1;
        span_list[i].innerHTML ="note " + j;
    } 
}

