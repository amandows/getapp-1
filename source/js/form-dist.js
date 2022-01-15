function checkForm(el) {
  var name = el.name.value;
  var pass = el.pass.value;
  var repass = el.repass.value;
  var state = el.state.value;
  var fail = "";
  if(name == "" || pass == "" || state == "") {
    fail = "Заполните все поля!!!";
  }
  else if(name.length <= 2 || name.length > 30) {
    fail = "Введите Правильно имя!!";
  }
  else if(pass != repass) {
    fail = "Пароли не совпадают!!!";
  }
  else if(pass.split("&").length > 1) {
    fail = "Не корректный пароль";
  }
  if(fail != "") {
    document.getElementById('error').innerHTML = fail;
    return false;
  } else {
    alert('Все поля корректно заполнены')
    return true;
  }
}
