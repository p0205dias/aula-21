const formulario = document.getElementById("contato");

formulario.addEventListener("submit", manipuladorDeContato)

function manipuladorDeContato(event) {
    event.preventDefault();
    const nome = document.getElementById("nome").value;
    const sobrenome = document.getElementById("sobrenome").value;
    const genero= document.querySelector("input[name='genero']:checked").value;
    const email = document.getElementById("email").value;
    const mensagem= document.getElementById("mensagem").value;
    
    console.log(nome);
    console.log(sobrenome);
    console.log(genero);
    console.log(email);
    console.log("mensagem:",mensagem);
   
}
