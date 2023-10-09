let tg = window.Telegram.WebApp;
let btn = document.getElementById("get");
let text = document.getElementById("text");

btn.addEventListener("click", () => {
    if (text.value == "" || text.value == " ") {
        alert("Введите пожалуйста почту!");
    }
    else {
        tg.close();
    }
});

text.textContent = tg.initDataUnsafe.user.first_name + ", Вы выиграли главный приз! Скорее напишите свою почту чтобы получить подарок!";