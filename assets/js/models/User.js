const button = document.querySelector("[data-submit]")
const elements = document.querySelectorAll("[data-element]")
const list = document.querySelector("[data-list-message]");



async function loadUser(dice) {
    const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dice)
    })
    window.location.href = '../../assets/pages/logged.html';
}

export default class User {
    create() {
        button.removeAttribute("disabled")
        button.addEventListener("click", e => {
            loadUser({
                name: elements[0].value,
                email: elements[1].value,
                cpf: elements[2].value,
                city: elements[3].value,
            })
        })
    }
    static createMessages(messages) {
        messages.forEach(messages => {
            list.innerHTML += `
            <li class="message" data-id=${messages.id}>
                <span class="message__img"></span>
                <div class="message__descreption">
                  <p class="message__describe">${messages.message}</p>
                  <h2 class="message__title">${messages.name}</h2>
                </div>
                <span class="message__status ${messages.status}" data-status=${messages.status}></span>
              </li>
            `
        })
    }
}