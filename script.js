let tg = window.Telegram.WebApp;
let btn = document.getElementById("get");
let text = document.getElementById("email");
let output = document.getElementById("output");

if (tg.initDataUnsafe.user.language_code == "ru") {
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
}
else if (tg.initDataUnsafe.user.language_code == "en") {
    btn.addEventListener("click", () => {
        if (text.value == "" || text.value == " ") {
            output.className = "wrong";
            output.textContent = "Please write an email!";
        }
        else {
            if (text.value.includes("@") && text.value.includes(".")) {
                output.className = "right";
                output.textContent = "The gift has been sent to this email address! Wait!";
                setTimeout(function(){tg.close()}, 3000);
            }
            else {
                output.className = "wrong";
                output.textContent = "Please write a correct email";
            }
        }
    });

    text.textContent = tg.initDataUnsafe.user.first_name + ", You have won the main prize! Hurry up and write your email to receive a gift!";
}