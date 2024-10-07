function saludar(){
    let texto = document.getElementById("txtDato").value;
    let titulo = document.getElementById("titulo");
    titulo.innerHTML = texto;

    parrafo.innerHTML = 'Parrafo:' +texto;

    titulo.style.color = '#0bd04e';

    parrafo.style.backgroundColor = '#f231e1';

    // alert(texto);
}