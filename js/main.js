var formValues = {name, email, password, rpassword, age, phone, adress, city, zip, dni};
var errorValues = ["Full name field"," Email field"," Password field"," Repeat password field"," Age field"," Phone field"," Adress field"," City field"," Zip Field"," DNI field"];
// Full name field
var fullName = document.getElementById('name');
var error1 = document.getElementById('error1');
function handleOnBlur1(e){
   if(nameValidation(e.target.value)){
       formValues.name = e.target.value;
       errorValues[0] = "";
   }else{
        error1.style.display = 'block';
        formValues.name = undefined;
        errorValues[0] = "Full name field";
   }
}
fullName.addEventListener('blur', handleOnBlur1);
function handleOnFocus1(){
    error1.style.display = 'none';
}
fullName.addEventListener('focus', handleOnFocus1);
// Email field
var eMail = document.getElementById('email');
var error2 = document.getElementById('error2');
function handleOnBlur2(e){
    if(emailValidation(e.target.value)){
        formValues.email = e.target.value;
        errorValues[1] = "";
    }else{
        error2.style.display = 'block';
        formValues.email = undefined;
        errorValues[1] = " Email field";
    }
}
eMail.addEventListener('blur', handleOnBlur2);
function handleOnFocus2(){
    error2.style.display = 'none';
}
eMail.addEventListener('focus', handleOnFocus2);
// Password field
var password = document.getElementById('password');
var error3 = document.getElementById('error3');
function handleOnBlur3(e){
    if(passwordValidation(e.target.value)){
        formValues.password = e.target.value;
        errorValues[2] = "";
    }else{
        error3.style.display = 'block';
        formValues.password = undefined;
        errorValues[2] = " Password field";
    }
}
password.addEventListener('blur', handleOnBlur3);
function handleOnFocus3(){
    error3.style.display = 'none';
}
password.addEventListener('focus', handleOnFocus3);
// Repeat password field
var rPassword = document.getElementById('rpassword');
var error4 = document.getElementById('error4');
function handleOnBlur4(e){
    var newPassword = e.target.value;
    if(newPassword === formValues.password){
        errorValues[3] = "";
    }else{
        error4.style.display = 'block';
        errorValues[3] = " Repeat password field";
    }
}
rPassword.addEventListener('blur', handleOnBlur4);
function handleOnFocus4(){
    error4.style.display = 'none';
}
rPassword.addEventListener('focus', handleOnFocus4);
// Age field
var age = document.getElementById('age');
var error5 = document.getElementById('error5');
function handleOnBlur5(e){
    if(ageValidation(e.target.value)){
        formValues.age = e.target.value;
        errorValues[4] = "";
    }else{
        error5.style.display = 'block';
        formValues.age = undefined;
        errorValues[4] = " Age field";
    }
}
age.addEventListener('blur', handleOnBlur5);
function handleOnFocus5(){
    error5.style.display = 'none';
}
age.addEventListener('focus', handleOnFocus5);
// Phone field
var phone = document.getElementById('phone');
var error6 = document.getElementById('error6');
function handleOnBlur6(e){
    if(phoneValidation(e.target.value)){
        formValues.phone = e.target.value;
        errorValues[5] = "";
    }else{
        error6.style.display = 'block';
        formValues.phone = undefined;
        errorValues[5] = " Phone field";
    }
}
phone.addEventListener('blur', handleOnBlur6);
function handleOnFocus6(){
    error6.style.display = 'none';
}
phone.addEventListener('focus', handleOnFocus6)
// Adress field
var adress = document.getElementById('adress');
var error7 = document.getElementById('error7');
function handleOnBlur7(e){
    if(adressValidation(e.target.value)){
        formValues.adress = e.target.value;
        errorValues[6] = "";
    }else{
        error7.style.display = 'block';
        formValues.adress = undefined;
        errorValues[6] = " Adress field";
    }
}
adress.addEventListener('blur', handleOnBlur7);
function handleOnFocus7(){
    error7.style.display = 'none';
}
adress.addEventListener('focus', handleOnFocus7)
// City field
var city = document.getElementById('city');
var error8 = document.getElementById('error8');
function handleOnBlur8(e){
    if(cityValidation(e.target.value)){
        formValues.city = e.target.value;
        errorValues[7] = "";
    }else{
        error8.style.display = 'block';
        formValues.city = undefined;
        errorValues[7] = " City field";
    }
}
city.addEventListener('blur', handleOnBlur8);
function handleOnFocus8(){
    error8.style.display = 'none';
}
city.addEventListener('focus', handleOnFocus8)
// Zip field
var zip = document.getElementById('zip');
var error9 = document.getElementById('error9');
function handleOnBlur9(e){
    if(zipValidation(e.target.value)){
        formValues.zip = e.target.value;
        errorValues[8] = "";
    }else{
        error9.style.display = 'block';
        formValues.zip = undefined;
        errorValues[8] = " Zip field";
    }
}
zip.addEventListener('blur', handleOnBlur9);
function handleOnFocus9(){
    error9.style.display = 'none';
}
zip.addEventListener('focus', handleOnFocus9)
// Dni field
var dni = document.getElementById('dni');
var error10 = document.getElementById('error10');
function handleOnBlur10(e){
    if(dniValidation(e.target.value)){
        formValues.dni = e.target.value;
        errorValues[9] = "";
    }else{
        error10.style.display = 'block';
        formValues.dni = undefined;
        errorValues[9] = " DNI field";
    }
}
dni.addEventListener('blur', handleOnBlur10);
function handleOnFocus10(){
    error10.style.display = 'none';
}
dni.addEventListener('focus', handleOnFocus10)
// Suscribe Button
var button = document.getElementById('suscribe-buton');
function handleOnClick(e){
    e.preventDefault;
    if(dataValidation(formValues)){
        alert(formValues.name + " " + formValues.email + " " + formValues.age + " " + formValues.phone + " " + formValues.adress + " " + formValues.city + " " + formValues.zip + " " + formValues.dni);
    }else{
        alert("There's an error in: " + errorValues[0] + errorValues[1] + errorValues[2] + errorValues[3] + errorValues[4] + errorValues[5] + errorValues[6] + errorValues[7] + errorValues[8] + errorValues[9]);
    }
}
button.addEventListener('click', handleOnClick);
//Bonus
var newTitle = document.querySelector('h4');
function handleOnFocus11(){
    newTitle.style.display = 'block';
}
function handleOnKeydown(e){
    newTitle.innerText = 'Hola '+ e.target.value;
}
fullName.addEventListener('focus', handleOnFocus11);
fullName.addEventListener('keydown', handleOnKeydown);
