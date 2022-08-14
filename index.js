
function mostrar(idSpan,idBoton){
    let hideText = document.getElementById(idSpan);
    let hideText_btn = document.getElementById(idBoton);

    hideText.classList.toggle('show');

    if(hideText.classList.contains('show')){
        hideText_btn.innerHTML = '- Ver menos';
    }
    else{
        hideText_btn.innerHTML = '+ Ver mas';
    }

}
