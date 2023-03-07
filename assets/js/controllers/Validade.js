import User from "../models/User.js";

export default class Validate extends User {
    constructor(name, email, cpf, city) {
        super(name, email, cpf, city)
    }
    checked(element, event) {
        if(
            this.validateCamps(element, event) &&
            this.validateCPF(element, event) &&
            this.validateNumbers(element, event)
        ){
            this.create()
        }
    }
    validateCamps(element, event) {
        const warning = event.parentElement.querySelector(".warning")
        if (event.value === "") {
            warning.innerHTML = "Preencha o campo.";
            return false
        }
        warning.innerHTML = ""
        return true
    }
    validateCPF(element, event) {
        if(element.name === "cpf"){
            if (event.value.length < 11) {
                const warning = event.parentElement.querySelector(".warning")
                warning.innerHTML = "O CPF precisa estar entre 11 e 14 números."
                return false
            }
            return true
        }
        return
    }
    validateNumbers(element, event) {
        if(element.name === "cpf"){
            let cpf = event.value
            cpf = cpf.replace(/\D/g, '');
            if (cpf.toString().length != 11 || /^(\d)\1{10}$/.test(cpf)) return false;
            var result = true;
            [9, 10].forEach(function (j) {
                var soma = 0,
                    r;
                cpf.split(/(?=)/).splice(0, j).forEach(function (e, i) {
                    soma += parseInt(e) * ((j + 2) - (i + 1));
                });
                r = soma % 11;
                r = (r < 2) ? 0 : 11 - r;
                if (r != cpf.substring(j, j + 1)) result = false;
            });
            if (!result) {
                const warning = event.parentElement.querySelector(".warning")
                warning.innerHTML = "O CPF inválido";
                return false
            }
            return result;
        }
        return
    }
}