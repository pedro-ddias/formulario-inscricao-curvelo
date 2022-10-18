function habilitaBotao() {
    const campos = document.querySelectorAll('.required');

    if (campos[0].value && campos[1].value && campos[2].value) {
        document.querySelector('#button-inscrever').disabled = false;
    } else {
        document.querySelector('#button-inscrever').disabled = true;
    }
}