const userName = document.querySelector(".user_name")
const header = document.querySelector('.headline') 
//const nameValue = prompt("이름을 입력하세요");
const NAME_KEY = "name";


localStorage.setItem(NAME_KEY,nameValue);
const getName = localStorage.getItem(NAME_KEY);
userName.innerText = getName
header.innerText = `${getName}의 미니홈피 입니다.`