let menu = document.getElementById("menu-bar");
let check = 0;

function myFunction() {
    if (check == 0) {
        menu.style.display = "block"
        check = 1;
        
    } else {
        menu.style.display = "none"
        check = 0;
        
    }
}


let Open = document.getElementById("overlay")

function openTh() {
    Open.style.visibility = "visible"
}

function closeTh(){
    Open.style.visibility = "hidden"
}



//--------form------------error---//

let name = document.getElementById("name");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let pass = document.getElementById("password");
let flag = 1;

function validation(){
  
    if(name.value === ""){
        document.getElementById("nerror").innerHTML = "*name is required"
        flag = 0 ;
    }
    else if(name.value.length < 3){
        document.getElementById("nerror").innerHTML="*Name is short"
        flag =0;
    }
    else{
        document.getElementById("nerror").innerHTML = ""
    }
    if(!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        document.getElementById("emerror").innerHTML ="please Enter valid email";
       
        flag = 0;
     }
     else{
        document.getElementById("emerror").innerHTML ="";
       flag =1;
     }
    if (isNaN(phone.value)){
        document.getElementById("perror").innerHTML="please enter number";
        flag =0;
    }
    else if(phone.value <10 ){
        document.getElementById("perror").innerHTML="please enter 10 digit number";
        flag =0;
    }
    else{
        document.getElementById("perror").innerHTML="";
        flag =1;
    } 
    if(pass.value == ""){
        document.getElementById("passerror").innerHTML="enter password"
        flag = 0;
    }
    else if(pass.value < 6){
        document.getElementById("passerror").innerHTML="enter 6 character password"
        flag = 0;
    }
    else{
        document.getElementById("passerror").innerHTML=""
        flag = 1;
    }
    if(flag){
        return true;

    }else{
        return false;
    }
}

//book validation

let name1 = document.getElementById("name1");
let phone1 = document.getElementById("phone1");
let tarikh = document.getElementById("date1");
let city = document.getElementById("city");
let table = document.getElementById("table");
let countt = 0;

let booking = document.getElementById("booking-form")

function validationBook(){
    if(name1.value == ""){
        document.getElementById("error-name").innerHTML="name is required";
        countt = 0;
    }
    else{
        document.getElementById("error-name").innerHTML="";
        countt = 1;
    }
    if(isNaN(phone1.value)){
        document.getElementById("error-phone").innerHTML="please enter number";
        countt =0;
    }
    else if(phone1.value <10 ){
        document.getElementById("error-phone").innerHTML="please enter 10 digit number";
        countt =0;
    }
    else{
        document.getElementById("error-phone").innerHTML="";
        countt =1;
    } 
    if(tarikh.value == ""){
        document.getElementById("date-error").innerHTML="select date"
        countt = 0;
    }
    else{
        document.getElementById("date-error").innerHTML=""
        countt = 1;
    }
    if(city.value == "")
    {
        document.getElementById("city-error").innerHTML="select city"
        countt = 0;
    }
    else{
        document.getElementById("city-error").innerHTML=""
        countt = 1;
    }
    if(table.value == "")
    {
        document.getElementById("table-error").innerHTML="select chair"
        countt = 0;
    }
    else{
        document.getElementById("table-error").innerHTML=""
        countt = 1;
    }
    

   if(countt){
    return true;
    
   }else{
    return false;
   }
   
   
}

  




