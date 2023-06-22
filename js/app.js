var botao = document.getElementById('botao-sinal');
botao.addEventListener('click', function() {
  var jogadas = getRandomInt(5, 20);
  var tipoJogo = getRandomTipoJogo();
  
  document.getElementById('jogadas').textContent = jogadas;
  document.getElementById('tipo-jogo').textContent = tipoJogo;
});

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomTipoJogo() {
  var tipos = ['Normal', 'Turbo'];
  var randomIndex = Math.floor(Math.random() * tipos.length);
  return tipos[randomIndex];
}

function gerarSinal() {

  var botao = document.getElementById("botao-sinal");
  botao.innerHTML = "Aguarde 90 segundos...";
  botao.style.backgroundColor = "#c3c3c3";
  botao.disabled = true;

var segundos = 90;
var cronometro = setInterval(function() {
  segundos--;
  botao.innerHTML = "Aguarde " + segundos + " segundos...";
  if (segundos == 0) {
    clearInterval(cronometro);
    botao.innerHTML = "HACKEAR SINAL";
    botao.style.backgroundColor = "#ffb43a";
    botao.disabled = false;
  }
}, 1000);
}