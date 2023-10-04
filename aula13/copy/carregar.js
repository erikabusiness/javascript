function carregar() {
  var relogio = document.querySelector("#pmain");
  var img = document.querySelector("#imgmain");
  var hora = new Date();
  var horaAtual = hora.getHours();
  var data = new Date();
  var dataAtual = data.getDate();

  if (horaAtual >= 0 && horaAtual < 12) {
    relogio.innerHTML = +` ${horaAtual} horas da manhã
    <p>Bom dia!</p>`;
    img.src = "./assets/manha.jpg";
    document.body.background = "#64ed82";
  } else if (horaAtual >= 12 && horaAtual < 18) {
    relogio.innerHTML = +`${horaAtual} horas da tarde
    <p>Boa Tarde</p>`;
    img.src = "./assets/tarde.jpg";
    document.body.background = "#ed649b";
  } else {
    relogio.innerHTML = +`${horaAtual} horas do noite
    <p> Boa Noite </p>`;
    img.src = "./asstes.noite.jpg";
    document.body.background = "#b47626";
  }
}
