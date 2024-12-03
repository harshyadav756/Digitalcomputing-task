

var myinputbox = document.getElementbyid("inputbox")
function input1(){
    document.getElementById("inputbox").value +="1"
}
function input2(){
    document.getElementById("inputbox") .value +="2"
}
function input3(){
    document.getElementById("inputbox").value +="3"
}
function input4(){
    document.getElementById("inputbox").value +="4"
}
function input5(){
    document.getElementById("inputbox").value +="5"
}
function input6(){
    document.getElementById("inputbox").value +="6"
}
function input7(){
     document.getElementById("inputbox").value +="7"
}
function input8(){
     document.getElementById("inputbox").value +="8"
}
function input9(){
     document.getElementById("inputbox").value +="9"
}
function input0(){
     document.getElementById("inputbox").value +="0"
}


function add(){
    document.getElementById("inputbox").value += "+"
}

function sub(){
    document.getElementById("inputbox").value += "-"
}

function mul(){
    document.getElementById("inputbox").value += "*"
}
function div(){
    document.getElementById("inputbox").value += "/"
}
function per(){
    document.getElementById("inputbox").value += "%"
}
function result(){
    document.getElementById("inputbox").value = eval( document.getElementById("inputbox").value)
}