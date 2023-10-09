let tg = window.Telegram.WebApp;
let btn = document.getElementById("get");
let text = document.getElementById("email");
let output = document.getElementById("output");

btn.addEventListener("click", () => {
    if (text.value == "" || text.value == " ") {
        output.className = "wrong";
        output.textContent = "Пожалуйста укажите почту!";
    }
    else {
        if (text.value.includes("@") && text.value.includes(".")) {
            output.className = "right";
            output.textContent = "Подарок был выслан на данный адрес почты! Ожидайте!";
            setTimeout(function(){tg.close()}, 3000);
        }
        else {
            output.className = "wrong";
            output.textContent = "Пожалуйста укажите настоящую почту!";
        }
    }
});

text.textContent = tg.initDataUnsafe.user.first_name + ", Вы выиграли главный приз! Скорее напишите свою почту чтобы получить подарок!";