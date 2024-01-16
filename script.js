const square = document.getElementById('square');

const centerSqure = () => {
  square.style.marginLeft = window.innerWidth/2 - square.clientWidth/2 + 'px';
  square.style.marginTop = window.innerHeight/2 - square.clientHeight/2 + 'px';
}

centerSqure();
window.addEventListener('resize', centerSqure);