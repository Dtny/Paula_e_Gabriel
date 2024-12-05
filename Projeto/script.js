const f = document.getElementById('cadastroForm');
const t = document.getElementById('tabelaCadastros');
const k = 'cadastros';

function c() {
  return JSON.parse(localStorage.getItem(k)) || [];
}

function s(cad) {
  localStorage.setItem(k, JSON.stringify(cad));
}

function r() {
  const cad = c();
  t.innerHTML = '';
  cad.forEach((e, i) => {
    const l = document.createElement('tr');
    l.innerHTML = `
      <td>${e.nome}</td>
      <td>${e.email}</td>
      <td>${e.idade}</td>
      <td><button onclick="rm(${i})">Remover</button></td>
    `;
    t.appendChild(l);
  });
}

function a(e) {
  e.preventDefault();
  const n = f.nome.value.trim();
  const em = f.email.value.trim();
  const id = f.idade.value.trim();

  if (n && em && id) {
    const cad = c();
    cad.push({ nome: n, email: em, idade: id });
    s(cad);
    r();
    f.reset();
  }
}

function rm(i) {
  const cad = c();
  cad.splice(i, 1);
  s(cad);
  r();
}

f.addEventListener('submit', a);
r();
