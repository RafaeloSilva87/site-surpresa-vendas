// ============================================================
// Configurações da página de vendas. Edite aqui o número de
// WhatsApp e, se mudar os preços, regenere os códigos Pix com
// gerar_pix.py (na pasta "Modulo venda") e cole os novos valores.
// ============================================================

const VENDAS = {
    whatsapp: "5512974031951", // troque pelo seu número com DDI+DDD, só números
    painel: "https://rafaelosilva87.github.io/site-surpresa-painel/", // painel onde o cliente monta o site

    planos: [
        {
            id: "padrao",
            nome: "Padrão",
            preco: "29,90",
            descricao: "O site completo: bilhetes, mural de fotos, varal de motivos e raspadinhas surpresa.",
            itens: [
                "Domínio próprio (ex: seunome.com)",
                "Até 8 fotos no mural",
                "Bilhetes, motivos e raspadinhas personalizados",
                "Sem música de fundo"
            ],
            pixImagem: "pix/pix-padrao.png",
            pixCodigo: "00020101021126330014br.gov.bcb.pix011143454889820520400005303986540529.905802BR5922RAFAEL OTAVIO DA SILVA6014BELO HORIZONTE62140510SITEPADRAO63045D15"
        },
        {
            id: "completo",
            nome: "Completo",
            preco: "39,90",
            descricao: "Tudo do Padrão, com música de fundo escolhida por vocês e mais espaço pra fotos.",
            itens: [
                "Tudo do plano Padrão",
                "Música de fundo personalizada",
                "Até 12 fotos no mural",
                "Entrega prioritária"
            ],
            pixImagem: "pix/pix-completo.png",
            pixCodigo: "00020101021126330014br.gov.bcb.pix011143454889820520400005303986540539.905802BR5922RAFAEL OTAVIO DA SILVA6014BELO HORIZONTE62160512SITECOMPLETO6304CE03",
            destaque: true
        },
        {
            id: "premium",
            nome: "Premium",
            preco: "109,90",
            descricao: "A experiência completa: fotos ilimitadas e suporte pra ajustar o site depois da entrega.",
            itens: [
                "Tudo do plano Completo",
                "Fotos ilimitadas",
                "Suporte para modificações depois da entrega"
            ],
            pixImagem: "pix/pix-premium.png",
            pixCodigo: "00020101021126330014br.gov.bcb.pix0111434548898205204000053039865406109.905802BR5922RAFAEL OTAVIO DA SILVA6014BELO HORIZONTE62150511SITEPREMIUM6304669D"
        }
    ]
};
