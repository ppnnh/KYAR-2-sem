footer = document.getElementById("inf");
phone = document.getElementById("ph");
email = document.getElementById("m");
url = document.getElementById("url");
num = document.getElementById("num");
ran = document.getElementById("ran");
function addPhone() {
    footer.innerHTML += "Телефон: " + phone.value + "<br>";
}
function addMail() {
    footer.innerHTML += "Электронная почта: " + email.value + "<br>";
}
function addUrl() {
    footer.innerHTML += "Ссылка: " + url.value + "<br>";
}
function addNum() {
    footer.innerHTML += "Число_1: " + num.value + "<br>";
}
function addRan() {
    footer.innerHTML += "Число_2: " + ran.value + "<br>";
}













// function funct1() 
// { 
// var Mail = document.forms.test.email.value; 
// var Url = document.forms.test.url.value; 
// var Tel = document.forms.test.phone.value;
// var Num = document.forms.test.num.value; 
// var Clock = document.forms.test.clock.value; 
// var Color = document.forms.test.color.value; 
// var Window1=window.open("","PrintWindow","width=50,height=500"); 
// var newDiv = Window1.document.createElement("div"); 
// newDiv.innerHTML =("<br/>Почта "+Mail+"<br/>Ссылка "+Url+ "<br/>Номер телефона "+Tel+"<br/>Числа "+Num+" "+Clock+"</br>Цвет "+Color+"<br/>"); 
// Window1.document.body.appendChild(newDiv); 
// var List1=Window1.document.createElement("ul"); 
// Window1.document.body.appendChild(List1); 
// for(i=0;i<n;i++){ 
// if(arr[i]!=0){ 
// let str=Window1.document.createElement("li"); 
// str.innerHTML=(arr[i]); 
// List1.insertBefore(str,List1.lastChild); 
// } 
// } 
// } 
// var buton=document.getElementById("print"); 
// buton.addEventListener("click",funct1); 
