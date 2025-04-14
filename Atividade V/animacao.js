const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const img = new Image();
img.src = 'imagem.png';

let mouseX = canvas.width/2;
let mouseY = canvas.height/2;

const imgWidth = 50;
const imgHeight = 50;

img.onload = () => {
    desenhar();
};

canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    mouseX = Math.min(Math.max(x, imgWidth/2), canvas.width - imgWidth/2);
    mouseY = Math.min(Math.max(y, imgHeight/2), canvas.height - imgHeight/2);
});

document.addEventListener('mouseleave', () => {

});

function desenhar(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.drawImage(img, mouseX - imgWidth/2, mouseY - imgHeight/2, imgWidth, imgHeight);

    requestAnimationFrame(desenhar);
}