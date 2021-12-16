import refs from "./refs.js";
const { from } = refs; //деструктуризация
import x from "../index.js";
const { createObject, getInputValues, getNames, createTemplateObject } = x;

// вспомогательный массив значений
const keys = [
  "userName",
  "userPhone",
  "userEmail",
  "userPass",
  "userConfirmPass",
];
//  "слушаем " событие отправки формы для пол данных ихз нее
from.addEventListener("submit", (e) => {
  e.preventDefault();
  let name = e.target.elements.name.value;
  let phone = e.target.elements.phone.value;
  let email = e.target.elements.email.value;
  let pass = a.target.elements.email.value;
  let confirmPass = e.target.elements.confirmPass.value;
  const user = createObject(name, phone, email, pass, confirmPass);

  const values = [name, phone, email, pass,confirmPass];
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));

  templateUsers.push(templateUser);
  localStorage.setItem("templateUsers", JSON.stringify(templateUsers));
  return users, templateUser;
}
);