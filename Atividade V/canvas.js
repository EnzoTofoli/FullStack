window.onload = function () {
  desenharCanvas1();
  desenharCanvas2();
};

function desenharCanvas1() {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  // --- Funções auxiliares ---
  function desenhar_quadrado(x, y, cor, tamanho = 40) {
    ctx.fillStyle = cor;
    ctx.fillRect(x, y, tamanho, tamanho);
  }

  function desenhar_linha(x1, y1, x2, y2, cor = 'black', largura = 1) {
    ctx.strokeStyle = cor;
    ctx.lineWidth = largura;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
  }

  function desenhar_arco(x, y, raio, angIni, angFim, cor = 'black', largura = 1, anti = false) {
    ctx.beginPath();
    ctx.arc(x, y, raio, angIni, angFim, anti);
    ctx.strokeStyle = cor;
    ctx.lineWidth = largura;
    ctx.stroke();
  }

  function escrever(texto, x, y, cor = 'black', fonte = '16px Arial') {
    ctx.fillStyle = cor;
    ctx.font = fonte;
    ctx.textAlign = 'center';
    ctx.fillText(texto, x, y);
  }

  function desenhar_circulo(x, y, raio, cor) {
    ctx.beginPath();
    ctx.arc(x, y, raio, 0, 2 * Math.PI);
    ctx.fillStyle = cor;
    ctx.fill();
  }

  function circBorda(x, y, r, corFill, corStroke, lw = 2) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.fillStyle = corFill;
    ctx.fill();
    ctx.strokeStyle = corStroke;
    ctx.lineWidth = lw;
    ctx.stroke();
  }

  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  desenhar_quadrado(0, 0, 'blue', 60);
  desenhar_quadrado(240, 0, 'red', 60);
  desenhar_quadrado(0, 240, 'yellow', 60);
  desenhar_quadrado(30, 240, 'white', 30);
  desenhar_quadrado(240, 240, 'black', 60);
  desenhar_quadrado(240, 240, 'white', 30);
  desenhar_quadrado(0, 120, 'cyan', 30);
  desenhar_quadrado(0, 150, 'cyan', 30);
  desenhar_quadrado(270, 135, 'cyan', 30);
  desenhar_linha(0, 150, 300, 150, 'green', 2);
  desenhar_linha(150, 150, 150, 300, 'black', 1);
  desenhar_linha(40, 40, 150, 150, 'blue', 2);
  desenhar_linha(260, 40, 150, 150, 'red', 2);
  desenhar_arco(150, 150, 80, Math.PI, 1.25 * Math.PI, 'green', 2, false);
  desenhar_arco(150, 150, 80, 0, -0.245 * Math.PI, 'green', 2, true);
  desenhar_arco(150, 150, 60, Math.PI, 2 * Math.PI, 'green', 2, false);
  desenhar_arco(150, 300, 80, Math.PI, 1.50 * Math.PI, 'green', 2, false);
  desenhar_arco(150, 300, 60, 0, -0.50 * Math.PI, 'green', 2, true);
  circBorda(150, 120, 15, 'cyan', 'blue');
  circBorda(150, 300, 40, 'cyan', 'green');
  circBorda(80, 220, 15, 'yellow', 'green');
  circBorda(220, 220, 15, 'yellow', 'green');
  desenhar_quadrado(110, 150, 'red', 40);
  escrever('Canvas', 150, 35, 'black', '20px Arial');
}

function desenharCanvas2() {
  const canvas = document.getElementById('canvas2');
  const ctx = canvas.getContext('2d');

  function desenhar_quadrado(x, y, cor, tamanho = 40) {
    ctx.fillStyle = cor;
    ctx.fillRect(x, y, tamanho, tamanho);
  }

  function desenhar_triangulo(x1, y1, x2, y2, x3, y3, cor = 'black') {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineTo(x3, y3);
    ctx.closePath();
    ctx.fillStyle = cor;
    ctx.fill();
  }

  function desenhar_circulo(x, y, raio, cor) {
    ctx.beginPath();
    ctx.arc(x, y, raio, 0, 2 * Math.PI);
    ctx.fillStyle = cor;
    ctx.fill();
  }

  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  desenhar_quadrado(0, 0, 'lightgreen', 300);
  desenhar_quadrado(0, 230, 'gray', 300);
  desenhar_quadrado(110, 150, 'brown', 80);
  desenhar_triangulo(110, 150, 150, 110, 190, 150, 'orange');
  desenhar_quadrado(140, 185, 'black', 20);
  desenhar_quadrado(140, 200, 'black', 20);
  desenhar_quadrado(140, 210, 'black', 20);
  desenhar_quadrado(115, 160, 'lightblue', 25);
  desenhar_quadrado(160, 160, 'lightblue', 25);
  desenhar_circulo(0, 230, 40, 'lightblue');
  desenhar_circulo(110, 300, 40, 'lightblue');
  desenhar_quadrado(0, 230, 'lightblue', 40);
  desenhar_quadrado(0, 270, 'lightblue', 40);
  desenhar_quadrado(40, 261, 'lightblue', 40);
  desenhar_quadrado(80, 261, 'lightblue', 40);
  desenhar_quadrado(40, 190, 'brown', 20);
  desenhar_quadrado(40, 210, 'brown', 20);
  desenhar_quadrado(260, 230, 'brown', 20);
  desenhar_quadrado(260, 250, 'brown', 20);
  desenhar_circulo(270, 210, 25, 'green');
  desenhar_circulo(50, 170, 25, 'green');
  desenhar_circulo(225, 75, 40, 'yellow');
}