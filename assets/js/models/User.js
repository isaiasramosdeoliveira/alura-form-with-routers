const button = document.querySelector("[data-submit]")
const elements = document.querySelectorAll("[data-element]")
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
}