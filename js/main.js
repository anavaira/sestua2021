function domReady(){
    var href = window.location.href;

    var imagenTotal = 0;
    var imagenPrefijo;
    if(href.indexOf('franca') > -1){
        imagenTotal = 17;
        imagenPrefijo = 'la-franca/la-franca';
    }else if(href.indexOf('piedra') > -1){
        imagenTotal = 29;
        imagenPrefijo = 'bajo-la-piedra/bajo-la-piedra';
    }else if(href.indexOf('colonia') > -1){
        imagenTotal = 25;
        imagenPrefijo = 'colonia/colonia';
    }else if(href.indexOf('proyecto-a') > -1){
        imagenTotal = 15;
        imagenPrefijo = 'a/a';
    }else if(href.indexOf('mutante') > -1){
        imagenTotal = 23;
        imagenPrefijo = 'mutante/mutante';
    }

    if(imagenTotal > 0){
        let mainContent = document.getElementById('main-content');

        for(let i = 1; i <= imagenTotal; i++){
            let imgId = (i < 10)? '0'+i:i;
            mainContent.insertAdjacentHTML('beforeend', '<img src="img/'+imagenPrefijo+imgId+'.jpg" class="main-img" alt="imagen"></img>');
        }

        function setImagenPosicion(index){
            let imagen = mainContent.childNodes[index];
            mainRect = mainContent.getBoundingClientRect();
            imagenRect = imagen.getBoundingClientRect();
            mainContent.style.right = ((imagenRect.left-mainRect.left+40)*1)+'px';
        }

        var currentIndex = -1;
        function previousClick(){
            currentIndex = (currentIndex > 0)? currentIndex-1:imagenTotal-1; 
            setImagenPosicion(currentIndex);
        }

        function nextClick(){
            currentIndex = (currentIndex < imagenTotal-1)? currentIndex+1:0; 
            setImagenPosicion(currentIndex);
        }

        let previousImagen = document.getElementById('previous');
        let nextImagen = document.getElementById('next');
        previousImagen.addEventListener("click", previousClick);
        nextImagen.addEventListener("click", nextClick);

        nextClick();
    }
    


}
domReady();

let hide = document.getElementById('hide');
let menu = document.getElementById('menu');

function toggleMenu(){
    menu.classList.toggle('hidden');
};

console.log(hide);
console.log(menu);
hide.addEventListener("click", toggleMenu, false);

// $(".hide").on('click', function(){
//     $("nav ul").toggle('slow');
// });