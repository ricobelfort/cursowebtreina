
function validarForm() {
    var nome = document.getElementById('nome').value;
    nome = nome.trim();
    if (nome.trim() == "") {
        alert('Informe o nome');
        document.getElementById('nome').focus();
        return;
    }
    if (nome.length < 3) {
        alert('O nome deverá ter no mínimo 3 caracteres');
        document.getElementById('nome').focus();
        return;
    }
    if (nome.length > 10) {
        alert('O nome deverá ter no máximo 10 caracteres');
        document.getElementById('nome').focus();
        return;
    }

    var cpf = document.getElementById('cpf').value;
    cpf = cpf.trim();
    if (cpf.trim() == "") {
        alert('Informe o cpf');
        document.getElementById('cpf').focus();
        return;
    }
    if (cpf.length < 3) {
        alert('O cpf deverá ter no mínimo 3 caracteres');
        document.getElementById('cpf').focus();
        return;
    }
    if (cpf.length > 11) {
        alert('O cpf deverá ter no máximo 10 caracteres');
        document.getElementById('cpf').focus();
        return;
    }

}