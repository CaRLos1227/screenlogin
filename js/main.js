$('document').ready(() => {
  $('#formularie').submit(() => {
    const name = document.getElementById('i-1');
    const password = document.getElementById('i-2');
    if (!name.value) return alert('definir o nome é obrigatório!');
    if (!password.value) return alert('definir sua senha é obrigatório!');
    alert('usuario criado!!');
    fetch(`/register?name=${name.value}&password=${password.value}`);
  });
});