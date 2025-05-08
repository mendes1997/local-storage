let btn = document.querySelector("#btn")
let user = document.querySelector("#user")
let welcome = document.querySelector("#welcome")
let exit = document.querySelector("#exit")

/* 1- salvar localStorage*/
/* ocalStorage.setItem("name", "user.value") /*

/* 2 - pegar Item LocalStorage */
/* localStorage.getItem("name") */


/* 3 - Excluir Item LocalStorage */ 
/* localStorage.removeItem("name") */

const sair = ()=> {
    localStorage.removeItem("name") 
   welcome.innerHTML = `Faça seu login` 

}



exit.addEventListener("click", sair)


function pegarNome() {
    localStorage.setItem("name", user.value)
    let nome = localStorage.getItem("name")

    welcome.innerHTML = `Bem-Vindo ${nome}! `
    user.value = ""

}    


function local () {
let nome = localStorage.getItem("name")

if(nome == null) {
    welcome.innerHTML = ""
}else {
welcome.innerHTML = `Bem-Vindo ${nome}! ` 
}
}

local()

btn.addEventListener("click",pegarNome)

