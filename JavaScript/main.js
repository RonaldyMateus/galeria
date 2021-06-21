let numero = 0
let modal = document.querySelector('.modal');
let imgModal = document.querySelector('#img-modal');
let proximo = document.querySelector('#proximo');
let anterior = document.querySelector('#anterior');

function animateModal(){
    if(imgModal.classList.contains('rotate')){
        imgModal.classList.remove('rotate');
        setTimeout(function(){
            imgModal.classList.add('rotate')}, 10);
    }else{
        imgModal.classList.add('rotate');
    }
}

function trocaModal(fileName, order){
    modal.classList.remove('modal-close');
    modal.classList.add('modal');
    imgModal.setAttribute('src', fileName);
    numero = order;
    proximo.classList.add('proxAnimate');
    anterior.classList.add('prevAnimate');
    animateModal();
    return numero
}

function fecharModal(){
    modal.classList.add('modal-close');  
    proximo.classList.remove('proxAnimate');
    anterior.classList.remove('prevAnimate');
}

function prox(){
    if(numero >= 8){
        numero = 0;
    }
    numero += 1;
    imgModal.setAttribute('src','Image/'+ numero + '.jpg');
    animateModal();
    return numero
}
function prev(){
    if(numero > 1){
        numero = numero - 1
    }
    else {
        numero = 8
    }
    imgModal.setAttribute('src','Image/'+ numero + '.jpg');
    console.log(numero)
    animateModal();
    return numero
}
