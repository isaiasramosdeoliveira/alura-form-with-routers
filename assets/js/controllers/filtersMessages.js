import connectionAPI from "../../api/api.js";
import User from "../models/User.js";
import loadMessages from "./AddMessages.js";
const buttons = document.querySelectorAll('[data-button]')
const seach = document.querySelector("[data-seach]")
const list = document.querySelector("[data-list-message]");

async function loadMessage(status) {
    const messages = await connectionAPI();
    messages.forEach(message => {
        if (message.status === status) {
            loadMessages(true, [message])
        }
    })
}
async function seachMessage(value) {
    const list = await fetch(`http://localhost:3000/messages?q=${value}`)
    const message = await list.json()
    loadMessages(true, message)
}
buttons.forEach(button => {
    button.addEventListener("click", e => {
        const status = e.target.dataset.button
        loadMessage(status)
        list.innerHTML = ''
    })
})

seach.addEventListener("input", e => {
    const value = e.target.value
    seachMessage(value)
    list.innerHTML = ''
})