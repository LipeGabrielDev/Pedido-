document.getElementById('botaoSim').addEventListener('click', function() {
    alert('Eu te amo meu amor!');
});

document.getElementById('botaoNao').addEventListener('click', function() {
    let x = Math.floor(Math.random() * window.innerWidth);
    let y = Math.floor(Math.random() * window.innerHeight);

    this.style.position = 'absolute';
    this.style.left = x + 'px';
    this.style.top = y + 'px';

});