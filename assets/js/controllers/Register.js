import User from "../models/User.js"
import Validate from "./Validade.js"

const elements = document.querySelectorAll("[data-element]")
const form = document.querySelector("form")
const button = document.querySelector("[data-submit]")

const validate = new Validate();

form.addEventListener("submit", e => {
    e.preventDefault()
})

elements.forEach((element, index) => {
    element.addEventListener("blur", e => {
        validate.checked(element, e.target);
    })
})