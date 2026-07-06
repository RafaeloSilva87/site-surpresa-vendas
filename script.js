// ---- Monta os cards de plano a partir do config.js ----
const planosContainer = document.getElementById('planos');

VENDAS.planos.forEach(plano => {
    const card = document.createElement('div');
    card.className = 'plano-card' + (plano.destaque ? ' destaque' : '');
    card.innerHTML = `
        <h3>${plano.nome}</h3>
        <p class="preco">R$ ${plano.preco}</p>
        <p class="descricao">${plano.descricao}</p>
        <ul>
            ${plano.itens.map(i => `<li><svg class="icon" aria-hidden="true"><use href="#icon-check"/></svg><span>${i}</span></li>`).join('')}
        </ul>
        <button class="botao-comprar" data-plano="${plano.id}">escolher ${plano.nome.toLowerCase()}</button>
    `;
    planosContainer.appendChild(card);
});

// ---- Modal de pagamento Pix ----
const modal = document.getElementById('modal-pix');
const modalTitulo = document.getElementById('modal-titulo');
const modalPreco = document.getElementById('modal-preco');
const modalQr = document.getElementById('modal-qr');
const modalCodigoTexto = document.getElementById('modal-codigo-texto');
const modalWhatsapp = document.getElementById('modal-whatsapp');
const modalPainel = document.getElementById('modal-painel');

document.querySelectorAll('.botao-comprar').forEach(btn => {
    btn.addEventListener('click', () => {
        const plano = VENDAS.planos.find(p => p.id === btn.dataset.plano);
        modalTitulo.textContent = `Plano ${plano.nome}`;
        modalPreco.textContent = `R$ ${plano.preco}`;
        modalQr.src = plano.pixImagem;
        modalCodigoTexto.textContent = plano.pixCodigo;

        modalPainel.href = `${VENDAS.painel}?plano=${plano.id}`;

        const mensagem = encodeURIComponent(`Oi! Paguei o plano ${plano.nome} (R$ ${plano.preco}) do site surpresa. Vou montar meu site no painel e te mando o arquivo :)`);
        modalWhatsapp.href = `https://wa.me/${VENDAS.whatsapp}?text=${mensagem}`;

        modal.classList.add('aberto');
    });
});

document.getElementById('fechar-modal').addEventListener('click', () => {
    modal.classList.remove('aberto');
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('aberto');
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') modal.classList.remove('aberto');
});

document.getElementById('copiar-codigo').addEventListener('click', function() {
    navigator.clipboard.writeText(modalCodigoTexto.textContent).then(() => {
        this.textContent = 'copiado!';
        setTimeout(() => { this.textContent = 'copiar'; }, 2000);
    });
});
