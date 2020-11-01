function nameValidation (fullname) {
    return fullname.length >=6 && fullname.indexOf(' ') !== -1;
}
function emailValidation(mail){
    return /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(mail)
}
function passwordValidation(pass){
    return pass.length >=8 && /^[a-z0-9A-Z]/.test(pass);
}
function ageValidation(age){
    return age % 1 == 0 && age >= 18; 
}
function phoneValidation(phone){
    return phone.length >= 7 && /^[0-9]+$/.test(phone);
}
function adressValidation(adress){
    return  adress.length >= 5 && /^([a-zA-Z0-9]+\s{1}[0-9]+)$/.test(adress);
}
function cityValidation(city){
    return city.length >= 3;
}
function zipValidation(post){
    return post.length >= 3;
}
function dniValidation(dni){
    return /^[0-9]{7,8}$/.test(dni);
}
function dataValidation(data) {
return data.name && data.email && data.password && data.rpassword && data.age && data.phone && data.adress && data.city && data.zip && data.dni;
}
