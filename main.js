function ola() {
    console.log("Olá, Guilherme!")
}

function fnValidarIdade() {
  var idade = document.getElementById("idadeUsuario").value;
  if (idade >= 18) {
    alert("Parabéns! Você pode dirigir.");
  } else {
    alert("Você não pode dirigir.");
  }
}

function fnValidarVogal() {
    var vogal = document.getElementById("vogalUsuario").value;
    vogal = vogal.toLowerCase();

    switch(vogal) {
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
            alert("Você digitou uma vogal!");
            break;
        default:
            alert("Você digitou uma consoante!")
            break;
    }
}