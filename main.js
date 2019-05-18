var res2= new Array();
var ww="";
var ww2="";
var text="";
//var  ff=false;
var tt="";

var vvv=0;
function add1() {
    var num1,num2;
    num1=document.getElementById('n1').value;
    num2=document.getElementById('n2').value;
    num1=parseInt(num1);
    num2=parseInt(num2);

    document.getElementById('res').innerText=num1+num2;
    console.log(num1+num2);
}

function min() {
    var num1,num2;
    num1=document.getElementById('n1').value;
    num2=document.getElementById('n2').value;
    num1=parseInt(num1);
    num2=parseInt(num2);

    document.getElementById('res').innerText=num1-num2;
    console.log(num1-num2);
}


function mul() {
    var num1,num2;
    num1=document.getElementById('n1').value;
    num2=document.getElementById('n2').value;
    num1=parseInt(num1);
    num2=parseInt(num2);

    document.getElementById('res').innerText=num1*num2;
    console.log(num1*num2);
}

function del() {
    var num1,num2;
    num1=document.getElementById('n1').value;
    num2=document.getElementById('n2').value;
    num1=parseInt(num1);
    num2=parseInt(num2);

    document.getElementById('res').innerText=num1/num2;
    console.log(num1/num2);
}


function vvod(a) {



    ww=ww+a;
    document.getElementById('result1').innerText=ww;
    console.log(ww);

}

function n1() {vvod(1);}
function n2() {vvod(2);}
function n3() {vvod(3);}
function n4() {vvod(4);}
function n5() {vvod(5);}
function n6() {vvod(6);}
function n7() {vvod(7);}
function n8() {vvod(8);}
function n9() {vvod(9);}
function n0() {vvod(0);}
function eqe() {

    if (text=="-") {  vvv=parseInt(ww2)-parseInt(ww);    ww2= ""+vvv ;   document.getElementById('result1').innerText= ww2;  }
    if (text=="+") {  vvv=parseInt(ww2)+parseInt(ww);    ww2= ""+vvv ;   document.getElementById('result1').innerText= ww2;     }
    if (text=="*") { document.getElementById('result1').innerText= parseInt(ww2)*parseInt(ww); ww2=parseInt(ww2)*parseInt(ww);}
    if (text=="/") { document.getElementById('result1').innerText= parseInt(ww2)/parseInt(ww); ww2=parseInt(ww2)/parseInt(ww);}


}





function cc1() {


    if (ww==""){ww2=""; vvv=0;}
    ww="";
    document.getElementById('result1').innerText=ww;
}

function min() {

    if (ww!=="") {

        if (ww2==""){ww2=ww;}
        ww="";

    }

    text="-";




}

function del() {

    if (ww!=="") {

        if (ww2==""){ww2=ww;}
        ww="";

    }

    text="/";



}

function mul() {
    //

    if (ww!=="") {

        if (ww2==""){ww2=ww;}
        ww="";

    }

    text="*";



}

function add1() {


    if (ww!=="") {

        if (ww2==""){ww2=ww;}
        ww="";

        }

    text="+";




}


var df=function (x,y) {

    console.log(x+y);

}

df(5,6);
df(11,9);


function cv (x,y) {

    console.log(x+y);

}

cv(10,50)


